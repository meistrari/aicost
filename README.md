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

When Google metadata omits `candidatesTokenCount`, `outputAmount` means visible output tokens. Set `outputAmountIncludesThinking: true` if your normalized output already includes thinking.

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

### Google backend and region

Use `gemini-api` for the paid Gemini Developer API and `vertex-ai` for Vertex. Pass the actual Vertex endpoint's `region` (`global`, `us-east1`, etc.), not the project's default location. Omitting it preserves the legacy global calculation. An explicitly regional request throws when that model has no verified regional rate; a direct API model absent from its catalog also throws rather than borrowing a Vertex price.

`usageMetadata.serviceTier` and Vertex `trafficType` select the billed service tier. Contradictory metadata and provisioned throughput throw because they cannot establish a PayGo token charge. Cache, audio, thinking and long-context rates remain request-specific.

Vertex audio rates are explicit for the verified tiers in `scripts/google-models.ts`. For models with a separate audio price, missing tier-specific audio or audio-cache prices throw rather than falling back to text rates. In particular, discounted Vertex 2.5 Flash/Flash Lite and 3 Flash Preview audio cache remains unpriced pending a verified tariff. Mixed cached audio requires modality breakdowns unless the rates are identical. The published Vertex 2.5 Flash standard audio price above 200K conflicts with its short-context price; this long-context combination still requires SKU reconciliation before it can be considered validated.

The manually verified Google entries live in `scripts/google-models.ts`, with links to the provider pricing pages. Introductory rates have a conservative UTC expiry guard: refresh the catalog before the published price transition. For delayed calculations, pass the original request timestamp as `pricingDate`; otherwise the current time is used. Expired rates throw instead of extending a promotion. These token calculations do not establish net account spend after credits, free-tier allowances, cache storage or grounding charges.

`pricingDate` controls the expiry check; it does not retrieve historical rate versions. Preserve the calculated cost or the original price catalog for historical accounting. A compatible refreshed catalog may remove an introductory expiry when replacing its rates with permanent prices.
