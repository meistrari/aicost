import { describe, expect, it } from 'bun:test'
import { AICostModelList } from '../src/model-list'
import { buildModelPerProvider, createModelListFileContent, mergeAdditionalModels } from './index-model-info'

describe('manual model additions', () => {
    it('restores verified Vertex audio dimensions without erasing text prices or duplicating tiers', () => {
        const upstream = buildModelPerProvider({
            'gemini-3.1-flash-lite': {
                litellm_provider: 'vertex_ai-language-models',
                mode: 'chat',
                tokenPricing: [{ serviceTier: 'flex', aboveInputTokens: 0, inputCost: 0.125e-6, outputCost: 0.75e-6 }],
            },
        })
        const result = mergeAdditionalModels(upstream)
        const model = result['vertex-ai']?.find(model => model.name === 'gemini-3.1-flash-lite')
        expect(model?.tokenPricing?.find(tier => tier.serviceTier === 'flex')).toEqual({ serviceTier: 'flex', aboveInputTokens: 0, inputCost: 0.125e-6, outputCost: 0.75e-6, inputAudioCost: 0.25e-6, cacheReadAudioCost: 0.025e-6 })
        expect(model?.tokenPricing).toHaveLength(4)
        expect(mergeAdditionalModels(result)).toEqual(result)
        expect(upstream['vertex-ai']?.[0]?.tokenPricing).toHaveLength(1)
    })

    it('adds JEV without upstream support and preserves other providers', () => {
        const upstream = buildModelPerProvider({
            'jev-1.13.0': { litellm_provider: 'other', mode: 'completion', input_cost_per_token: 1 },
        })
        const result = mergeAdditionalModels(upstream)
        expect(result.other).toEqual(upstream.other)
        expect(result.typesafe).toHaveLength(1)
        expect(result.typesafe?.[0]).toMatchObject({
            name: 'jev-1.13.0',
            type: 'completion',
            maxTokens: null,
            inputCost: 0.000000042,
            outputCost: 0,
            inputCostUnit: 'token',
            outputCostUnit: 'token',
            cacheReadInputCost: null,
            cacheCreationInputCost: null,
            priceTier: 1,
        })
        expect(upstream.typesafe).toBeUndefined()
    })

    it('overrides a conflicting provider/model without duplicates on repeated generation', () => {
        const upstream = buildModelPerProvider({
            'jev-1.13.0': { litellm_provider: 'typesafe', mode: 'chat', input_cost_per_token: 1, output_cost_per_token: 2 },
        })
        const result = mergeAdditionalModels(upstream)
        expect(result.typesafe).toHaveLength(1)
        expect(result.typesafe?.[0]?.outputCost).toBe(0)
        expect(mergeAdditionalModels(result)).toEqual(result)
    })

    it('distinguishes free output from unknown output pricing', () => {
        const unknown = buildModelPerProvider({ unknown: { litellm_provider: 'other', mode: 'completion' } })
        expect(unknown.other?.[0]?.outputCost).toBeNull()
        expect(unknown.other?.[0]?.outputCostUnit).toBeNull()
        expect(mergeAdditionalModels({}).typesafe?.[0]?.outputCost).toBe(0)
    })

    it('adds Gemini 4 Argon under its bare Vertex AI name', () => {
        const upstream = buildModelPerProvider({
            'gemini-3.7-flash': { litellm_provider: 'vertex_ai-language-models', mode: 'chat', input_cost_per_token: 1 },
        })
        const result = mergeAdditionalModels(upstream)
        expect(result['vertex-ai']?.map(model => model.name)).toEqual(['gemini-3.7-flash', 'gemini-4-argon'])
        expect(result['vertex-ai']?.[1]).toMatchObject({
            maxTokens: 1048576,
            inputCost: 0.000002,
            outputCost: 0.00001,
            cacheReadInputCost: 0.0000001,
            cacheReadInputCostUnit: 'token',
        })
    })

    it('keeps the generated JSON and TypeScript catalogs consistent', async () => {
        const json = await Bun.file(new URL('../model-list.json', import.meta.url)).json() as ReturnType<typeof buildModelPerProvider>
        expect(json as unknown).toEqual(AICostModelList)
        expect(json.typesafe).toEqual(mergeAdditionalModels({}).typesafe)
        const generated = createModelListFileContent(json)
        expect(generated).toContain('"typesafe"')
        expect(generated).toContain('"jev-1.13.0"')
    })
})
