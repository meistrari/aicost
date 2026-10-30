import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { calculateCost } from './index'

const originalFetch = globalThis.fetch
beforeAll(() => {
    globalThis.fetch = (async () => {
        throw new Error('use bundled catalog')
    }) as unknown as typeof fetch
})
afterAll(() => {
    globalThis.fetch = originalFetch
})

const request = { inputAmount: 1000, cacheReadInputTokens: 2000, outputAmount: 100, strict: true, pricingDate: '2026-10-30T12:00:00Z' }

describe('Google backend and endpoint prices', () => {
    it('uses the published Developer API cache price instead of Vertex batch and priority prices', async () => {
        for (const [serviceTier, directCache, vertexCache] of [['batch', 0.00004, 0.00003], ['priority', 0.0001, 0.000108]] as const) {
            const direct = await calculateCost({ ...request, provider: 'gemini-api', model: 'gemini-3.5-flash-lite', serviceTier })
            const vertex = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-3.5-flash-lite', serviceTier, region: 'global' })
            expect(direct.cacheReadInputCost).toBeCloseTo(directCache, 12)
            expect(vertex.cacheReadInputCost).toBeCloseTo(vertexCache, 12)
        }
    })

    it('prices regional fresh, cached, and output tokens with the published premium', async () => {
        const regional = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-3.5-flash-lite', region: 'us-east1' })
        expect(regional.inputCost).toBeCloseTo(0.00033, 12)
        expect(regional.cacheReadInputCost).toBeCloseTo(0.000066, 12)
        expect(regional.outputCost).toBeCloseTo(0.000275, 12)
        const older = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-2.5-flash-lite', region: 'us-east1' })
        expect(older.inputCost).toBeCloseTo(0.0001, 12)
    })

    it('applies the endpoint premium to priority Argon rather than standard global rates', async () => {
        const cost = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-4-argon', region: 'us-central1', serviceTier: 'priority' })
        expect(cost.inputCost).toBeCloseTo(0.00396, 12)
        expect(cost.cacheReadInputCost).toBeCloseTo(0.000396, 12)
        expect(cost.outputCost).toBeCloseTo(0.00198, 12)
    })

    it('rejects an unverified regional endpoint or a model missing from the direct API catalog', async () => {
        expect(await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-3.1-pro-preview', region: 'us-east1' }).then(() => null, (error: Error) => error.message)).toContain('No regional pricing')
        expect(await calculateCost({ ...request, provider: 'gemini-api' as string, model: 'gemini-3.7-flash' }).then(() => null, (error: Error) => error.message)).toContain('not found')
    })

    it('retains standard cache prices in discounted direct Gemini long-context requests', async () => {
        const base = { ...request, provider: 'gemini-api', model: 'gemini-2.5-pro', serviceTier: 'flex', inputAmount: 1, cacheReadInputTokens: 199999 }
        const short = await calculateCost(base)
        const long = await calculateCost({ ...base, cacheReadInputTokens: 200000 })
        expect(short.inputCost).toBeCloseTo(0.000000625, 10)
        expect(short.cacheReadInputCost).toBeCloseTo(0.024999875, 10)
        expect(long.inputCost).toBeCloseTo(0.00000125, 10)
        expect(long.cacheReadInputCost).toBeCloseTo(0.05, 12)
        expect(long.outputCost).toBeCloseTo(0.00075, 12)
    })

    it('prices direct Gemini Flash Lite audio batch input and cache separately', async () => {
        const cost = await calculateCost({
            ...request,
            provider: 'gemini-api',
            model: 'gemini-2.5-flash-lite',
            serviceTier: 'batch',
            usageMetadata: {
                promptTokenCount: 1000,
                cachedContentTokenCount: 400,
                candidatesTokenCount: 20,
                thoughtsTokenCount: 10,
                promptTokensDetails: [{ modality: 'TEXT', tokenCount: 200 }, { modality: 'AUDIO', tokenCount: 800 }],
                cacheTokensDetails: [{ modality: 'TEXT', tokenCount: 100 }, { modality: 'AUDIO', tokenCount: 300 }],
            },
        })
        expect(cost.inputCost).toBeCloseTo(0.00008, 12)
        expect(cost.cacheReadInputCost).toBeCloseTo(0.00001, 12)
        expect(cost.outputCost).toBeCloseTo(0.000006, 12)
    })

    it('uses billed Google tier metadata and rejects provisioned or contradictory metadata', async () => {
        const base = { ...request, provider: 'gemini-api', model: 'gemini-3.5-flash-lite' }
        const cost = await calculateCost({ ...base, usageMetadata: { promptTokenCount: 1000, cachedContentTokenCount: 0, serviceTier: 'PRIORITY', trafficType: 'ON_DEMAND_PRIORITY' } })
        expect(cost.inputCost).toBeCloseTo(0.00054, 12)
        expect(await calculateCost({ ...base, usageMetadata: { trafficType: 'PROVISIONED_THROUGHPUT' } }).then(() => null, (error: Error) => error.message)).toContain('Unsupported Google traffic')
        expect(await calculateCost({ ...base, usageMetadata: { serviceTier: 'PRIORITY', trafficType: 'ON_DEMAND' } }).then(() => null, (error: Error) => error.message)).toContain('Conflicting')
        expect(await calculateCost({ ...base, serviceTier: 'standard', usageMetadata: { serviceTier: 'PRIORITY' } }).then(() => null, (error: Error) => error.message)).toContain('Conflicting')
    })

    it('stops expired introductory prices while allowing an original pre-expiry request timestamp', async () => {
        const base = { ...request, provider: 'gemini-api', model: 'gemini-4-argon' }
        expect(await calculateCost({ ...base, pricingDate: '2026-12-01T00:00:00Z' }).then(() => null, (error: Error) => error.message)).toContain('Expired pricing')
        const cost = await calculateCost({ ...base, pricingDate: '2026-11-30T23:59:59Z' })
        expect(cost.inputCost).toBeCloseTo(0.002, 12)
        expect(await calculateCost({ ...base, pricingDate: 'invalid' }).then(() => null, (error: Error) => error.message)).toContain('Invalid pricing date')
    })
})
