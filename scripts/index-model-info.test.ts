import { describe, expect, it } from 'bun:test'
import { AICostModelList } from '../src/model-list'
import { buildModelPerProvider, createModelListFileContent, mergeAdditionalModels } from './index-model-info'

describe('manual model additions', () => {
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

    it('keeps the generated JSON and TypeScript catalogs consistent', async () => {
        const json = await Bun.file(new URL('../model-list.json', import.meta.url)).json() as ReturnType<typeof buildModelPerProvider>
        expect(json as unknown).toEqual(AICostModelList)
        expect(json.typesafe).toEqual(mergeAdditionalModels({}).typesafe)
        const generated = createModelListFileContent(json)
        expect(generated).toContain('"typesafe"')
        expect(generated).toContain('"jev-1.13.0"')
    })
})
