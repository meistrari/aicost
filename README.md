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

When `usageMetadata` is present, its prompt, tool-use prompt, cached-content, candidate, and thinking counts are authoritative. The effective prompt size selects the applicable context tier; Google charges all input and output tokens at the long-context rate when the prompt exceeds 200,000 tokens.

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
