import type { RawModel } from './index-model-info'

export const additionalModels: Record<string, RawModel> = {
    // Standard USD/token pricing, verified 2026-09-22:
    // https://developers.openai.com/api/docs/models/gpt-6-sol
    'gpt-6-sol': {
        litellm_provider: 'openai',
        mode: 'chat',
        max_tokens: 128000,
        input_cost_per_token: 0.000002,
        output_cost_per_token: 0.00001,
        cache_read_input_token_cost: 0.0000002,
        cache_creation_input_token_cost: 0.0000025,
    },
    // https://developers.openai.com/api/docs/models/gpt-6-luna
    'gpt-6-luna': {
        litellm_provider: 'openai',
        mode: 'chat',
        max_tokens: 128000,
        input_cost_per_token: 0.0000001,
        output_cost_per_token: 0.0000005,
        cache_read_input_token_cost: 0.00000001,
        cache_creation_input_token_cost: 0.000000125,
    },
    // Provider list pricing in USD, verified 2026-09-21:
    // https://typesafe.ai/blog/introducing-system-one-models-and-jev
    'jev-1.13.0': {
        litellm_provider: 'typesafe',
        mode: 'completion',
        max_tokens: null,
        input_cost_per_token: 0.000000042,
        output_cost_per_token: 0,
    },
}
