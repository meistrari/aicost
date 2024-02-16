import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

export function calculateCost<P extends AICostModelProvider>(options: {
    provider: P
    model: typeof AICostModelList[P][number]['name']
    inputAmount: number
    outputAmount?: number
}) {
    const modelInfo = AICostModelList[options.provider].find(m => m.name === options.model)

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

export function getModelInfo(options: {
    provider: AICostModelProvider
    model: string
}) {
    return AICostModelList[options.provider].find(m => m.name === options.model)
}

export function getProviderList() {
    return Object.keys(AICostModelList) as AICostModelProvider[]
}

export function getModelList(provider: AICostModelProvider) {
    return AICostModelList[provider]
}
