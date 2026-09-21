import { describe, expect, it } from 'bun:test'
import type { AICostModelProvider } from './model-list'
import type { calculateCost } from './index'

// Compile-time coverage of the public provider/model contract.
const provider: AICostModelProvider = 'typesafe'
const model: Parameters<typeof calculateCost<'typesafe'>>[0]['model'] = 'jev-1.13.0'

describe('JEV public API', () => {
    for (const source of ['remote', 'offline']) {
        it(`discovers and prices JEV using the ${source} catalog`, async () => {
            // Separate processes isolate the module-level catalog cache from other tests.
            const script = `
                import { AICostModelList } from './src/model-list.ts';
                let fetchCount = 0;
                globalThis.fetch = async () => {
                    fetchCount++;
                    ${source === 'offline' ? 'throw new Error("offline");' : 'return Response.json(AICostModelList);'}
                };
                const { calculateCost, getModelInfo, getProviderList, getModelList } = await import('./src/index.ts');
                const options = ${JSON.stringify({ provider, model })};
                const costs = [];
                for (const inputAmount of [0, 1000, 1000000]) {
                    costs.push(await calculateCost({ ...options, inputAmount, outputAmount: 1000000 }));
                }
                console.log(JSON.stringify({
                    costs, fetchCount,
                    info: await getModelInfo(options),
                    providers: await getProviderList(),
                    models: await getModelList(options.provider),
                }));
            `
            const process = Bun.spawn([Bun.which('bun')!, '-e', script], {
                cwd: new URL('..', import.meta.url).pathname,
                stdout: 'pipe',
                stderr: 'pipe',
            })
            const output = await new Response(process.stdout).text()
            expect(await process.exited).toBe(0)
            const result = JSON.parse(output) as {
                fetchCount: number
                providers: string[]
                models: { name: string }[]
                info: { outputCost: number, outputCostUnit: string }
                costs: { inputCost: number, outputCost: number }[]
            }
            expect(result.fetchCount).toBe(1)
            expect(result.providers).toContain(provider)
            expect(result.models.map((entry: { name: string }) => entry.name)).toEqual([model])
            expect(result.info.outputCost).toBe(0)
            expect(result.info.outputCostUnit).toBe('token')
            expect(result.costs.map((cost: { inputCost: number }) => cost.inputCost)).toEqual([0, 0.000042, 0.042])
            expect(result.costs.every((cost: { outputCost: number }) => cost.outputCost === 0)).toBe(true)
        })
    }
})
