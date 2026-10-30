import type { TokenPricingTier } from './token-pricing'
import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

type LooseString<T extends string> = T | (string & {})

type InputCostUnit = 'token' | 'request' | 'pixel' | null
type OutputCostUnit = 'token' | 'request' | 'image' | null
type CacheInputCostUnit = 'token' | null

export type GoogleModalityTokenCount = {
    modality?: string
    tokenCount?: number | string
    [key: string]: unknown
}

export type GoogleUsageMetadata = {
    promptTokenCount?: number | string
    cachedContentTokenCount?: number | string
    candidatesTokenCount?: number | string
    toolUsePromptTokenCount?: number | string
    thoughtsTokenCount?: number | string
    totalTokenCount?: number | string
    promptTokensDetails?: GoogleModalityTokenCount[]
    cacheTokensDetails?: GoogleModalityTokenCount[]
    candidatesTokensDetails?: GoogleModalityTokenCount[]
    toolUsePromptTokensDetails?: GoogleModalityTokenCount[]
    serviceTier?: string
    [key: string]: unknown
}

type ProviderModel = {
    tokenPricing?: TokenPricingTier[]
    maxTokens: number | null
    name: string
    type: string
    inputCost: number | null
    inputCostAbove200kTokens?: number
    inputCostUnit: InputCostUnit
    outputCost: number | null
    outputCostAbove200kTokens?: number
    outputCostUnit: OutputCostUnit
    cacheReadInputCost: number | null
    cacheReadInputCostAbove200kTokens?: number
    cacheReadInputCostUnit: CacheInputCostUnit
    cacheCreationInputCost: number | null
    cacheCreationInputCostAbove200kTokens?: number
    cacheCreationInputCostUnit: CacheInputCostUnit
    priceTier?: number
}

type ProviderModelList = ProviderModel[]

type AICostModelListGeneric = Record<string, ProviderModelList>

const MODEL_LIST_URL = 'https://raw.githubusercontent.com/meistrari/aicost/main/model-list.json'
const MODEL_LIST_TTL_MS = 30 * 60 * 1000
const MODEL_LIST_FETCH_TIMEOUT_MS = 5000

let cachedList: AICostModelListGeneric | null = null
let lastFetchTime: number | null = null
let inFlightFetch: Promise<AICostModelListGeneric> | null = null

export type { AICostModelList, AICostModelProvider } from './model-list'

function isProviderModel(model: unknown): model is ProviderModel {
    if (!model || typeof model !== 'object')
        return false

    const candidate = model as Partial<ProviderModel>
    return typeof candidate.name === 'string' && typeof candidate.type === 'string'
}

function isAICostModelList(value: unknown): value is AICostModelListGeneric {
    if (!value || typeof value !== 'object' || Array.isArray(value))
        return false

    return Object.values(value as Record<string, unknown>).every(models =>
        Array.isArray(models) && models.every(isProviderModel),
    )
}

function calculateResolvedCost(unitCost: number | null, amount: number): number {
    return Number(((unitCost ?? 0) * amount).toFixed(10))
}

function toNonNegativeAmount(value: unknown, fallback = 0): number {
    const amount = typeof value === 'string' && value.trim() !== ''
        ? Number(value)
        : value

    return typeof amount === 'number' && Number.isFinite(amount) && amount >= 0
        ? amount
        : fallback
}

/**
 * Fetches the list of available AI model providers
 * and their associated model information.
 *
 * - It first fetches from the latest version of the
 * list from the github repository.
 * - If the list couldn't be fetched, it falls back to
 * the static list imported from the package itself.
 *
 * @returns The list of available AI model providers and their associated model information.
 */
