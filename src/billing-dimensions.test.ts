import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { calculateCost } from './index'
import { extractTokenPricing } from './token-pricing'

const originalFetch = globalThis.fetch
beforeAll(() => {
    globalThis.fetch = (async () => {
        throw new Error('use bundled catalog')
    }) as unknown as typeof fetch
})
afterAll(() => {
    globalThis.fetch = originalFetch
})

describe('provider billing dimensions', () => {
    it('charges Haiku 5.5 at its 100k boundary including cached context', async () => {
        const base = { provider: 'anthropic', model: 'claude-haiku-5-5', inputAmount: 1, outputAmount: 10, cacheReadInputTokens: 99_999, strict: true }
        const short = await calculateCost(base)
        const long = await calculateCost({ ...base, cacheReadInputTokens: 100_000 })
        expect(short.inputCost).toBeCloseTo(0.0000001, 12)
        expect(short.outputCost).toBeCloseTo(0.000005, 12)
        expect(long.inputCost).toBeCloseTo(0.0000005, 12)
        expect(long.outputCost).toBeCloseTo(0.000025, 12)
        expect(long.cacheReadInputCost).toBeCloseTo(0.005, 12)
    })

    it('prices mixed Claude cache TTLs and US inference independently', async () => {
        const cost = await calculateCost({ provider: 'anthropic', model: 'claude-sonnet-5-5', inputAmount: 10, outputAmount: 20, cacheCreationInputTokens: 1000, cacheCreationInputTokens1h: 400, cacheReadInputTokens: 200, inferenceGeo: 'us', strict: true })
        expect(cost.inputCost).toBeCloseTo(10 * 2e-6 * 1.1, 12)
        expect(cost.outputCost).toBeCloseTo(20 * 10e-6 * 1.1, 12)
        expect(cost.cacheReadInputCost).toBeCloseTo(200 * 0.1e-6 * 1.1, 12)
        expect(cost.cacheCreationInputCost).toBeCloseTo((600 * 2.5e-6 + 400 * 4e-6) * 1.1, 12)
    })

    it('uses OpenAI 272k tiers and twelve-hour cache write rates', async () => {
        const base = { provider: 'openai', model: 'gpt-6.1-sol', inputAmount: 272_000, outputAmount: 10, cacheCreationInputTokens: 1, cacheCreationInputTokens12h: 1, strict: true }
        const long = await calculateCost(base)
        expect(long.inputCost).toBeCloseTo(272_000 * 4e-6, 10)
        expect(long.outputCost).toBeCloseTo(10 * 15e-6, 12)
        expect(long.cacheCreationInputCost).toBeCloseTo(10e-6, 12)
        const short = await calculateCost({ ...base, inputAmount: 271_999 })
        expect(short.inputCost).toBeCloseTo(271_999 * 2e-6, 10)
        expect(short.cacheCreationInputCost).toBeCloseTo(5e-6, 12)
    })

    it('uses the billed service tier and rejects unsupported tiers', async () => {
        const cost = await calculateCost({ provider: 'openai', model: 'gpt-6.1-sol', inputAmount: 1000, outputAmount: 100, serviceTier: 'flex', strict: true })
        expect(cost.inputCost).toBeCloseTo(0.001, 12)
        expect(cost.outputCost).toBeCloseTo(0.0005, 12)
        const error = await calculateCost({ provider: 'openai', model: 'gpt-6.1-sol', inputAmount: 1, serviceTier: 'unknown' }).then(() => null, (error: Error) => error.message)
        expect(error).toContain('No unknown pricing')
    })

    it('rejects impossible TTL subsets', async () => {
        const error = await calculateCost({ provider: 'anthropic', model: 'claude-sonnet-5-5', inputAmount: 1, cacheCreationInputTokens: 5, cacheCreationInputTokens1h: 6 }).then(() => null, (error: Error) => error.message)
        expect(error).toContain('exceed')
    })

    it('extracts context and TTL dimensions without confusing duration with token thresholds', () => {
        expect(extractTokenPricing({ input_cost_per_token_above_100k_tokens: 5e-7, cache_creation_input_token_cost_above_1hr_above_100k_tokens: 1e-6, output_cost_per_token_batches: 2.5e-7 })).toEqual([
            { serviceTier: 'batch', aboveInputTokens: 0, outputCost: 2.5e-7 },
            { serviceTier: 'standard', aboveInputTokens: 100_000, inputCost: 5e-7, cacheCreationInputCost1h: 1e-6 },
        ])
    })
})
