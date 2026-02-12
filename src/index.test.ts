import { afterAll, beforeAll, describe, expect, it } from 'bun:test'
import { calculateCost } from './index'
import { AICostModelList } from './model-list'

const precision = 10000000000
const round = (value: number) => Math.round(value * precision) / precision

const originalFetch = globalThis.fetch

type TestModel = (typeof AICostModelList)[keyof typeof AICostModelList][number]

function findModel(predicate: (model: TestModel) => boolean): { provider: keyof typeof AICostModelList, model: TestModel } {
    for (const [provider, models] of Object.entries(AICostModelList) as Array<[keyof typeof AICostModelList, TestModel[]]>) {
        const model = models.find(predicate)
        if (model) {
            return { provider, model }
        }
    }

    throw new Error('No matching model found for test case')
}

describe('calculateCost cache pricing', () => {
    beforeAll(() => {
        globalThis.fetch = (() => Promise.reject(new Error('force local model list'))) as typeof fetch
    })

    afterAll(() => {
        globalThis.fetch = originalFetch
    })

    it('calculates cache read and cache creation costs when provided', async () => {
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

        const adjustedInputAmount = Math.max(inputAmount - cacheReadInputTokens - cacheCreationInputTokens, 0)

        expect(cost.inputCost).toBe(round((model.inputCost ?? 0) * adjustedInputAmount))
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
})
