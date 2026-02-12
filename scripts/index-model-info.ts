import { join } from 'node:path'

type ModelMode = 'chat' | 'completion' | 'embedding' | 'responses'
type InputCostUnit = 'token' | 'request' | 'pixel' | null
type OutputCostUnit = 'token' | 'request' | 'image' | null
type CacheInputCostUnit = 'token' | null

type RawModel = {
    litellm_provider?: string
    mode?: string
    max_tokens?: number | null
    input_cost_per_token?: number | null
    input_cost_per_request?: number | null
    input_cost_per_pixel?: number | null
    output_cost_per_token?: number | null
    output_cost_per_request?: number | null
    output_cost_per_image?: number | null
    cache_read_input_token_cost?: number | null
    cache_creation_input_token_cost?: number | null
}

type RawModelIndex = Record<string, RawModel>

type IndexedModel = {
    maxTokens: number | null
    name: string
    type: ModelMode
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

const ROOT_DIR = join(import.meta.dir, '..')
const MODEL_LIST_TS_PATH = join(ROOT_DIR, 'src', 'model-list.ts')
const MODEL_LIST_JSON_PATH = join(ROOT_DIR, 'model-list.json')

const providerMapping: Record<string, string[]> = {
    'vertex-ai': ['vertex_ai-text-models', 'vertex_ai-chat-models', 'vertex_ai-code-text-models', 'vertex_ai-language-models', 'vertex_ai-vision-models', 'vertex_ai-embedding-models'],
}

const providerAliasMapping = Object.entries(providerMapping).reduce<Record<string, string>>((acc, [provider, aliases]) => {
    for (const alias of aliases) {
        acc[alias] = provider
    }

    return acc
}, {})

// These provider keys are intentionally excluded from publishing.
const blockList = new Set(['palm', 'gemini'])
const allowedModes = new Set<ModelMode>(['chat', 'completion', 'embedding', 'responses'])

function isModelMode(mode: string): mode is ModelMode {
    return allowedModes.has(mode as ModelMode)
}

function toNullableNumber(value: unknown): number | null {
    return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function toOptionalString(value: unknown): string | undefined {
    return typeof value === 'string' ? value : undefined
}

function normalizeRawModel(value: unknown): RawModel | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return null
    }

    const model = value as Record<string, unknown>

    return {
        litellm_provider: toOptionalString(model.litellm_provider),
        mode: toOptionalString(model.mode),
        max_tokens: toNullableNumber(model.max_tokens),
        input_cost_per_token: toNullableNumber(model.input_cost_per_token),
        input_cost_per_request: toNullableNumber(model.input_cost_per_request),
        input_cost_per_pixel: toNullableNumber(model.input_cost_per_pixel),
        output_cost_per_token: toNullableNumber(model.output_cost_per_token),
        output_cost_per_request: toNullableNumber(model.output_cost_per_request),
        output_cost_per_image: toNullableNumber(model.output_cost_per_image),
        cache_read_input_token_cost: toNullableNumber(model.cache_read_input_token_cost),
        cache_creation_input_token_cost: toNullableNumber(model.cache_creation_input_token_cost),
    }
}

function isProviderNameSafe(provider: string): boolean {
    return /^[a-zA-Z0-9._-]+$/.test(provider)
}

async function writeIfChanged(filePath: string, content: string): Promise<void> {
    const file = Bun.file(filePath)

    if (await file.exists()) {
        const currentContent = await file.text()
        if (currentContent === content) {
            return
        }
    }

    await Bun.write(filePath, content)
}

