import type { AICostModelProvider } from './model-list'
import { AICostModelList } from './model-list'

export function calculateCost(options: {
    provider: AICostModelProvider
    model: string
    inputAmount: number
    outputAmount?: number
}) {
    const modelInfo = AICostModelList[options.provider].find(m => m.name === options.model)

    if (!modelInfo)
        throw new Error(`Model ${options.model} not found for provider ${options.provider}`)

    const { inputCost, outputCost } = modelInfo

    const resolvedInputCost = (inputCost ?? 0) * options.inputAmount
    const resolvedOutputCost = (outputCost ?? 0) * (options.outputAmount ?? 0)

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
