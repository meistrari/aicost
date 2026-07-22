import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { calculateCost } from './index'
import { AICostModelList } from './model-list'

const precision = 10000000000
const round = (value: number) => Math.round(value * precision) / precision

const originalFetch = globalThis.fetch

type TestModel = (typeof AICostModelList)[keyof typeof AICostModelList][number]

function findModel(predicate: (model: TestModel) => boolean): { provider: keyof typeof AICostModelList, model: TestModel } {
    for (const [provider, models] of Object.entries(AICostModelList) as unknown as Array<[keyof typeof AICostModelList, readonly TestModel[]]>) {
        const model = models.find(predicate)
        if (model) {
            return { provider, model }
        }
    }

    throw new Error('No matching model found for test case')
}

describe('calculateCost cache pricing', () => {
    beforeAll(() => {
        globalThis.fetch = (async () => {
            throw new Error('force local model list')
        }) as unknown as typeof fetch
    })

    afterAll(() => {
        globalThis.fetch = originalFetch
    })

    it('calculates input and cache costs independently when cache tokens are provided', async () => {
        const { provider, model } = findModel(model =>
            model.inputCostUnit === 'token'
            && model.cacheReadInputCost != null
            && model.cacheCreationInputCost != null,
        )

        const inputAmount = 1200
        const outputAmount = 350
        const cacheReadInputTokens = 200
        const cacheCreationInputTokens = 150

        const cost = await calculateCost({
            provider,
            model: model.name,
            inputAmount,
            outputAmount,
            cacheReadInputTokens,
            cacheCreationInputTokens,
        })

        expect(cost.inputCost).toBe(round((model.inputCost ?? 0) * inputAmount))
        expect(cost.outputCost).toBe(round((model.outputCost ?? 0) * outputAmount))
        expect(cost.cacheReadInputCost).toBe(round((model.cacheReadInputCost ?? 0) * cacheReadInputTokens))
        expect(cost.cacheCreationInputCost).toBe(round((model.cacheCreationInputCost ?? 0) * cacheCreationInputTokens))
        expect(cost.cacheReadInputCostUnit).toBe('token')
        expect(cost.cacheCreationInputCostUnit).toBe('token')
    })

    it('does not adjust input cost for models without cache pricing fields', async () => {
        const { provider, model } = findModel(model =>
            model.inputCostUnit === 'token'
            && model.cacheReadInputCost == null
            && model.cacheCreationInputCost == null,
        )

        const inputAmount = 800
        const outputAmount = 120
        const cacheReadInputTokens = 300
        const cacheCreationInputTokens = 200

        const cost = await calculateCost({
            provider,
            model: model.name,
            inputAmount,
            outputAmount,
            cacheReadInputTokens,
            cacheCreationInputTokens,
        })

        expect(cost.inputCost).toBe(round((model.inputCost ?? 0) * inputAmount))
        expect(cost.outputCost).toBe(round((model.outputCost ?? 0) * outputAmount))
        expect(cost.cacheReadInputCost).toBe(0)
        expect(cost.cacheCreationInputCost).toBe(0)
        expect(cost.cacheReadInputCostUnit).toBe(null)
        expect(cost.cacheCreationInputCostUnit).toBe(null)
    })

    it('returns zero cache costs when cache token inputs are omitted', async () => {
        const { provider, model } = findModel(model =>
            model.inputCostUnit === 'token'
            && model.cacheReadInputCost != null
            && model.cacheCreationInputCost != null,
        )

        const inputAmount = 500
        const outputAmount = 75

        const cost = await calculateCost({
            provider,
            model: model.name,
            inputAmount,
            outputAmount,
        })

        expect(cost.inputCost).toBe(round((model.inputCost ?? 0) * inputAmount))
        expect(cost.outputCost).toBe(round((model.outputCost ?? 0) * outputAmount))
        expect(cost.cacheReadInputCost).toBe(0)
        expect(cost.cacheCreationInputCost).toBe(0)
    })

    it('preserves token units for explicit zero-valued cache prices and rounds cache costs', async () => {
        const { provider, model } = findModel(model =>
            model.inputCostUnit === 'token'
            && model.cacheReadInputCostUnit === 'token'
            && model.cacheCreationInputCostUnit === 'token'
            && (model.cacheReadInputCost === 0 || model.cacheCreationInputCost === 0),
        )

        const cacheReadInputTokens = 3
        const cacheCreationInputTokens = 7

        const cost = await calculateCost({
            provider,
            model: model.name,
            inputAmount: 20,
            outputAmount: 0,
            cacheReadInputTokens,
            cacheCreationInputTokens,
        })

        expect(cost.cacheReadInputCostUnit).toBe('token')
        expect(cost.cacheCreationInputCostUnit).toBe('token')
        expect(cost.cacheReadInputCost).toBe(round((model.cacheReadInputCost ?? 0) * cacheReadInputTokens))
        expect(cost.cacheCreationInputCost).toBe(round((model.cacheCreationInputCost ?? 0) * cacheCreationInputTokens))
    })

    it('includes Gemini thinking tokens in output cost', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 100,
            outputAmount: 20,
            usageMetadata: {
                promptTokenCount: 100,
                candidatesTokenCount: 20,
                thoughtsTokenCount: 80,
                totalTokenCount: 200,
            },
        })

        expect(cost.inputCost).toBe(0.000125)
        expect(cost.outputCost).toBe(0.001)
    })

    it('includes Gemini tool-use prompt tokens in input cost and context tier', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 199_990,
            outputAmount: 100,
            usageMetadata: {
                promptTokenCount: 199_990,
                toolUsePromptTokenCount: 20,
                candidatesTokenCount: 100,
                totalTokenCount: 200_110,
            },
        })

        expect(cost.inputCost).toBe(0.500025)
        expect(cost.outputCost).toBe(0.0015)
    })

    it('uses Gemini long-context rates for all tokens above a 200K prompt', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 200_001,
            outputAmount: 100,
            usageMetadata: {
                promptTokenCount: 200_001,
                candidatesTokenCount: 100,
                thoughtsTokenCount: 10_000,
                totalTokenCount: 210_101,
            },
        })

        expect(cost.inputCost).toBe(0.5000025)
        expect(cost.outputCost).toBe(0.1515)
    })

    it('keeps Gemini base rates at the 200K boundary', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 200_000,
            outputAmount: 100,
            usageMetadata: {
                promptTokenCount: 200_000,
                candidatesTokenCount: 100,
                thoughtsTokenCount: 10_000,
                totalTokenCount: 210_100,
            },
        })

        expect(cost.inputCost).toBe(0.25)
        expect(cost.outputCost).toBe(0.101)
    })

    it('prices cached Gemini input separately using the long-context tier', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 210_000,
            outputAmount: 100,
            usageMetadata: {
                promptTokenCount: 210_000,
                cachedContentTokenCount: 100_000,
                candidatesTokenCount: 100,
                thoughtsTokenCount: 100,
                totalTokenCount: 210_200,
            },
        })

        expect(cost.inputCost).toBe(0.275)
        expect(cost.cacheReadInputCost).toBe(0.025)
        expect(cost.outputCost).toBe(0.003)
    })

    it('returns a token unit for tier-only cache-creation pricing', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-pro',
            inputAmount: 200_001,
            cacheCreationInputTokens: 400,
        })

        expect(cost.cacheCreationInputCost).toBe(0.0001)
        expect(cost.cacheCreationInputCostUnit).toBe('token')
    })
})
