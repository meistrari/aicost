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
```js
{
  inputCost: 0.18096,
  outputCost: 0.07428,
  inputCostUnit: "token",
  outputCostUnit: "token",
}
```

### Get information for a model
Retrieve detailed information about a specific AI model.

```javascript
import { getModelInfo } from 'aicost'

const modelInfo = getModelInfo({
    provider: 'openai',
    model: 'gpt-4'
})

console.log(modelInfo)
```

### List supported providers
List all available AI model providers.

```javascript
import { getProviderList } from 'aicost'

const providers = getProviderList()

console.log(providers.includes('anthropic'))
```

### List supported models from a provider
Get a list of all models offered by a specific provider.

```javascript
import { getModelList } from 'aicost'

const models = getModelList('cohere')

console.log(models)
```

## Credits
The information present on this package is extracted from the amazing work done at [LiteLLM](https://github.com/BerriAI/litellm/), if you're using python, check them out!
