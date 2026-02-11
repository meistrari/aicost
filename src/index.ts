import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

type LooseString<T extends string> = T | (string & {})

type InputCostUnit = 'token' | 'request' | 'pixel' | null
type OutputCostUnit = 'token' | 'request' | 'image' | null
type CacheInputCostUnit = 'token' | null

type ProviderModel = {
    maxTokens: number | null
    name: string
    type: string
    inputCost: number | null
    inputCostUnit: InputCostUnit
    outputCost: number | null
    outputCostUnit: OutputCostUnit
    cacheReadInputCost: number | null
    cacheReadInputCostUnit: CacheInputCostUnit
    cacheCreationInputCost: number | null
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

    const {
        inputCost,
        outputCost,
        cacheReadInputCost,
        cacheCreationInputCost,
    } = modelInfo

    const cacheReadInputTokens = typeof options.cacheReadInputTokens === 'number' && Number.isFinite(options.cacheReadInputTokens) && options.cacheReadInputTokens > 0
        ? options.cacheReadInputTokens
        : 0
    const cacheCreationInputTokens = typeof options.cacheCreationInputTokens === 'number' && Number.isFinite(options.cacheCreationInputTokens) && options.cacheCreationInputTokens > 0
        ? options.cacheCreationInputTokens
        : 0

    const pricedCacheReadInputTokens = cacheReadInputCost != null ? cacheReadInputTokens : 0
    const pricedCacheCreationInputTokens = cacheCreationInputCost != null ? cacheCreationInputTokens : 0
    const adjustedInputAmount = modelInfo.inputCostUnit === 'token'
        ? Math.max(options.inputAmount - pricedCacheReadInputTokens - pricedCacheCreationInputTokens, 0)
        : options.inputAmount

    const resolvedInputCost = calculateResolvedCost(inputCost, adjustedInputAmount)
    const resolvedOutputCost = calculateResolvedCost(outputCost, options.outputAmount ?? 0)
    const resolvedCacheReadInputCost = calculateResolvedCost(cacheReadInputCost, pricedCacheReadInputTokens)
    const resolvedCacheCreationInputCost = calculateResolvedCost(cacheCreationInputCost, pricedCacheCreationInputTokens)

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
