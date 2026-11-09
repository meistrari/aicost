import { expect, test } from 'bun:test'

function probeCatalog(mode: 'legacy' | 'pre-google' | 'pre-audio' | 'current') {
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
        if (${JSON.stringify(mode)} === 'pre-audio') {
            const model = remote['vertex-ai'].find(model => model.name === 'gemini-3.1-flash-lite');
            for (const tier of model.tokenPricing) if (tier.serviceTier === 'flex') delete tier.cacheReadAudioCost;
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

test('a remote catalog missing verified audio dimensions cannot replace the bundled catalog', () => {
    const { cost, fetches } = probeCatalog('pre-audio')
    expect(fetches).toBe(1)
    expect(cost.inputCost).toBeCloseTo(100 * 3e-6, 12)
})

test('refreshed permanent Google prices can remove the introductory expiry', () => {
    const script = `
        const { AICostModelList } = await import(${JSON.stringify(new URL('./model-list.ts', import.meta.url).href)});
        const remote = structuredClone(AICostModelList);
        const model = remote['gemini-api'].find(model => model.name === 'gemini-4-argon');
        delete model.pricingValidUntil;
        model.inputCost = 4e-6;
        model.outputCost = 20e-6;
        const standard = model.tokenPricing.find(tier => tier.serviceTier === 'standard');
        standard.inputCost = 4e-6;
        standard.outputCost = 20e-6;
        globalThis.fetch = async () => Response.json(remote);
        const { calculateCost } = await import(${JSON.stringify(new URL('./index.ts', import.meta.url).href)});
        console.log(JSON.stringify(await calculateCost({ provider: 'gemini-api', model: 'gemini-4-argon', inputAmount: 1000, outputAmount: 100, pricingDate: '2026-12-02T00:00:00Z', strict: true })));
    `
    const result = Bun.spawnSync({ cmd: [process.execPath, '--eval', script], env: { ...process.env, NODE_ENV: 'test' }, stdout: 'pipe', stderr: 'pipe' })
    expect(result.exitCode).toBe(0)
    const cost = JSON.parse(result.stdout.toString()) as { inputCost: number, outputCost: number }
    expect(cost.inputCost).toBeCloseTo(0.004, 12)
    expect(cost.outputCost).toBeCloseTo(0.002, 12)
})
