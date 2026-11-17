import type { RawModel } from './index-model-info'

// Provider list pricing in USD, verified 2026-09-21:
// https://typesafe.ai/blog/introducing-system-one-models-and-jev
export const additionalModels: Record<string, RawModel> = {
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
