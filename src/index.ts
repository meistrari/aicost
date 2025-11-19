import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

type LooseString<T extends string> = T | (string & {})

type InputCostUnit = 'token' | 'request' | null
type OutputCostUnit = 'token' | null

type ProviderModel = {
    maxTokens: number | null
    name: string
    type: string
    inputCost: number | null
    inputCostUnit: InputCostUnit
    outputCost: number | null
    outputCostUnit: OutputCostUnit
    priceTier: number
}

type ProviderModelList = ProviderModel[]

type AICostModelListGeneric = Record<string, ProviderModelList>

let cachedList: AICostModelListGeneric | null = null
let lastFetchTime: number | null = null

export type { AICostModelList, AICostModelProvider } from './model-list'

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
    const ttl = 30 * 60 * 1000

    if (cachedList && lastFetchTime && (now - lastFetchTime < ttl)) {
        return cachedList
    }

    return await fetch('https://raw.githubusercontent.com/meistrari/aicost/main/model-list.json')
        .then(res => res.json() as Promise<AICostModelListGeneric>)
        .then(res => {
            console.log('Fetched list from github')
            lastFetchTime = now
            cachedList = res
            return res
        })
        .catch(() => cachedList ?? AICostModelList as unknown as AICostModelListGeneric)
}

export async function calculateCost<P extends LooseString<AICostModelProvider>>(options: {
    provider: P
    model: P extends AICostModelProvider ? typeof AICostModelList[P][number]['name'] : string
    inputAmount: number
    outputAmount?: number
}): Promise<{
    inputCost: number
    outputCost: number
    inputCostUnit: InputCostUnit
    outputCostUnit: OutputCostUnit
}> {
    const modelList = await getAICostModelList()
    const modelInfo = modelList[options.provider].find(m => m.name === options.model)

    if (!modelInfo)
        throw new Error(`Model ${options.model} not found for provider ${options.provider}`)

    const { inputCost, outputCost } = modelInfo

    const precision = 10000000000

    const resolvedInputCost = Math.round(((inputCost ?? 0) * precision) * options.inputAmount) / precision
    const resolvedOutputCost = Math.round(((outputCost ?? 0) * precision) * (options.outputAmount ?? 0)) / precision

    return {
        inputCost: resolvedInputCost,
        outputCost: resolvedOutputCost,
        inputCostUnit: modelInfo.inputCostUnit,
        outputCostUnit: modelInfo.outputCostUnit,
    }
}

export async function getModelInfo(options: {
    provider: AICostModelProvider
    model: string
}): Promise<ProviderModel | undefined> {
    const modelList = await getAICostModelList()
    return modelList[options.provider].find(m => m.name === options.model)
}

export async function getProviderList(): Promise<Array<LooseString<AICostModelProvider>>> {
    const modelList = await getAICostModelList()
    return Object.keys(modelList)
}

export async function getModelList(provider: AICostModelProvider): Promise<ProviderModelList> {
    const modelList = await getAICostModelList()
    return modelList[provider]
}
