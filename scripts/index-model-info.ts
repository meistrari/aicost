import { $ } from 'bun'

const modelIndex = await fetch('https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json')
    .then(res => res.json() as any)

const modelList = Object.entries(modelIndex).map(([name, model]) => {
    return { name, model: model as any }
})

const providerMapping = {
    'vertex-ai': ['vertex_ai-text-models', 'vertex_ai-chat-models', 'vertex_ai-code-text-models', 'vertex_ai-language-models', 'vertex_ai-vision-models', 'vertex_ai-embedding-models'],
} as Record<string, string[]>

const blockList = ['palm', 'gemini']

/**
 * Calculate price tier ($ to $$$$$) based on combined input/output cost
 * Heuristic based on typical AI model pricing ranges:
 * $ - Very cheap (< $0.50 per 1M tokens)
 * $$ - Cheap ($0.50 - $2 per 1M tokens)
 * $$$ - Moderate ($2 - $10 per 1M tokens)
 * $$$$ - Expensive ($10 - $50 per 1M tokens)
 * $$$$$ - Very expensive (> $50 per 1M tokens)
 */
function calculatePriceTier(inputCost: number | null, outputCost: number | null, inputUnit: string | null, outputUnit: string | null): number | undefined {
    if (!inputCost && !outputCost)
        return undefined

    let normalizedInputCost = 0
    let normalizedOutputCost = 0

    if (inputCost && inputUnit === 'token') {
        normalizedInputCost = inputCost
    }
    else if (inputCost && inputUnit === 'request') {
        normalizedInputCost = inputCost / 1000
    }
    else if (inputCost && inputUnit === 'pixel') {
        normalizedInputCost = inputCost * 100
    }

    if (outputCost && outputUnit === 'token') {
        normalizedOutputCost = outputCost
    }
    else if (outputCost && outputUnit === 'request') {
        normalizedOutputCost = outputCost / 1000
    }
    else if (outputCost && outputUnit === 'image') {
        // Image generation is typically more expensive
        normalizedOutputCost = outputCost / 1000
    }

    const avgCost = (normalizedInputCost + normalizedOutputCost * 2) / 3

    const costPerMillion = avgCost * 1_000_000

    if (costPerMillion < 0.5)
        return 1
    if (costPerMillion < 2)
        return 2
    if (costPerMillion < 10)
        return 3
    if (costPerMillion < 15)
        return 4
    return 5
}

const modelPerProvider = modelList.reduce((acc, { model, name }) => {
    const {
        litellm_provider,
    } = model

    if (blockList.includes(litellm_provider)
        || !['chat', 'completion', 'embedding', 'responses'].includes(model.mode)
    ) {
        return acc
    }

    const provider = Object.keys(providerMapping).find(provider => providerMapping[provider].includes(litellm_provider)) ?? litellm_provider

    if (!acc[provider])
        acc[provider] = []

    const inputCost = model.input_cost_per_token ?? model.input_cost_per_request ?? model.input_cost_per_pixel ?? null
    const inputCostUnit = model.input_cost_per_token
        ? 'token'
        : model.input_cost_per_request
            ? 'request'
            : model.input_cost_per_pixel
                ? 'pixel'
                : null
    const outputCost = model.output_cost_per_token ?? model.output_cost_per_request ?? model.output_cost_per_image ?? null
    const outputCostUnit = model.output_cost_per_token
        ? 'token'
        : model.output_cost_per_request
            ? 'request'
            : model.output_cost_per_image
                ? 'image'
                : null
    const priceTier = calculatePriceTier(inputCost, outputCost, inputCostUnit, outputCostUnit)

    const structured = {
        maxTokens: model.max_tokens ?? null,
        name,
        type: model.mode,
        inputCost,
        inputCostUnit,
        outputCost,
        outputCostUnit,
        ...(priceTier ? { priceTier } : {}),
    }

    acc[provider].push(structured)

    return acc
}, {} as Record<string, any>)

let modelListFileContent = [
    `// Last updated: ${new Date().toISOString()}`,
    `// Next update: ${new Date(new Date().getTime() + (6 * 60 * 60 * 1000)).toISOString()}`,
    '\n',
].join('\n')

const providerTypeUnion = Object.keys(modelPerProvider).map(provider => `'${provider}'`).join(' | ')

modelListFileContent += `export type AICostModelProvider = ${providerTypeUnion}\n\n`

const modelPerProviderContent = JSON.stringify(modelPerProvider, null, 4)

modelListFileContent += `// Generated from LiteLLM\nexport const AICostModelList = ${modelPerProviderContent} as const\n\n`

await $`echo ${modelListFileContent} > src/model-list.ts`
await $`echo ${modelPerProviderContent} > model-list.json`
