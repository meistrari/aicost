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

describe('calculateCost media pricing', () => {
    beforeAll(() => {
        globalThis.fetch = (() => Promise.reject(new Error('force local model list'))) as typeof fetch
    })

    afterAll(() => {
        globalThis.fetch = originalFetch
    })

    it('prices DALL-E per generated image', async () => {
        const cost = await calculateCost({
            provider: 'openai',
            model: 'dall-e-3',
            inputAmount: 2,
        })

        expect(cost.inputCostUnit).toBe('image')
        expect(cost.inputCost).toBe(round(0.04 * 2))
        expect(cost.totalCost).toBe(round(0.04 * 2))
    })

    it('prices gpt-4o-audio-preview separately for text and audio tokens', async () => {
        const cost = await calculateCost({
            provider: 'openai',
            model: 'gpt-4o-audio-preview',
            inputAmount: 1000,
            outputAmount: 200,
            inputAudioTokens: 500,
            outputAudioTokens: 100,
        })

        const expectedTextInput = round(2.5e-6 * 1000)
        const expectedTextOutput = round(1e-5 * 200)
        const expectedAudioInput = round(4e-5 * 500)
        const expectedAudioOutput = round(8e-5 * 100)

        expect(cost.inputCost).toBe(expectedTextInput)
        expect(cost.outputCost).toBe(expectedTextOutput)
        expect(cost.inputAudioTokenCost).toBe(expectedAudioInput)
        expect(cost.outputAudioTokenCost).toBe(expectedAudioOutput)
        expect(cost.totalCost).toBe(round(
            expectedTextInput + expectedTextOutput + expectedAudioInput + expectedAudioOutput,
        ))
    })

    it('prices gpt-4o-mini-tts by output seconds', async () => {
        const cost = await calculateCost({
            provider: 'openai',
            model: 'gpt-4o-mini-tts',
            inputAmount: 50,
            outputSeconds: 12,
        })

        const expectedInput = round(2.5e-6 * 50)
        const expectedSecondCost = round(0.00025 * 12)

        expect(cost.inputCost).toBe(expectedInput)
        expect(cost.outputSecondCost).toBe(expectedSecondCost)
        expect(cost.totalCost).toBeGreaterThanOrEqual(expectedInput + expectedSecondCost - 1e-12)
    })

    it('prices tts-1 per character', async () => {
        const cost = await calculateCost({
            provider: 'openai',
            model: 'tts-1',
            inputAmount: 200,
        })

        expect(cost.inputCostUnit).toBe('character')
        expect(cost.inputCost).toBe(round(1.5e-5 * 200))
    })

    it('prices gpt-image-1 with separate image-token costs', async () => {
        const cost = await calculateCost({
            provider: 'openai',
            model: 'gpt-image-1',
            inputAmount: 100,
            outputAmount: 0,
            inputImageTokens: 50,
            outputImageTokens: 200,
        })

        const expectedInput = round(5e-6 * 100)
        const expectedInputImg = round(1e-5 * 50)
        const expectedOutputImg = round(4e-5 * 200)

        expect(cost.inputCost).toBe(expectedInput)
        expect(cost.inputImageTokenCost).toBe(expectedInputImg)
        expect(cost.outputImageTokenCost).toBe(expectedOutputImg)
        expect(cost.totalCost).toBe(round(expectedInput + expectedInputImg + expectedOutputImg))
    })

    it('prices gemini-2.5-flash-preview-tts (was previously blocked by gemini provider filter)', async () => {
        const cost = await calculateCost({
            provider: 'vertex-ai',
            model: 'gemini-2.5-flash-preview-tts',
            inputAmount: 1000,
            outputAmount: 500,
        })

        expect(cost.inputCost).toBe(round(3e-7 * 1000))
        expect(cost.outputCost).toBe(round(2.5e-6 * 500))
    })
})
