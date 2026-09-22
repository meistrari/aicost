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
}
