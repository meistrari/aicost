import { expect, test } from 'bun:test'

function probeCatalog(mode: 'legacy' | 'pre-google' | 'current') {
    // A fresh process exercises the real module cache and remote-fetch path independently.
    const script = `
        const { AICostModelList } = await import(${JSON.stringify(new URL('./model-list.ts', import.meta.url).href)});
        const remote = structuredClone(AICostModelList);
        if (${JSON.stringify(mode)} === 'legacy') {
            for (const models of Object.values(remote)) for (const model of models) delete model.tokenPricing;
        } else {
            const model = remote.anthropic.find(model => model.name === 'claude-sonnet-4-6');
            model.inputCost = 7e-6;
            const standard = model.tokenPricing?.find(tier => tier.aboveInputTokens === 0 && tier.serviceTier === 'standard');
            if (standard) standard.inputCost = 7e-6;
        }
        if (${JSON.stringify(mode)} === 'pre-google') {
            delete remote['gemini-api'];
            for (const model of remote['vertex-ai']) {
                delete model.nonGlobalCostMultiplier;
                delete model.pricingValidUntil;
            }
        }
        let fetches = 0;
        globalThis.fetch = async () => { fetches++; return Response.json(remote); };
        const { calculateCost } = await import(${JSON.stringify(new URL('./index.ts', import.meta.url).href)});
        const cost = await calculateCost({ provider: 'anthropic', model: 'claude-sonnet-4-6', inputAmount: 100, cacheCreationInputTokens: 100, cacheCreationInputTokens1h: 100, strict: true });
        console.log(JSON.stringify({ cost, fetches }));
    `
    const result = Bun.spawnSync({ cmd: [process.execPath, '--eval', script], env: { ...process.env, NODE_ENV: 'test' }, stdout: 'pipe', stderr: 'pipe' })
    expect(result.exitCode).toBe(0)
    return JSON.parse(result.stdout.toString()) as { cost: { inputCost: number, cacheCreationInputCost: number }, fetches: number }
}

test('an old remote catalog cannot erase bundled extended cache pricing', () => {
    const { cost, fetches } = probeCatalog('legacy')
    expect(fetches).toBe(1)
    expect(cost.cacheCreationInputCost).toBeCloseTo(100 * 6e-6, 12)
    expect(cost.inputCost).toBeCloseTo(100 * 3e-6, 12)
})

test('a compatible remote catalog still updates prices', () => {
    const { cost, fetches } = probeCatalog('current')
    expect(fetches).toBe(1)
    expect(cost.inputCost).toBeCloseTo(100 * 7e-6, 12)
})

test('a remote catalog with old billing dimensions cannot erase Google backend or regional prices', () => {
    const { cost, fetches } = probeCatalog('pre-google')
    expect(fetches).toBe(1)
    expect(cost.inputCost).toBeCloseTo(100 * 3e-6, 12)
})
