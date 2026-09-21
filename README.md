# aicost
A simple, efficient library for calculating AI model costs across various providers. It's completely type safe.

## Installation
```bash
npm install aicost
```

## Usage
### Calculate Cost
Calculate the cost of using an AI model based on input and output amounts.

```ts
import { calculateCost } from 'aicost'

const cost = calculateCost({
    provider: 'openai',
    model: 'gpt-3.5-turbo',
    inputAmount: 6032,
    outputAmount: 1238
})

console.log(cost)
```
```ts
{
  inputCost: 0.18096,
  outputCost: 0.07428,
  inputCostUnit: "token",
  outputCostUnit: "token",
}
```

For Google generation responses, pass the complete `usageMetadata` object. This lets aicost include thinking tokens, tool-use prompts, cached input, and model-specific long-context rates:

```ts
const cost = await calculateCost({
    provider: 'vertex-ai',
    model: 'gemini-2.5-pro',
    inputAmount: response.usageMetadata.promptTokenCount,
    outputAmount: response.usageMetadata.candidatesTokenCount,
    usageMetadata: response.usageMetadata,
})
```

When `usageMetadata` is present, its prompt, tool-use prompt, cached-content, candidate, thinking, and total counts are authoritative. The reported total prevents tool-use breakdowns from being counted twice across Google API variants. The effective prompt size selects the applicable context tier; Google charges all input and output tokens at the long-context rate when the prompt exceeds 200,000 tokens.

### Get information for a model
Retrieve detailed information about a specific AI model.

```ts
import { getModelInfo } from 'aicost'

const modelInfo = getModelInfo({
    provider: 'openai',
    model: 'gpt-4'
})

console.log(modelInfo)
```

### List supported providers
List all available AI model providers.

```ts
import { getProviderList } from 'aicost'

const providers = getProviderList()

console.log(providers.includes('anthropic'))
```

### List supported models from a provider
Get a list of all models offered by a specific provider.

```ts
import { getModelList } from 'aicost'

const models = getModelList('cohere')

console.log(models)
```

## Credits
The information present on this package is extracted from the amazing work done at [**LiteLLM ↗**](https://github.com/BerriAI/litellm/), if you're using python, check them out!

### TypeSafe JEV

`typesafe` / `jev-1.13.0` uses the standard token cost API. Map the TypeSafe response's usage counters directly:

```ts
import { calculateCost } from 'aicost'

const usage = { input_tokens: 1000, output_tokens: 100 }
const cost = await calculateCost({
    provider: 'typesafe',
    model: 'jev-1.13.0',
    inputAmount: usage.input_tokens,
    outputAmount: usage.output_tokens,
})
// cost.inputCost === 0.000042 (USD)
// cost.outputCost === 0 (free, not unknown)
```

Pricing verified on September 21, 2026 against the [TypeSafe launch announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev): $0.042 per million input tokens, with free output. These are provider costs in USD, without billing markups or credits. Context limits and cache prices are left unknown (`null`).

The JEV entry is maintained in `scripts/additional-models.ts`. The catalog generator merges these additions after LiteLLM by provider and model name, with manual entries taking precedence. Regenerate both catalogs with `bun run index`; do not edit the generated JSON or TypeScript independently. No `jev-latest` alias is provided.
