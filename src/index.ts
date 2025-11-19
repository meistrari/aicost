import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

let cachedList: any = null
let lastFetchTime: number | null = null

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
export async function getAICostModelList() {
    const now = Date.now()
    const ttl = 30 * 60 * 1000

    if (cachedList && lastFetchTime && (now - lastFetchTime < ttl)) {
        return cachedList as typeof AICostModelList
    }

    return await fetch('https://raw.githubusercontent.com/meistrari/aicost/main/model-list.json')
        .then(res => res.json() as any)
        .then(res => {
            console.log('Fetched list from github')
            lastFetchTime = now
            cachedList = res
            return res
        })
        .catch(() => cachedList ?? AICostModelList)
}

export async function calculateCost<P extends AICostModelProvider>(options: {
    provider: P
    model: typeof AICostModelList[P][number]['name']
    inputAmount: number
    outputAmount?: number
}) {
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
}) {
    const modelList = await getAICostModelList()
    return modelList[options.provider].find(m => m.name === options.model)
}

export async function getProviderList() {
    const modelList = await getAICostModelList()
    return Object.keys(modelList) as AICostModelProvider[]
}

export async function getModelList(provider: AICostModelProvider) {
    const modelList = await getAICostModelList()
    return modelList[provider]
}
