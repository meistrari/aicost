import type { RawModel } from './index-model-info'

// https://developers.openai.com/api/docs/models/gpt-6.2-astra
// https://developers.openai.com/api/docs/models/gpt-6.2-sol
// Verified November 17, 2026. Refresh before the Ultrafast promotion ends (Pacific time).
function gpt62Model(inputPerMillion: number): RawModel {
    const inputCost = inputPerMillion / 1_000_000
    return {
        litellm_provider: 'openai',
        mode: 'responses',
        max_tokens: 1_050_000,
        pricingValidUntil: '2027-03-01T08:00:00Z',
        input_cost_per_token: inputCost,
        output_cost_per_token: inputCost * 5,
        cache_read_input_token_cost: inputCost * 0.05,
        cache_creation_input_token_cost: inputCost * 1.25,
        tokenPricing: [
            { serviceTier: 'standard', multiplier: 1 },
            { serviceTier: 'batch', multiplier: 0.5 },
            { serviceTier: 'priority', multiplier: 2 },
            { serviceTier: 'ultrafast', multiplier: 3 },
        ].flatMap(({ serviceTier, multiplier }) => [0, 272_000].map(aboveInputTokens => ({
            serviceTier,
            aboveInputTokens,
            inputCost: inputCost * multiplier * (aboveInputTokens ? 2 : 1),
            outputCost: inputCost * 5 * multiplier * (aboveInputTokens ? 1.5 : 1),
            cacheReadInputCost: inputCost * 0.05 * multiplier * (aboveInputTokens ? 2 : 1),
            cacheCreationInputCost: inputCost * 1.25 * multiplier * (aboveInputTokens ? 2 : 1),
            cacheCreationInputCost12h: inputCost * 2.5 * multiplier * (aboveInputTokens ? 2 : 1),
        }))),
    }
}

// Provider list pricing in USD, verified 2026-09-21:
// https://typesafe.ai/blog/introducing-system-one-models-and-jev
export const additionalModels: Record<string, RawModel> = {
    'gpt-6.2-astra': gpt62Model(8),
    'gpt-6.2-sol': gpt62Model(2),
    'jev-1.13.0': {
        litellm_provider: 'typesafe',
        mode: 'completion',
        max_tokens: null,
        input_cost_per_token: 0.000000042,
        output_cost_per_token: 0,
    },
    // LiteLLM only lists Argon as `vertex_ai/gemini-4-argon` and `gemini/gemini-4-argon`, so the
    // bare name that `vertex-ai` lookups use is missing. Prices mirror LiteLLM's Vertex entry
    // (verified 2026-10-26); Google's introductory rate is reported to double on 2026-12-01.
    'gemini-4-argon': {
        litellm_provider: 'vertex_ai-language-models',
        mode: 'chat',
        max_tokens: 1048576,
        input_cost_per_token: 0.000002,
        output_cost_per_token: 0.00001,
        cache_read_input_token_cost: 0.0000001,
        tokenPricing: [
            { serviceTier: 'batch', aboveInputTokens: 0, inputCost: 0.000001, outputCost: 0.000005, cacheReadInputCost: 0.00000005 },
            { serviceTier: 'priority', aboveInputTokens: 0, inputCost: 0.0000036, outputCost: 0.000018, cacheReadInputCost: 0.00000018 },
        ],
    },
}
