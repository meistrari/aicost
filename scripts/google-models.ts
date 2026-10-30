import type { RawModel } from './index-model-info'
import type { TokenPricingTier } from '../src/token-pricing'

// Paid Developer API list prices, USD per million tokens, verified 2026-10-30:
// https://ai.google.dev/gemini-api/docs/pricing
// Keep this provider separate from Vertex: cache rates and supported models differ.
// Storage, grounding, account allowances and promotional credits are not token rates.
type Rates = { input: number, output: number, cache: number, audio?: number, cachedAudio?: number }

function tier(rates: Rates, serviceTier: string, aboveInputTokens = 0): TokenPricingTier {
    return {
        serviceTier,
        aboveInputTokens,
        inputCost: rates.input / 1e6,
        outputCost: rates.output / 1e6,
        cacheReadInputCost: rates.cache / 1e6,
        ...(rates.audio === undefined ? {} : { inputAudioCost: rates.audio / 1e6 }),
        ...(rates.cachedAudio === undefined ? {} : { cacheReadAudioCost: rates.cachedAudio / 1e6 }),
    }
}

function model(standard: Rates, discounted: Rates, priority: Rates, options?: {
    long?: { standard: Rates, discounted: Rates, priority: Rates }
    pricingValidUntil?: string
}): RawModel {
    return {
        litellm_provider: 'gemini-api',
        mode: 'chat',
        input_cost_per_token: standard.input / 1e6,
        output_cost_per_token: standard.output / 1e6,
        cache_read_input_token_cost: standard.cache / 1e6,
        pricingValidUntil: options?.pricingValidUntil,
        tokenPricing: [
            tier(standard, 'standard'),
            tier(discounted, 'batch'),
            tier(discounted, 'flex'),
            tier(priority, 'priority'),
            ...(options?.long
                ? [
                        tier(options.long.standard, 'standard', 200_000),
                        tier(options.long.discounted, 'batch', 200_000),
                        tier(options.long.discounted, 'flex', 200_000),
                        tier(options.long.priority, 'priority', 200_000),
                    ]
                : []),
        ],
    }
}

export const geminiApiModels: Record<string, RawModel> = {
    'gemini-4-argon': model(
        { input: 2, output: 10, cache: 0.1 },
        { input: 1, output: 5, cache: 0.05 },
        { input: 3.6, output: 18, cache: 0.18 },
        { pricingValidUntil: '2026-12-01T00:00:00Z' },
    ),
    'gemini-3.8-flash': model(
        { input: 0.75, output: 3.75, cache: 0.075 },
        { input: 0.375, output: 1.875, cache: 0.0375 },
        { input: 1.35, output: 6.75, cache: 0.135 },
        { pricingValidUntil: '2027-01-01T00:00:00Z' },
    ),
    'gemini-3.6-flash': model(
        { input: 0.75, output: 3.75, cache: 0.075 },
        { input: 0.375, output: 1.875, cache: 0.0375 },
        { input: 1.35, output: 6.75, cache: 0.135 },
        { pricingValidUntil: '2027-01-01T00:00:00Z' },
    ),
    'gemini-3.5-flash-lite': model(
        { input: 0.3, output: 2.5, cache: 0.03 },
        { input: 0.15, output: 1.25, cache: 0.02 },
        { input: 0.54, output: 4.5, cache: 0.05 },
    ),
    'gemini-3.1-flash-lite': model(
        { input: 0.25, output: 1.5, cache: 0.025, audio: 0.5, cachedAudio: 0.05 },
        { input: 0.125, output: 0.75, cache: 0.0125, audio: 0.25, cachedAudio: 0.025 },
        { input: 0.45, output: 2.7, cache: 0.045, audio: 0.9, cachedAudio: 0.09 },
    ),
    'gemini-3-flash-preview': model(
        { input: 0.5, output: 3, cache: 0.05, audio: 1, cachedAudio: 0.1 },
        { input: 0.25, output: 1.5, cache: 0.05, audio: 0.5, cachedAudio: 0.1 },
        { input: 0.9, output: 5.4, cache: 0.09, audio: 1.8, cachedAudio: 0.18 },
    ),
    'gemini-3.1-pro-preview': model(
        { input: 2, output: 12, cache: 0.2 },
        { input: 1, output: 6, cache: 0.2 },
        { input: 3.6, output: 21.6, cache: 0.36 },
        { long: {
            standard: { input: 4, output: 18, cache: 0.4 },
            discounted: { input: 2, output: 9, cache: 0.4 },
            priority: { input: 7.2, output: 32.4, cache: 0.72 },
        } },
    ),
    'gemini-2.5-pro': model(
        { input: 1.25, output: 10, cache: 0.125 },
        { input: 0.625, output: 5, cache: 0.125 },
        { input: 2.25, output: 18, cache: 0.225 },
        { long: {
            standard: { input: 2.5, output: 15, cache: 0.25 },
            discounted: { input: 1.25, output: 7.5, cache: 0.25 },
            priority: { input: 4.5, output: 27, cache: 0.45 },
        } },
    ),
    'gemini-2.5-flash': model(
        { input: 0.3, output: 2.5, cache: 0.03, audio: 1, cachedAudio: 0.1 },
        { input: 0.15, output: 1.25, cache: 0.03, audio: 0.5, cachedAudio: 0.1 },
        { input: 0.54, output: 4.5, cache: 0.054, audio: 1.8, cachedAudio: 0.18 },
    ),
    'gemini-2.5-flash-lite': model(
        { input: 0.1, output: 0.4, cache: 0.01, audio: 0.3, cachedAudio: 0.03 },
        { input: 0.05, output: 0.2, cache: 0.01, audio: 0.15, cachedAudio: 0.03 },
        { input: 0.18, output: 0.72, cache: 0.018, audio: 0.54, cachedAudio: 0.054 },
    ),
}

// Vertex endpoint premiums are model-specific. Preview models listed only as Global
// are deliberately absent; a regional request must not silently use their global rate.
// https://cloud.google.com/model-garden/pricing (verified 2026-10-30).
export const vertexNonGlobalMultipliers: Record<string, number> = {
    'gemini-4-argon': 1.1,
    'gemini-3.8-flash': 1.1,
    'gemini-3.7-flash': 1.1,
    'gemini-3.6-flash': 1.1,
    'gemini-3.5-flash': 1.1,
    'gemini-3.5-flash-lite': 1.1,
    'gemini-3.1-flash-lite': 1.1,
    'gemini-2.5-pro': 1,
    'gemini-2.5-flash': 1,
    'gemini-2.5-flash-lite': 1,
}

// Stop using introductory rates at the earliest UTC boundary instead of silently
// extending them. This is an expiry guard, not an assertion about billing timezone.
export const vertexPricingValidUntil: Record<string, string> = {
    'gemini-4-argon': '2026-12-01T00:00:00Z',
    'gemini-3.8-flash': '2027-01-01T00:00:00Z',
    'gemini-3.7-flash': '2027-01-01T00:00:00Z',
    'gemini-3.6-flash': '2027-01-01T00:00:00Z',
}