export async function getAICostModelList(): Promise<AICostModelListGeneric> {
    const now = Date.now()

    if (cachedList && lastFetchTime && (now - lastFetchTime < MODEL_LIST_TTL_MS)) {
        return cachedList
    }

    if (!inFlightFetch) {
        const abortController = new AbortController()
        const timeoutHandle = setTimeout(() => abortController.abort(), MODEL_LIST_FETCH_TIMEOUT_MS)

        inFlightFetch = fetch(MODEL_LIST_URL, { signal: abortController.signal })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch model list: HTTP ${res.status}`)
                }

                const json = await res.json()
                if (!isAICostModelList(json)) {
                    throw new Error('Failed to fetch model list: invalid JSON format')
                }

                lastFetchTime = Date.now()
                cachedList = json
                return json
            })
            .catch((error) => {
                if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'test') {
                    console.warn(`Falling back to bundled model list: ${error instanceof Error ? error.message : String(error)}`)
                }

                const fallback = cachedList ?? AICostModelList as unknown as AICostModelListGeneric
                cachedList = fallback
                lastFetchTime = Date.now()
                return fallback
            })
            .finally(() => {
                clearTimeout(timeoutHandle)
                inFlightFetch = null
            })
    }

    return await inFlightFetch
}

export async function calculateCost<P extends LooseString<AICostModelProvider>>(options: {
    provider: P
    model: P extends AICostModelProvider ? typeof AICostModelList[P][number]['name'] : string
    inputAmount: number
    outputAmount?: number
    cacheReadInputTokens?: number
    cacheCreationInputTokens?: number
    usageMetadata?: GoogleUsageMetadata
    /** Subsets of cacheCreationInputTokens. */
    cacheCreationInputTokens1h?: number
    cacheCreationInputTokens12h?: number
    /** Actual billed tier reported by the provider, not the requested `auto` tier. */
    serviceTier?: string
    /** Direct Anthropic US-only inference adds 10% to all token categories. */
    inferenceGeo?: string
    /** Reject missing rates for consumed categories instead of treating them as free. */
    strict?: boolean
}): Promise<{
    inputCost: number
    outputCost: number
    cacheReadInputCost: number
    cacheCreationInputCost: number
    inputCostUnit: InputCostUnit
    outputCostUnit: OutputCostUnit
    cacheReadInputCostUnit: CacheInputCostUnit
    cacheCreationInputCostUnit: CacheInputCostUnit
}> {
    const modelList = await getAICostModelList()
    const providerModels = modelList[options.provider]

    if (!providerModels)
        throw new Error(`Provider ${options.provider} not found`)

    const modelInfo = providerModels.find(m => m.name === options.model)

    if (!modelInfo)
        throw new Error(`Model ${options.model} not found for provider ${options.provider}`)

    const metadata = options.usageMetadata
    const promptTokens = toNonNegativeAmount(metadata?.promptTokenCount, options.inputAmount)
    const rawCacheReadInputTokens = toNonNegativeAmount(
        metadata?.cachedContentTokenCount,
        toNonNegativeAmount(options.cacheReadInputTokens),
    )
    const cacheReadInputTokens = metadata
        ? Math.min(promptTokens, rawCacheReadInputTokens)
        : rawCacheReadInputTokens
    const cacheCreationInputTokens = toNonNegativeAmount(options.cacheCreationInputTokens)
    const thinkingTokens = toNonNegativeAmount(metadata?.thoughtsTokenCount)
    // Callers pass inclusive output totals; a thinking-only response may omit candidates.
    const candidateTokens = toNonNegativeAmount(metadata?.candidatesTokenCount, Math.max(0, toNonNegativeAmount(options.outputAmount) - thinkingTokens))
    const toolUsePromptTokens = toNonNegativeAmount(metadata?.toolUsePromptTokenCount)
    const accountedMetadataTokens = promptTokens + candidateTokens + thinkingTokens
    const reportedTotalTokens = toNonNegativeAmount(metadata?.totalTokenCount, accountedMetadataTokens)
    const separatelyReportedToolUseTokens = metadata
        ? Math.min(toolUsePromptTokens, Math.max(0, reportedTotalTokens - accountedMetadataTokens))
        : 0
    const inputAmount = metadata
        ? promptTokens - cacheReadInputTokens + separatelyReportedToolUseTokens
        : options.inputAmount
    const outputAmount = metadata ? candidateTokens + thinkingTokens : toNonNegativeAmount(options.outputAmount)
    const contextAmount = metadata
        ? promptTokens + separatelyReportedToolUseTokens
        : inputAmount + cacheReadInputTokens + cacheCreationInputTokens
    const serviceTier = options.serviceTier === 'default' || options.serviceTier === 'auto'
        ? 'standard'
        : options.serviceTier ?? 'standard'
    const tiers = modelInfo.tokenPricing?.filter(tier => tier.serviceTier === serviceTier)
    if (serviceTier !== 'standard' && !tiers?.length)
        throw new Error(`No ${serviceTier} pricing for ${options.provider}/${options.model}`)
    const rates = {
        inputCost: serviceTier === 'standard' ? modelInfo.inputCost : null,
        outputCost: serviceTier === 'standard' ? modelInfo.outputCost : null,
        cacheReadInputCost: serviceTier === 'standard' ? modelInfo.cacheReadInputCost : null,
        cacheCreationInputCost: serviceTier === 'standard' ? modelInfo.cacheCreationInputCost : null,
        inputAudioCost: undefined as number | undefined,
        outputAudioCost: undefined as number | undefined,
        cacheReadAudioCost: undefined as number | undefined,
        cacheCreationInputCost1h: undefined as number | undefined,
        cacheCreationInputCost12h: undefined as number | undefined,
    }
    // Compatibility with previously published catalogs. New catalogs use explicit thresholds.
    if (!modelInfo.tokenPricing && contextAmount > 200_000) {
        rates.inputCost = modelInfo.inputCostAbove200kTokens ?? rates.inputCost
        rates.outputCost = modelInfo.outputCostAbove200kTokens ?? rates.outputCost
        rates.cacheReadInputCost = modelInfo.cacheReadInputCostAbove200kTokens ?? rates.cacheReadInputCost
        rates.cacheCreationInputCost = modelInfo.cacheCreationInputCostAbove200kTokens ?? rates.cacheCreationInputCost
    }
    for (const tier of [...(tiers ?? [])].sort((a, b) => a.aboveInputTokens - b.aboveInputTokens)) {
        if (tier.aboveInputTokens > 0 && contextAmount <= tier.aboveInputTokens)
            continue
        for (const field of Object.keys(rates) as (keyof typeof rates)[]) {
            const value = tier[field]
            if (value !== undefined)
                rates[field] = value
        }
    }
    const writes1h = toNonNegativeAmount(options.cacheCreationInputTokens1h)
    const writes12h = toNonNegativeAmount(options.cacheCreationInputTokens12h)
    if (writes1h + writes12h > cacheCreationInputTokens)
        throw new Error('Cache TTL token counts exceed total cache creation tokens')
    const defaultWrites = cacheCreationInputTokens - writes1h - writes12h
    function price(rate: number | null | undefined, amount: number, category: string): number {
        if (options.strict && amount > 0 && rate == null)
            throw new Error(`Missing ${category} rate for ${options.provider}/${options.model}`)
        return calculateResolvedCost(rate ?? null, amount)
    }
    // Explicit TTL counts must never silently receive a shorter TTL's rate.
    if ((writes1h > 0 && rates.cacheCreationInputCost1h == null) || (writes12h > 0 && rates.cacheCreationInputCost12h == null))
        throw new Error(`Missing cache TTL rate for ${options.provider}/${options.model}`)
    const multiplier = options.provider === 'anthropic' && options.inferenceGeo === 'us' ? 1.1 : 1
    const audioTokens = (details?: GoogleModalityTokenCount[]) => (details ?? []).reduce((total, item) =>
        item.modality?.toUpperCase() === 'AUDIO' ? total + toNonNegativeAmount(item.tokenCount) : total, 0)
    const promptAudioTokens = audioTokens(metadata?.promptTokensDetails)
    const outputAudioTokens = audioTokens(metadata?.candidatesTokensDetails)
    let cachedAudioTokens = audioTokens(metadata?.cacheTokensDetails)
    if (promptAudioTokens > 0 && cacheReadInputTokens > 0 && !metadata?.cacheTokensDetails?.length) {
        if (promptAudioTokens === promptTokens) {
            cachedAudioTokens = cacheReadInputTokens
        }
        else if ((rates.inputAudioCost !== undefined && rates.inputAudioCost !== rates.inputCost)
            || (rates.cacheReadAudioCost !== undefined && rates.cacheReadAudioCost !== rates.cacheReadInputCost)) {
            throw new Error('Missing cache modality breakdown for mixed audio input')
        }
    }
    if (promptAudioTokens > promptTokens || cachedAudioTokens > promptAudioTokens || cachedAudioTokens > cacheReadInputTokens || outputAudioTokens > outputAmount)
        throw new Error('Modality token counts exceed their totals')
    // With identical audio/text rates an unknown cache modality split cannot affect cost.
    const inputAudioTokens = Math.min(inputAmount, promptAudioTokens - cachedAudioTokens)
    const resolvedInputCost = (
        price(rates.inputCost, inputAmount - inputAudioTokens, 'input')
        + price(rates.inputAudioCost ?? rates.inputCost, inputAudioTokens, 'audio input')
    ) * multiplier
    const resolvedOutputCost = (
        price(rates.outputCost, outputAmount - outputAudioTokens, 'output')
        + price(rates.outputAudioCost ?? rates.outputCost, outputAudioTokens, 'audio output')
    ) * multiplier
    const resolvedCacheReadInputCost = (
        price(rates.cacheReadInputCost, cacheReadInputTokens - cachedAudioTokens, 'cache read')
        + price(rates.cacheReadAudioCost ?? rates.cacheReadInputCost, cachedAudioTokens, 'audio cache read')
    ) * multiplier
    const resolvedCacheCreationInputCost = (
        price(rates.cacheCreationInputCost, defaultWrites, 'cache write')
        + price(rates.cacheCreationInputCost1h, writes1h, 'one-hour cache write')
        + price(rates.cacheCreationInputCost12h, writes12h, 'twelve-hour cache write')
    ) * multiplier

    return {
        inputCost: resolvedInputCost,
        outputCost: resolvedOutputCost,
        cacheReadInputCost: resolvedCacheReadInputCost,
        cacheCreationInputCost: resolvedCacheCreationInputCost,
        inputCostUnit: modelInfo.inputCostUnit,
        outputCostUnit: modelInfo.outputCostUnit,
        cacheReadInputCostUnit: modelInfo.cacheReadInputCostUnit,
        cacheCreationInputCostUnit: modelInfo.cacheCreationInputCostUnit,
    }
}

export async function getModelInfo(options: {
    provider: AICostModelProvider
    model: string
}): Promise<ProviderModel | undefined> {
    const modelList = await getAICostModelList()
    const providerModels = modelList[options.provider]

    if (!providerModels)
        return undefined

    return providerModels.find(m => m.name === options.model)
}

export async function getProviderList(): Promise<Array<LooseString<AICostModelProvider>>> {
    const modelList = await getAICostModelList()
    return Object.keys(modelList)
}

export async function getModelList(provider: AICostModelProvider): Promise<ProviderModelList> {
    const modelList = await getAICostModelList()
    return modelList[provider] ?? []
}
