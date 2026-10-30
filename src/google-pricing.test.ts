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
const mixedAudioUsage = {
    promptTokenCount: 1000,
    cachedContentTokenCount: 400,
    candidatesTokenCount: 20,
    thoughtsTokenCount: 10,
    promptTokensDetails: [{ modality: 'TEXT', tokenCount: 200 }, { modality: 'AUDIO', tokenCount: 800 }],
    cacheTokensDetails: [{ modality: 'TEXT', tokenCount: 100 }, { modality: 'AUDIO', tokenCount: 300 }],
}

describe('Google backend and endpoint prices', () => {
    for (const [serviceTier, input, cache, output] of [
        ['standard', 0.000275, 0.0000175, 0.000045],
        ['priority', 0.000495, 0.0000315, 0.000081],
        ['batch', 0.0001375, 0.00000875, 0.0000225],
        ['flex', 0.0001375, 0.00000875, 0.0000225],
    ] as const) {
        for (const [region, multiplier] of [['global', 1], ['us-east1', 1.1]] as const) {
            it(`prices mixed 3.1 Flash Lite audio and cache in ${serviceTier}/${region}`, async () => {
                const cost = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-3.1-flash-lite', serviceTier, region, usageMetadata: mixedAudioUsage })
                expect(cost.inputCost).toBeCloseTo(input * multiplier, 12)
                expect(cost.cacheReadInputCost).toBeCloseTo(cache * multiplier, 12)
                expect(cost.outputCost).toBeCloseTo(output * multiplier, 12)
            })
        }
    }

    for (const [model, input, cache] of [
        ['gemini-3-flash-preview', 0.00099, 0.000063],
        ['gemini-2.5-flash', 0.000954, 0.0000594],
        ['gemini-2.5-flash-lite', 0.000288, 0.000018],
    ] as const) {
        it(`uses priority audio cache prices for ${model}`, async () => {
            const cost = await calculateCost({ ...request, provider: 'vertex-ai', model, serviceTier: 'priority', region: 'global', usageMetadata: mixedAudioUsage })
            expect(cost.inputCost).toBeCloseTo(input, 12)
            expect(cost.cacheReadInputCost).toBeCloseTo(cache, 12)
        })
    }

    it('uses the Vertex Flash Lite batch audio billing SKU and rejects disputed audio tariffs', async () => {
        const base = { ...request, model: 'gemini-2.5-flash-lite' as const, serviceTier: 'batch', usageMetadata: { promptTokenCount: 1000, cachedContentTokenCount: 0, candidatesTokenCount: 10, promptTokensDetails: [{ modality: 'AUDIO', tokenCount: 1000 }] } }
        const vertex = await calculateCost({ ...base, provider: 'vertex-ai', region: 'global' })
        expect(vertex.inputCost).toBeCloseTo(0.00015, 12)
        expect(await calculateCost({ ...base, provider: 'gemini-api' }).then(() => null, (error: Error) => error.message)).toContain('Missing batch audio input rate')
        expect(await calculateCost({ ...base, provider: 'vertex-ai', serviceTier: 'flex' }).then(() => null, (error: Error) => error.message)).toContain('Missing flex audio input rate')
        const text = await calculateCost({ ...request, provider: 'gemini-api', model: 'gemini-2.5-flash-lite', serviceTier: 'batch' })
        expect(text.inputCost).toBeCloseTo(0.00005, 12)
    })

    it('keeps the published Vertex long-context audio SKU at $1/M above 200K', async () => {
        const cost = await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-2.5-flash', region: 'global', usageMetadata: { promptTokenCount: 201000, cachedContentTokenCount: 0, candidatesTokenCount: 10, promptTokensDetails: [{ modality: 'AUDIO', tokenCount: 201000 }] } })
        expect(cost.inputCost).toBeCloseTo(0.201, 12)
    })

    it('rejects an absent cache modality split when discounted audio and text prices differ', async () => {
        expect(await calculateCost({ ...request, provider: 'vertex-ai', model: 'gemini-3.1-flash-lite', serviceTier: 'flex', usageMetadata: { ...mixedAudioUsage, cacheTokensDetails: undefined } }).then(() => null, (error: Error) => error.message)).toContain('Missing cache modality breakdown')
    })

    it('leaves discounted Vertex audio cache unpriced when its tariff is not published', async () => {
        for (const model of ['gemini-2.5-flash', 'gemini-3-flash-preview'] as const) {
            expect(await calculateCost({ ...request, provider: 'vertex-ai', model, serviceTier: 'flex', usageMetadata: mixedAudioUsage }).then(() => null, (error: Error) => error.message)).toContain('Missing flex audio cache read rate')
        }
    })

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
        expect(await calculateCost({ ...request, provider: 'gemini-api' as string, model: 'gemini-3.8-flash-cyber' }).then(() => null, (error: Error) => error.message)).toContain('not found')
    })

    for (const [model, input, output, cache] of [
        ['gemini-3.5-flash', 1.5, 9, 0.15],
        ['gemini-3.7-flash', 0.75, 3.75, 0.075],
    ] as const) {
        it(`prices ${model} direct API standard usage from published billing SKUs`, async () => {
            const cost = await calculateCost({ ...request, provider: 'gemini-api', model })
            expect(cost.inputCost).toBeCloseTo(input * 1000 / 1e6, 12)
            expect(cost.outputCost).toBeCloseTo(output * 100 / 1e6, 12)
            expect(cost.cacheReadInputCost).toBeCloseTo(cache * 2000 / 1e6, 12)
        })

        it(`does not invent a Batch cache tariff for ${model}`, async () => {
            const base = { ...request, provider: 'gemini-api', model, serviceTier: 'batch' }
            expect(await calculateCost(base).then(() => null, (error: Error) => error.message)).toContain('Missing cache read rate')
            const uncached = await calculateCost({ ...base, cacheReadInputTokens: 0 })
            expect(uncached.inputCost).toBeCloseTo(input / 2 * 1000 / 1e6, 12)
            expect(uncached.outputCost).toBeCloseTo(output / 2 * 100 / 1e6, 12)
        })
    }

    it('retains the distinct Gemini 3.7 Flex audio cache SKU in mixed usage', async () => {
        const cost = await calculateCost({ ...request, provider: 'gemini-api', model: 'gemini-3.7-flash', serviceTier: 'flex', usageMetadata: mixedAudioUsage })
        expect(cost.inputCost).toBeCloseTo(600 * 0.375 / 1e6, 12)
        expect(cost.cacheReadInputCost).toBeCloseTo((100 * 0.0375 + 300 * 0.075) / 1e6, 12)
        expect(cost.outputCost).toBeCloseTo(30 * 1.875 / 1e6, 12)
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

    it('prices direct Gemini Flash Lite audio flex input and cache separately', async () => {
        const cost = await calculateCost({
            ...request,
            provider: 'gemini-api',
            model: 'gemini-2.5-flash-lite',
            serviceTier: 'flex',
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
