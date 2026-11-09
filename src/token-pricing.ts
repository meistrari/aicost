/** Rates in USD/token. Thresholds are exclusive and apply to the entire request. */
export interface TokenPricingTier {
    aboveInputTokens: number
    serviceTier: string
    /** null explicitly marks a disputed/unverified audio tariff. */
    inputAudioCost?: number | null
    outputAudioCost?: number
    cacheReadAudioCost?: number
    inputCost?: number
    outputCost?: number
    cacheReadInputCost?: number
    cacheCreationInputCost?: number
    cacheCreationInputCost1h?: number
    cacheCreationInputCost12h?: number
}

const RATE_FIELDS = {
    input_cost_per_audio_token: 'inputAudioCost',
    output_cost_per_audio_token: 'outputAudioCost',
    cache_read_input_audio_token_cost: 'cacheReadAudioCost',
    input_cost_per_token: 'inputCost',
    output_cost_per_token: 'outputCost',
    cache_read_input_token_cost: 'cacheReadInputCost',
    cache_creation_input_token_cost: 'cacheCreationInputCost',
} as const

/** Preserve the pricing dimensions published by the upstream index instead of dropping all but 200k. */
export function extractTokenPricing(model: Record<string, unknown>): TokenPricingTier[] {
    const tiers = new Map<string, TokenPricingTier>()
    for (const [key, value] of Object.entries(model)) {
        if (typeof value !== 'number' || !Number.isFinite(value) || value < 0)
            continue
        const match = /^(input_cost_per_audio_token|output_cost_per_audio_token|cache_read_input_audio_token_cost|input_cost_per_token|output_cost_per_token|cache_read_input_token_cost|cache_creation_input_token_cost)(?:_above_(1|12)hr)?(?:_above_(\d+)k_tokens)?(?:_(batches|flex|priority|ultrafast|decisions))?$/.exec(key)
        if (!match || (!key.includes('audio') && !match[2] && !match[3] && !match[4]))
            continue
        const serviceTier = match[4] === 'batches' ? 'batch' : match[4] ?? 'standard'
        const aboveInputTokens = Number(match[3] ?? 0) * 1000
        const id = `${serviceTier}:${aboveInputTokens}`
        const tier = tiers.get(id) ?? { serviceTier, aboveInputTokens }
        const baseField = RATE_FIELDS[match[1] as keyof typeof RATE_FIELDS]
        if (match[2] && baseField !== 'cacheCreationInputCost')
            continue
        const field = match[2] === '1' ? 'cacheCreationInputCost1h' : match[2] === '12' ? 'cacheCreationInputCost12h' : baseField
        tier[field] = value
        tiers.set(id, tier)
    }
    return [...tiers.values()].sort((a, b) => a.serviceTier.localeCompare(b.serviceTier) || a.aboveInputTokens - b.aboveInputTokens)
}