async function fetchModelIndex(): Promise<RawModelIndex> {
    try {
        const response = await fetch(
            'https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json',
            { signal: AbortSignal.timeout(30_000) },
        )
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`)
        }

        const json = await response.json() as unknown
        if (!json || typeof json !== 'object' || Array.isArray(json)) {
            throw new Error('Unexpected JSON format: expected root object')
        }

        return Object.entries(json as Record<string, unknown>).reduce<RawModelIndex>((acc, [name, rawModel]) => {
            const model = normalizeRawModel(rawModel)
            if (model) {
                acc[name] = model
            }

            return acc
        }, {})
    }
    catch (error) {
        throw new Error(`Failed to fetch LiteLLM model index: ${error instanceof Error ? error.message : String(error)}`)
    }
}

/**
 * Calculate price tier ($ to $$$$$) based on combined input/output cost
 * Heuristic based on typical AI model pricing ranges:
 * $ - Very cheap (< $0.50 per 1M tokens)
 * $$ - Cheap ($0.50 - $2 per 1M tokens)
 * $$$ - Moderate ($2 - $10 per 1M tokens)
 * $$$$ - Expensive ($10 - $15 per 1M tokens)
 * $$$$$ - Very expensive (> $15 per 1M tokens)
 */
function calculatePriceTier(inputCost: number | null, outputCost: number | null, inputUnit: InputCostUnit, outputUnit: OutputCostUnit): number | undefined {
    if (inputCost == null && outputCost == null)
        return undefined

    let normalizedInputCost = 0
    let normalizedOutputCost = 0

    if (inputCost != null && inputUnit === 'token') {
        normalizedInputCost = inputCost
    }
    else if (inputCost != null && inputUnit === 'request') {
        // Heuristic normalization: treat one request as roughly 1k token-equivalent pricing.
        normalizedInputCost = inputCost / 1000
    }
    else if (inputCost != null && inputUnit === 'pixel') {
        // Heuristic normalization for vision models to fit token-like pricing buckets.
        normalizedInputCost = inputCost * 100
    }

    if (outputCost != null && outputUnit === 'token') {
        normalizedOutputCost = outputCost
    }
    else if (outputCost != null && outputUnit === 'request') {
        // Heuristic normalization: treat one request as roughly 1k token-equivalent pricing.
        normalizedOutputCost = outputCost / 1000
    }
    else if (outputCost != null && outputUnit === 'image') {
        // Heuristic normalization for image outputs to fit token-like pricing buckets.
        normalizedOutputCost = outputCost / 1000
    }

    // Weight output 2x because generation pricing generally dominates total cost.
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

function buildModelPerProvider(modelIndex: RawModelIndex): Record<string, IndexedModel[]> {
    const modelList = Object.entries(modelIndex).map(([name, model]) => ({ name, model }))

    return modelList.reduce<Record<string, IndexedModel[]>>((acc, { model, name }) => {
        const litellmProvider = model.litellm_provider
        const mode = model.mode

        if (!litellmProvider || !mode || blockList.has(litellmProvider) || !isModelMode(mode)) {
            return acc
        }

        const provider = providerAliasMapping[litellmProvider] ?? litellmProvider
        if (!acc[provider])
            acc[provider] = []

        const inputCostPerToken = toNullableNumber(model.input_cost_per_token)
        const inputCostPerRequest = toNullableNumber(model.input_cost_per_request)
        const inputCostPerPixel = toNullableNumber(model.input_cost_per_pixel)
        const outputCostPerToken = toNullableNumber(model.output_cost_per_token)
        const outputCostPerRequest = toNullableNumber(model.output_cost_per_request)
        const outputCostPerImage = toNullableNumber(model.output_cost_per_image)
        const cacheReadInputTokenCost = toNullableNumber(model.cache_read_input_token_cost)
        const cacheCreationInputTokenCost = toNullableNumber(model.cache_creation_input_token_cost)

        // Priority order is intentional: token > request > pixel.
        const inputCost = inputCostPerToken ?? inputCostPerRequest ?? inputCostPerPixel ?? null
        const inputCostUnit: InputCostUnit = inputCostPerToken != null
            ? 'token'
            : inputCostPerRequest != null
                ? 'request'
                : inputCostPerPixel != null
                    ? 'pixel'
                    : null

        // Priority order is intentional: token > request > image.
        const outputCost = outputCostPerToken ?? outputCostPerRequest ?? outputCostPerImage ?? null
        const outputCostUnit: OutputCostUnit = outputCostPerToken != null
            ? 'token'
            : outputCostPerRequest != null
                ? 'request'
                : outputCostPerImage != null
                    ? 'image'
                    : null

        const cacheReadInputCost = cacheReadInputTokenCost
        const cacheCreationInputCost = cacheCreationInputTokenCost
        const cacheReadInputCostUnit: CacheInputCostUnit = cacheReadInputTokenCost != null ? 'token' : null
        const cacheCreationInputCostUnit: CacheInputCostUnit = cacheCreationInputTokenCost != null ? 'token' : null
        const priceTier = calculatePriceTier(inputCost, outputCost, inputCostUnit, outputCostUnit)

        const structured: IndexedModel = {
            maxTokens: toNullableNumber(model.max_tokens),
            name,
            type: mode,
            inputCost,
            inputCostUnit,
            outputCost,
            outputCostUnit,
            cacheReadInputCost,
            cacheReadInputCostUnit,
            cacheCreationInputCost,
            cacheCreationInputCostUnit,
            ...(priceTier ? { priceTier } : {}),
        }

        acc[provider].push(structured)
        return acc
    }, {})
}

function createModelListFileContent(modelPerProvider: Record<string, IndexedModel[]>, modelPerProviderContent: string): string {
    let modelListFileContent = [
        `// Last updated: ${new Date().toISOString()}`,
        `// Next update: ${new Date(new Date().getTime() + (6 * 60 * 60 * 1000)).toISOString()}`,
        '\n',
    ].join('\n')

    const providerNames = Object.keys(modelPerProvider)
    for (const providerName of providerNames) {
        if (!isProviderNameSafe(providerName)) {
            throw new Error(`Unsafe provider name encountered: ${providerName}`)
        }
    }

    const providerTypeUnion = providerNames.map(provider => JSON.stringify(provider)).join(' | ')
    modelListFileContent += `export type AICostModelProvider = ${providerTypeUnion}\n\n`
    modelListFileContent += `// Generated from LiteLLM\nexport const AICostModelList = ${modelPerProviderContent} as const\n\n`

    return modelListFileContent
}

async function main(): Promise<void> {
    const modelIndex = await fetchModelIndex()
    const modelPerProvider = buildModelPerProvider(modelIndex)
    const modelPerProviderContent = JSON.stringify(modelPerProvider, null, 4)
    const modelListFileContent = createModelListFileContent(modelPerProvider, modelPerProviderContent)

    try {
        await writeIfChanged(MODEL_LIST_TS_PATH, modelListFileContent)
        await writeIfChanged(MODEL_LIST_JSON_PATH, modelPerProviderContent)
    }
    catch (error) {
        throw new Error(`Failed to write generated model files: ${error instanceof Error ? error.message : String(error)}`)
    }
}

await main().catch((error) => {
    console.error(error)
    process.exit(1)
})
