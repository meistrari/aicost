// Last updated: 2025-02-15T12:05:19.032Z
// Next update: 2025-02-15T18:05:19.032Z

export type AICostModelProvider = 'openai' | 'text-completion-openai' | 'azure' | 'azure_text' | 'azure_ai' | 'anthropic' | 'mistral' | 'deepseek' | 'codestral' | 'text-completion-codestral' | 'xai' | 'groq' | 'cerebras' | 'friendliai' | 'vertex-ai' | 'vertex_ai-code-chat-models' | 'vertex_ai-anthropic_models' | 'vertex_ai-llama_models' | 'vertex_ai-mistral_models' | 'vertex_ai-ai21_models' | 'cohere_chat' | 'cohere' | 'replicate' | 'openrouter' | 'ai21' | 'nlp_cloud' | 'aleph_alpha' | 'bedrock' | 'bedrock_converse' | 'sagemaker' | 'together_ai' | 'ollama' | 'deepinfra' | 'perplexity' | 'fireworks_ai' | 'fireworks_ai-embedding-models' | 'anyscale' | 'cloudflare' | 'voyage' | 'databricks' | 'sambanova'

// Generated from LiteLLM
export const AICostModelList = {
    "openai": [
        {
            "maxTokens": 4096,
            "name": "gpt-4",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-audio-preview",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-audio-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-audio-preview-2024-10-01",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-mini-audio-preview-2024-12-17",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-mini",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-mini-2024-07-18",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "o1-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o3-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o3-mini-2025-01-31",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "o1-preview",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "o1-preview-2024-09-12",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o1-2024-12-17",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "chatgpt-4o-latest",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-2024-05-13",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-realtime-preview-2024-10-01",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-realtime-preview",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-mini-realtime-preview",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4o-mini-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-turbo-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-0314",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-0613",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-32k",
            "type": "chat",
            "inputCost": 0.00006,
            "inputCostUnit": "token",
            "outputCost": 0.00012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-32k-0314",
            "type": "chat",
            "inputCost": 0.00006,
            "inputCostUnit": "token",
            "outputCost": 0.00012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-32k-0613",
            "type": "chat",
            "inputCost": 0.00006,
            "inputCostUnit": "token",
            "outputCost": 0.00012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-turbo",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-turbo-2024-04-09",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-1106-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-0125-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-vision-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-4-1106-vision-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "gpt-3.5-turbo",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "gpt-3.5-turbo-0301",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "gpt-3.5-turbo-0613",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16385,
            "name": "gpt-3.5-turbo-1106",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16385,
            "name": "gpt-3.5-turbo-0125",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16385,
            "name": "gpt-3.5-turbo-16k",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16385,
            "name": "gpt-3.5-turbo-16k-0613",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ft:gpt-3.5-turbo",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ft:gpt-3.5-turbo-0125",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ft:gpt-3.5-turbo-1106",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ft:gpt-3.5-turbo-0613",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ft:gpt-4-0613",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "ft:gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.00000375,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "ft:gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.00000375,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "ft:gpt-4o-mini-2024-07-18",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "text-embedding-3-large",
            "type": "embedding",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "text-embedding-3-small",
            "type": "embedding",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "text-embedding-ada-002",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "text-embedding-ada-002-v2",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "text-completion-openai": [
        {
            "maxTokens": 16384,
            "name": "ft:davinci-002",
            "type": "completion",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "ft:babbage-002",
            "type": "completion",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "babbage-002",
            "type": "completion",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "davinci-002",
            "type": "completion",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-3.5-turbo-instruct",
            "type": "completion",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "gpt-3.5-turbo-instruct-0914",
            "type": "completion",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        }
    ],
    "azure": [
        {
            "maxTokens": 100000,
            "name": "azure/o3-mini-2025-01-31",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o3-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "azure/o1-mini",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "azure/o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o1-2024-12-17",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/o1-preview",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/o1-preview-2024-09-12",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4o",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.00000275,
            "inputCostUnit": "token",
            "outputCost": 0.000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.00000275,
            "inputCostUnit": "token",
            "outputCost": 0.000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4o-2024-05-13",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/global-standard/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/global-standard/gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/global-standard/gpt-4o-mini",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-mini",
            "type": "chat",
            "inputCost": 1.65e-7,
            "inputCostUnit": "token",
            "outputCost": 6.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-mini-2024-07-18",
            "type": "chat",
            "inputCost": 1.65e-7,
            "inputCostUnit": "token",
            "outputCost": 6.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-turbo-2024-04-09",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-0125-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-1106-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-0613",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-32k-0613",
            "type": "chat",
            "inputCost": 0.00006,
            "inputCostUnit": "token",
            "outputCost": 0.00012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-32k",
            "type": "chat",
            "inputCost": 0.00006,
            "inputCostUnit": "token",
            "outputCost": 0.00012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-turbo",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4-turbo-vision-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-35-turbo-16k-0613",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-35-turbo-1106",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "azure/gpt-35-turbo-0613",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "azure/gpt-35-turbo-0301",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-35-turbo-0125",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-3.5-turbo-0125",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-35-turbo-16k",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-35-turbo",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-3.5-turbo",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "azure/mistral-large-latest",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "azure/mistral-large-2402",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/command-r-plus",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "azure/ada",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "azure/text-embedding-ada-002",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "azure/text-embedding-3-large",
            "type": "embedding",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "azure/text-embedding-3-small",
            "type": "embedding",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "azure_text": [
        {
            "maxTokens": 4097,
            "name": "azure/gpt-3.5-turbo-instruct-0914",
            "type": "completion",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "azure/gpt-35-turbo-instruct",
            "type": "completion",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4097,
            "name": "azure/gpt-35-turbo-instruct-0914",
            "type": "completion",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        }
    ],
    "azure_ai": [
        {
            "maxTokens": 8192,
            "name": "azure_ai/deepseek-r1",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/jamba-instruct",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "azure_ai/mistral-large",
            "type": "chat",
            "inputCost": 0.000004,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "azure_ai/mistral-small",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/mistral-large-2407",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/ministral-3b",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Llama-3.2-11B-Vision-Instruct",
            "type": "chat",
            "inputCost": 3.7e-7,
            "inputCostUnit": "token",
            "outputCost": 3.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": 7.1e-7,
            "inputCostUnit": "token",
            "outputCost": 7.1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Llama-3.2-90B-Vision-Instruct",
            "type": "chat",
            "inputCost": 0.00000204,
            "inputCostUnit": "token",
            "outputCost": 0.00000204,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Meta-Llama-3-70B-Instruct",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 3.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Meta-Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6.1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Meta-Llama-3.1-70B-Instruct",
            "type": "chat",
            "inputCost": 0.00000268,
            "inputCostUnit": "token",
            "outputCost": 0.00000354,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "azure_ai/Meta-Llama-3.1-405B-Instruct",
            "type": "chat",
            "inputCost": 0.00000533,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3.5-mini-instruct",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 5.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3.5-vision-instruct",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 5.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3.5-MoE-instruct",
            "type": "chat",
            "inputCost": 1.6e-7,
            "inputCostUnit": "token",
            "outputCost": 6.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-mini-4k-instruct",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 5.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-mini-128k-instruct",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 5.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-small-8k-instruct",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-small-128k-instruct",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-medium-4k-instruct",
            "type": "chat",
            "inputCost": 1.7e-7,
            "inputCostUnit": "token",
            "outputCost": 6.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-3-medium-128k-instruct",
            "type": "chat",
            "inputCost": 1.7e-7,
            "inputCostUnit": "token",
            "outputCost": 6.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 512,
            "name": "azure_ai/Cohere-embed-v3-english",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "azure_ai/Cohere-embed-v3-multilingual",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "anthropic": [
        {
            "maxTokens": 8191,
            "name": "claude-instant-1",
            "type": "chat",
            "inputCost": 0.00000163,
            "inputCostUnit": "token",
            "outputCost": 0.00000551,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "claude-instant-1.2",
            "type": "chat",
            "inputCost": 1.63e-7,
            "inputCostUnit": "token",
            "outputCost": 5.51e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "claude-2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "claude-2.1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "claude-3-haiku-20240307",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "claude-3-5-haiku-20241022",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "claude-3-opus-20240229",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "claude-3-sonnet-20240229",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "claude-3-5-sonnet-20240620",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "claude-3-5-sonnet-20241022",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        }
    ],
    "mistral": [
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-tiny",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-small",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-small-latest",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-medium",
            "type": "chat",
            "inputCost": 0.0000027,
            "inputCostUnit": "token",
            "outputCost": 0.0000081,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-medium-latest",
            "type": "chat",
            "inputCost": 0.0000027,
            "inputCostUnit": "token",
            "outputCost": 0.0000081,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-medium-2312",
            "type": "chat",
            "inputCost": 0.0000027,
            "inputCostUnit": "token",
            "outputCost": 0.0000081,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/mistral-large-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/mistral-large-2411",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-large-2402",
            "type": "chat",
            "inputCost": 0.000004,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/mistral-large-2407",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000009,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/pixtral-large-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/pixtral-large-2411",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/pixtral-12b-2409",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/open-mistral-7b",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/open-mixtral-8x7b",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/open-mixtral-8x22b",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/codestral-latest",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/codestral-2405",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/open-mistral-nemo",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/open-mistral-nemo-2407",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "mistral/open-codestral-mamba",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "mistral/codestral-mamba-latest",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "mistral/mistral-embed",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "deepseek": [
        {
            "maxTokens": 8192,
            "name": "deepseek/deepseek-reasoner",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "deepseek/deepseek-chat",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepseek/deepseek-coder",
            "type": "chat",
            "inputCost": 1.4e-7,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        }
    ],
    "codestral": [
        {
            "maxTokens": 8191,
            "name": "codestral/codestral-latest",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "codestral/codestral-2405",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "text-completion-codestral": [
        {
            "maxTokens": 8191,
            "name": "text-completion-codestral/codestral-latest",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "text-completion-codestral/codestral-2405",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "xai": [
        {
            "maxTokens": 131072,
            "name": "xai/grok-beta",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "xai/grok-2-vision-1212",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "xai/grok-2-vision-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "xai/grok-2-vision",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "xai/grok-vision-beta",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-2-1212",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-2",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-2-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        }
    ],
    "groq": [
        {
            "maxTokens": 131072,
            "name": "groq/deepseek-r1-distill-llama-70b",
            "type": "chat",
            "inputCost": 7.5e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.3-70b-versatile",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.3-70b-specdec",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "groq/llama2-70b-4096",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama3-8b-8192",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-1b-preview",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-3b-preview",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 6e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-11b-text-preview",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 1.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-11b-vision-preview",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 1.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-90b-text-preview",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.2-90b-vision-preview",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama3-70b-8192",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.1-8b-instant",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.1-70b-versatile",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama-3.1-405b-reasoning",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "groq/mixtral-8x7b-32768",
            "type": "chat",
            "inputCost": 2.4e-7,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/gemma-7b-it",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 7e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/gemma2-9b-it",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama3-groq-70b-8192-tool-use-preview",
            "type": "chat",
            "inputCost": 8.9e-7,
            "inputCostUnit": "token",
            "outputCost": 8.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/llama3-groq-8b-8192-tool-use-preview",
            "type": "chat",
            "inputCost": 1.9e-7,
            "inputCostUnit": "token",
            "outputCost": 1.9e-7,
            "outputCostUnit": "token"
        }
    ],
    "cerebras": [
        {
            "maxTokens": 128000,
            "name": "cerebras/llama3.1-8b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "cerebras/llama3.1-70b",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        }
    ],
    "friendliai": [
        {
            "maxTokens": 8192,
            "name": "friendliai/meta-llama-3.1-8b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "friendliai/meta-llama-3.1-70b-instruct",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        }
    ],
    "vertex-ai": [
        {
            "maxTokens": 2048,
            "name": "text-bison",
            "type": "completion",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "text-bison@001",
            "type": "completion",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "text-bison@002",
            "type": "completion",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "text-bison32k",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "text-bison32k@002",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "text-unicorn",
            "type": "completion",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "text-unicorn@001",
            "type": "completion",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "chat-bison",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "chat-bison@001",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "chat-bison@002",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "chat-bison-32k",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "chat-bison-32k@002",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "code-bison",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "code-bison@001",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "code-bison@002",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "code-bison32k",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "code-bison-32k@002",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64,
            "name": "code-gecko@001",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64,
            "name": "code-gecko@002",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64,
            "name": "code-gecko",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64,
            "name": "code-gecko-latest",
            "type": "completion",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-pro",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.0-pro",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.0-pro-001",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.0-ultra",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.0-ultra-001",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.0-pro-002",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro-002",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro-001",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro-preview-0514",
            "type": "chat",
            "inputCost": 7.8125e-8,
            "inputCostUnit": "token",
            "outputCost": 3.125e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro-preview-0215",
            "type": "chat",
            "inputCost": 7.8125e-8,
            "inputCostUnit": "token",
            "outputCost": 3.125e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-pro-preview-0409",
            "type": "chat",
            "inputCost": 7.8125e-8,
            "inputCostUnit": "token",
            "outputCost": 3.125e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-flash",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-flash-exp-0827",
            "type": "chat",
            "inputCost": 4.688e-9,
            "inputCostUnit": "token",
            "outputCost": 4.6875e-9,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-flash-002",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-flash-001",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-1.5-flash-preview-0514",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 4.6875e-9,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-pro-experimental",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "gemini-flash-experimental",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "gemini-pro-vision",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "gemini-1.0-pro-vision",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "gemini-1.0-pro-vision-001",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "medlm-medium",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "medlm-large",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-pro-exp-02-05",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash-exp",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash-001",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash-thinking-exp",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 65536,
            "name": "gemini-2.0-flash-thinking-exp-01-21",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "text-embedding-004",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "text-embedding-005",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "text-multilingual-embedding-002",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "textembedding-gecko",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "textembedding-gecko-multilingual",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "textembedding-gecko-multilingual@001",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "textembedding-gecko@001",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "textembedding-gecko@003",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "text-embedding-preview-0409",
            "type": "embedding",
            "inputCost": 6.25e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 3072,
            "name": "text-multilingual-embedding-preview-0409",
            "type": "embedding",
            "inputCost": 6.25e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "vertex_ai-code-chat-models": [
        {
            "maxTokens": 1024,
            "name": "codechat-bison@latest",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "codechat-bison",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "codechat-bison@001",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "codechat-bison@002",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "codechat-bison-32k",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "codechat-bison-32k@002",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 1.25e-7,
            "outputCostUnit": "token"
        }
    ],
    "vertex_ai-anthropic_models": [
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-sonnet@20240229",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-sonnet@20240620",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-sonnet-v2",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-sonnet-v2@20241022",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-haiku",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-haiku@20240307",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-haiku",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-5-haiku@20241022",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-opus",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-3-opus@20240229",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        }
    ],
    "vertex_ai-llama_models": [
        {
            "maxTokens": 32000,
            "name": "vertex_ai/meta/llama3-405b-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "vertex_ai/meta/llama3-70b-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "vertex_ai/meta/llama3-8b-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/meta/llama-3.2-90b-vision-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "vertex_ai-mistral_models": [
        {
            "maxTokens": 8191,
            "name": "vertex_ai/mistral-large@latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "vertex_ai/mistral-large@2411-001",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "vertex_ai/mistral-large-2411",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "vertex_ai/mistral-large@2407",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/mistral-nemo@latest",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/mistral-nemo@2407",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/codestral@latest",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/codestral@2405",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/codestral-2501",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        }
    ],
    "vertex_ai-ai21_models": [
        {
            "maxTokens": 256000,
            "name": "vertex_ai/jamba-1.5-mini@001",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vertex_ai/jamba-1.5-large@001",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vertex_ai/jamba-1.5",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vertex_ai/jamba-1.5-mini",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vertex_ai/jamba-1.5-large",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        }
    ],
    "cohere_chat": [
        {
            "maxTokens": 4096,
            "name": "command-r",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command-r-08-2024",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command-r7b-12-2024",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 3.75e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command-light",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command-r-plus",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command-r-plus-08-2024",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        }
    ],
    "cohere": [
        {
            "maxTokens": 4096,
            "name": "command-nightly",
            "type": "completion",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "command",
            "type": "completion",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "embed-english-light-v3.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "embed-multilingual-v3.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "embed-english-v2.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "embed-english-light-v2.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 768,
            "name": "embed-multilingual-v2.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1024,
            "name": "embed-english-v3.0",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "replicate": [
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-13b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-13b-chat",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-70b",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000275,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-70b-chat",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000275,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-7b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/meta/llama-2-7b-chat",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "replicate/meta/llama-3-70b",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000275,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "replicate/meta/llama-3-70b-instruct",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000275,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8086,
            "name": "replicate/meta/llama-3-8b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8086,
            "name": "replicate/meta/llama-3-8b-instruct",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/mistralai/mistral-7b-v0.1",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/mistralai/mistral-7b-instruct-v0.2",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "replicate/mistralai/mixtral-8x7b-instruct-v0.1",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        }
    ],
    "openrouter": [
        {
            "maxTokens": 8192,
            "name": "openrouter/deepseek/deepseek-r1",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/deepseek/deepseek-chat",
            "type": "chat",
            "inputCost": 1.4e-7,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/deepseek/deepseek-coder",
            "type": "chat",
            "inputCost": 1.4e-7,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "openrouter/microsoft/wizardlm-2-8x22b:nitro",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/google/gemini-pro-1.5",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.0000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "openrouter/mistralai/mixtral-8x22b-instruct",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openrouter/cohere/command-r-plus",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/databricks/dbrx-instruct",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "openrouter/anthropic/claude-3-haiku",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "openrouter/anthropic/claude-3-5-haiku",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/anthropic/claude-3-haiku-20240307",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/anthropic/claude-3-5-haiku-20241022",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/anthropic/claude-3.5-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/anthropic/claude-3.5-sonnet:beta",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "openrouter/anthropic/claude-3-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "openrouter/mistralai/mistral-large",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32769,
            "name": "openrouter/cognitivecomputations/dolphin-mixtral-8x7b",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 45875,
            "name": "openrouter/google/gemini-pro-vision",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 3.75e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/fireworks/firellava-13b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/meta-llama/llama-3-8b-instruct:free",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 16384,
            "name": "openrouter/meta-llama/llama-3-8b-instruct:extended",
            "type": "chat",
            "inputCost": 2.25e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000225,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/meta-llama/llama-3-70b-instruct:nitro",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/meta-llama/llama-3-70b-instruct",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "openrouter/openai/o1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "openrouter/openai/o1-mini",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "openrouter/openai/o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/o1-preview",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/o1-preview-2024-09-12",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/openai/gpt-4o",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/openai/gpt-4o-2024-05-13",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 130000,
            "name": "openrouter/openai/gpt-4-vision-preview",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4095,
            "name": "openrouter/openai/gpt-3.5-turbo",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16383,
            "name": "openrouter/openai/gpt-3.5-turbo-16k",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/openai/gpt-4",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "openrouter/anthropic/claude-instant-v1",
            "type": "chat",
            "inputCost": 0.00000163,
            "inputCostUnit": "token",
            "outputCost": 0.00000551,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "openrouter/anthropic/claude-2",
            "type": "chat",
            "inputCost": 0.00001102,
            "inputCostUnit": "token",
            "outputCost": 0.00003268,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/anthropic/claude-3-opus",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 25804,
            "name": "openrouter/google/palm-2-chat-bison",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 20070,
            "name": "openrouter/google/palm-2-codechat-bison",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/meta-llama/llama-2-13b-chat",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/meta-llama/llama-2-70b-chat",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/meta-llama/codellama-34b-instruct",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/nousresearch/nous-hermes-llama2-13b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "openrouter/mancer/weaver",
            "type": "chat",
            "inputCost": 0.000005625,
            "inputCostUnit": "token",
            "outputCost": 0.000005625,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/gryphe/mythomax-l2-13b",
            "type": "chat",
            "inputCost": 0.000001875,
            "inputCostUnit": "token",
            "outputCost": 0.000001875,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/jondurbin/airoboros-l2-70b-2.1",
            "type": "chat",
            "inputCost": 0.000013875,
            "inputCostUnit": "token",
            "outputCost": 0.000013875,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 6144,
            "name": "openrouter/undi95/remm-slerp-l2-13b",
            "type": "chat",
            "inputCost": 0.000001875,
            "inputCostUnit": "token",
            "outputCost": 0.000001875,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/pygmalionai/mythalion-13b",
            "type": "chat",
            "inputCost": 0.000001875,
            "inputCostUnit": "token",
            "outputCost": 0.000001875,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/mistralai/mistral-7b-instruct",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/mistralai/mistral-7b-instruct:free",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 33792,
            "name": "openrouter/qwen/qwen-2.5-coder-32b-instruct",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 1.8e-7,
            "outputCostUnit": "token"
        }
    ],
    "ai21": [
        {
            "maxTokens": 8192,
            "name": "j2-ultra",
            "type": "completion",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-1.5-mini@001",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-1.5-large@001",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-1.5",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-1.5-mini",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-1.5-large",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "j2-mid",
            "type": "completion",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "j2-light",
            "type": "completion",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        }
    ],
    "nlp_cloud": [
        {
            "maxTokens": 16384,
            "name": "dolphin",
            "type": "completion",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "chatdolphin",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        }
    ],
    "aleph_alpha": [
        {
            "maxTokens": 2048,
            "name": "luminous-base",
            "type": "completion",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.000033,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "luminous-base-control",
            "type": "chat",
            "inputCost": 0.0000375,
            "inputCostUnit": "token",
            "outputCost": 0.00004125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "luminous-extended",
            "type": "completion",
            "inputCost": 0.000045,
            "inputCostUnit": "token",
            "outputCost": 0.0000495,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "luminous-extended-control",
            "type": "chat",
            "inputCost": 0.00005625,
            "inputCostUnit": "token",
            "outputCost": 0.000061875,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "luminous-supreme",
            "type": "completion",
            "inputCost": 0.000175,
            "inputCostUnit": "token",
            "outputCost": 0.0001925,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "luminous-supreme-control",
            "type": "chat",
            "inputCost": 0.00021875,
            "inputCostUnit": "token",
            "outputCost": 0.000240625,
            "outputCostUnit": "token"
        }
    ],
    "bedrock": [
        {
            "maxTokens": 8191,
            "name": "ai21.j2-mid-v1",
            "type": "chat",
            "inputCost": 0.0000125,
            "inputCostUnit": "token",
            "outputCost": 0.0000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "ai21.j2-ultra-v1",
            "type": "chat",
            "inputCost": 0.0000188,
            "inputCostUnit": "token",
            "outputCost": 0.0000188,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "ai21.jamba-instruct-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "ai21.jamba-1-5-large-v1:0",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "ai21.jamba-1-5-mini-v1:0",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4000,
            "name": "amazon.titan-text-lite-v1",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "amazon.titan-text-express-v1",
            "type": "chat",
            "inputCost": 0.0000013,
            "inputCostUnit": "token",
            "outputCost": 0.0000017,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "amazon.titan-text-premier-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "amazon.titan-embed-text-v1",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "amazon.titan-embed-text-v2:0",
            "type": "embedding",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128,
            "name": "amazon.titan-embed-image-v1",
            "type": "embedding",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "mistral.mistral-7b-instruct-v0:2",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral.mixtral-8x7b-instruct-v0:1",
            "type": "chat",
            "inputCost": 4.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral.mistral-large-2402-v1:0",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral.mistral-large-2407-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000009,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral.mistral-small-2402-v1:0",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/mistral.mixtral-8x7b-instruct-v0:1",
            "type": "chat",
            "inputCost": 4.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/mistral.mixtral-8x7b-instruct-v0:1",
            "type": "chat",
            "inputCost": 4.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-west-3/mistral.mixtral-8x7b-instruct-v0:1",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 9.1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/mistral.mistral-7b-instruct-v0:2",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/mistral.mistral-7b-instruct-v0:2",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-west-3/mistral.mistral-7b-instruct-v0:2",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/mistral.mistral-large-2402-v1:0",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/mistral.mistral-large-2402-v1:0",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-west-3/mistral.mistral-large-2402-v1:0",
            "type": "chat",
            "inputCost": 0.0000104,
            "inputCostUnit": "token",
            "outputCost": 0.0000312,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anthropic.claude-3-sonnet-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anthropic.claude-3-5-sonnet-20241022-v2:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anthropic.claude-3-5-haiku-20241022-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anthropic.claude-3-opus-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.anthropic.claude-3-sonnet-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "us.anthropic.claude-3-5-haiku-20241022-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.anthropic.claude-3-opus-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "eu.anthropic.claude-3-sonnet-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "eu.anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "eu.anthropic.claude-3-5-sonnet-20241022-v2:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "eu.anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "eu.anthropic.claude-3-5-haiku-20241022-v1:0",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "eu.anthropic.claude-3-opus-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "anthropic.claude-v1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/anthropic.claude-v1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/anthropic.claude-v1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/anthropic.claude-v1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/anthropic.claude-v1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "anthropic.claude-v2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/anthropic.claude-v2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/anthropic.claude-v2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/anthropic.claude-v2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/anthropic.claude-v2",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": 0.000008,
            "inputCostUnit": "token",
            "outputCost": 0.000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-v2:1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/1-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-east-1/6-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/1-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/6-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/us-west-2/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": 0.00000223,
            "inputCostUnit": "token",
            "outputCost": 0.00000755,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/1-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/ap-northeast-1/6-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": 0.00000248,
            "inputCostUnit": "token",
            "outputCost": 0.00000838,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/1-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8191,
            "name": "bedrock/eu-central-1/6-month-commitment/anthropic.claude-instant-v1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "cohere.command-text-v14",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/*/1-month-commitment/cohere.command-text-v14",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/*/6-month-commitment/cohere.command-text-v14",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "cohere.command-light-text-v14",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/*/1-month-commitment/cohere.command-light-text-v14",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/*/6-month-commitment/cohere.command-light-text-v14",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "cohere.command-r-plus-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "cohere.command-r-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 512,
            "name": "cohere.embed-english-v3",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "cohere.embed-multilingual-v3",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "meta.llama2-13b-chat-v1",
            "type": "chat",
            "inputCost": 7.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "meta.llama2-70b-chat-v1",
            "type": "chat",
            "inputCost": 0.00000195,
            "inputCostUnit": "token",
            "outputCost": 0.00000256,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-east-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-west-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/ap-south-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.6e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/ca-central-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/eu-west-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.2e-7,
            "inputCostUnit": "token",
            "outputCost": 6.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/eu-west-2/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/sa-east-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000101,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000265,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-east-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000265,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-west-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000265,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/ap-south-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000318,
            "inputCostUnit": "token",
            "outputCost": 0.0000042,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/ca-central-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000305,
            "inputCostUnit": "token",
            "outputCost": 0.00000403,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/eu-west-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000286,
            "inputCostUnit": "token",
            "outputCost": 0.00000378,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/eu-west-2/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000345,
            "inputCostUnit": "token",
            "outputCost": 0.00000455,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/sa-east-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000445,
            "inputCostUnit": "token",
            "outputCost": 0.00000588,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-1-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 2.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-1-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 2.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-1-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 9.9e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-1-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 9.9e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-1-405b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000532,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-1-405b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000532,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-2-1b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-2-1b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "eu.meta.llama3-2-1b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-2-3b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-2-3b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "eu.meta.llama3-2-3b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.9e-7,
            "inputCostUnit": "token",
            "outputCost": 1.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-2-11b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 3.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-2-11b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 3.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "meta.llama3-2-90b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.meta.llama3-2-90b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        }
    ],
    "bedrock_converse": [
        {
            "maxTokens": 4096,
            "name": "amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 3.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 3.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000032,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000032,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "meta.llama3-3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.meta.llama3-3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        }
    ],
    "sagemaker": [
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-7b",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-7b-f",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-13b",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-13b-f",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-70b",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "sagemaker/meta-textgeneration-llama-2-70b-b-f",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "together_ai": [
        {
            "maxTokens": null,
            "name": "together-ai-up-to-4b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together-ai-4.1b-8b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000,
            "name": "together-ai-8.1b-21b",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together-ai-21.1b-41b",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together-ai-41.1b-80b",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together-ai-81.1b-110b",
            "type": "chat",
            "inputCost": 0.0000018,
            "inputCostUnit": "token",
            "outputCost": 0.0000018,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together-ai-embedding-up-to-150m",
            "type": "embedding",
            "inputCost": 8e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together-ai-embedding-151m-to-350m",
            "type": "embedding",
            "inputCost": 1.6e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 1.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 8.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 0.0000035,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 8.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/mistralai/Mixtral-8x7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/mistralai/Mistral-7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/togethercomputer/CodeLlama-34b-Instruct",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "ollama": [
        {
            "maxTokens": 8192,
            "name": "ollama/codegemma",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/codegeex4",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/deepseek-coder-v2-instruct",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/deepseek-coder-v2-base",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/deepseek-coder-v2-lite-instruct",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/deepseek-coder-v2-lite-base",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/internlm2_5-20b-chat",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/llama2",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/llama2:7b",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/llama2:13b",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/llama2:70b",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/llama2-uncensored",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/llama3",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/llama3:8b",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/llama3:70b",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/llama3.1",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 65536,
            "name": "ollama/mistral-large-instruct-2407",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/mistral",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "ollama/mistral-7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/mistral-7B-Instruct-v0.2",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "ollama/mixtral-8x7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 65536,
            "name": "ollama/mixtral-8x22B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/codellama",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "ollama/orca-mini",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "ollama/vicuna",
            "type": "completion",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "deepinfra": [
        {
            "maxTokens": 4096,
            "name": "deepinfra/lizpreciatior/lzlv_70b_fp16_hf",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/Gryphe/MythoMax-L2-13b",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 2.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/mistralai/Mistral-7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/meta-llama/Llama-2-70b-chat-hf",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/cognitivecomputations/dolphin-2.6-mixtral-8x7b",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 2.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/codellama/CodeLlama-34b-Instruct-hf",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/deepinfra/mixtral",
            "type": "completion",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 2.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/Phind/Phind-CodeLlama-34B-v2",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 2.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/deepinfra/airoboros-70b",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/01-ai/Yi-34B-Chat",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/01-ai/Yi-6B-200K",
            "type": "completion",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/jondurbin/airoboros-l2-70b-gpt4-1.4.1",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/meta-llama/Llama-2-13b-chat-hf",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 2.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/amazon/MistralLite",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/meta-llama/Llama-2-7b-chat-hf",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/meta-llama/Meta-Llama-3-8B-Instruct",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "deepinfra/meta-llama/Meta-Llama-3-70B-Instruct",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/meta-llama/Meta-Llama-3.1-405B-Instruct",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/01-ai/Yi-34B-200K",
            "type": "completion",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "deepinfra/openchat/openchat_3.5",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 1.3e-7,
            "outputCostUnit": "token"
        }
    ],
    "perplexity": [
        {
            "maxTokens": 16384,
            "name": "perplexity/codellama-34b-instruct",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000014,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "perplexity/codellama-70b-instruct",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "perplexity/llama-3.1-70b-instruct",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "perplexity/llama-3.1-8b-instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127072,
            "name": "perplexity/llama-3.1-sonar-huge-128k-online",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127072,
            "name": "perplexity/llama-3.1-sonar-large-128k-online",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "perplexity/llama-3.1-sonar-large-128k-chat",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "perplexity/llama-3.1-sonar-small-128k-chat",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127072,
            "name": "perplexity/llama-3.1-sonar-small-128k-online",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127072,
            "name": "perplexity/sonar",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "perplexity/sonar-pro",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "perplexity/pplx-7b-chat",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/pplx-70b-chat",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/pplx-7b-online",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": "request",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/pplx-70b-online",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": "request",
            "outputCost": 0.0000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/llama-2-70b-chat",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000028,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/mistral-7b-instruct",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "perplexity/mixtral-8x7b-instruct",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "perplexity/sonar-small-chat",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 12000,
            "name": "perplexity/sonar-small-online",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": "request",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "perplexity/sonar-medium-chat",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000018,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 12000,
            "name": "perplexity/sonar-medium-online",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": "request",
            "outputCost": 0.0000018,
            "outputCostUnit": "token"
        }
    ],
    "fireworks_ai": [
        {
            "maxTokens": 16384,
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-1b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-3b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p1-8b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-11b-vision-instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "accounts/fireworks/models/llama-v3p2-90b-vision-instruct",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "fireworks_ai/accounts/fireworks/models/firefunction-v2",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "fireworks_ai/accounts/fireworks/models/mixtral-8x22b-instruct-hf",
            "type": "chat",
            "inputCost": 0.0000012,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "fireworks_ai/accounts/fireworks/models/qwen2-72b-instruct",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "fireworks_ai/accounts/fireworks/models/qwen2p5-coder-32b-instruct",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "fireworks_ai/accounts/fireworks/models/yi-large",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-coder-v2-instruct",
            "type": "chat",
            "inputCost": 0.0000012,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-v3",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        }
    ],
    "fireworks_ai-embedding-models": [
        {
            "maxTokens": 8192,
            "name": "fireworks_ai/nomic-ai/nomic-embed-text-v1.5",
            "type": "embedding",
            "inputCost": 8e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "fireworks_ai/nomic-ai/nomic-embed-text-v1",
            "type": "embedding",
            "inputCost": 8e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "fireworks_ai/WhereIsAI/UAE-Large-V1",
            "type": "embedding",
            "inputCost": 1.6e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "fireworks_ai/thenlper/gte-large",
            "type": "embedding",
            "inputCost": 1.6e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "fireworks_ai/thenlper/gte-base",
            "type": "embedding",
            "inputCost": 8e-9,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "anyscale": [
        {
            "maxTokens": 16384,
            "name": "anyscale/mistralai/Mistral-7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "anyscale/mistralai/Mixtral-8x7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "anyscale/mistralai/Mixtral-8x22B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "anyscale/HuggingFaceH4/zephyr-7b-beta",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anyscale/google/gemma-7b-it",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anyscale/meta-llama/Llama-2-7b-chat-hf",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anyscale/meta-llama/Llama-2-13b-chat-hf",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anyscale/meta-llama/Llama-2-70b-chat-hf",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anyscale/codellama/CodeLlama-34b-Instruct-hf",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "anyscale/codellama/CodeLlama-70b-Instruct-hf",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anyscale/meta-llama/Meta-Llama-3-8B-Instruct",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anyscale/meta-llama/Meta-Llama-3-70B-Instruct",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        }
    ],
    "cloudflare": [
        {
            "maxTokens": 3072,
            "name": "cloudflare/@cf/meta/llama-2-7b-chat-fp16",
            "type": "chat",
            "inputCost": 0.000001923,
            "inputCostUnit": "token",
            "outputCost": 0.000001923,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "cloudflare/@cf/meta/llama-2-7b-chat-int8",
            "type": "chat",
            "inputCost": 0.000001923,
            "inputCostUnit": "token",
            "outputCost": 0.000001923,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "cloudflare/@cf/mistral/mistral-7b-instruct-v0.1",
            "type": "chat",
            "inputCost": 0.000001923,
            "inputCostUnit": "token",
            "outputCost": 0.000001923,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "cloudflare/@hf/thebloke/codellama-7b-instruct-awq",
            "type": "chat",
            "inputCost": 0.000001923,
            "inputCostUnit": "token",
            "outputCost": 0.000001923,
            "outputCostUnit": "token"
        }
    ],
    "voyage": [
        {
            "maxTokens": 4096,
            "name": "voyage/voyage-01",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "voyage/voyage-lite-01",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 16000,
            "name": "voyage/voyage-large-2",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-finance-2",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4000,
            "name": "voyage/voyage-lite-02-instruct",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 16000,
            "name": "voyage/voyage-law-2",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 16000,
            "name": "voyage/voyage-code-2",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4000,
            "name": "voyage/voyage-2",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-3-large",
            "type": "embedding",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-3",
            "type": "embedding",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-3-lite",
            "type": "embedding",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-code-3",
            "type": "embedding",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "voyage/voyage-multimodal-3",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "databricks": [
        {
            "maxTokens": 128000,
            "name": "databricks/databricks-meta-llama-3-1-405b-instruct",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00001500002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "databricks/databricks-meta-llama-3-1-70b-instruct",
            "type": "chat",
            "inputCost": 0.00000100002,
            "inputCostUnit": "token",
            "outputCost": 0.00000299999,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "databricks/meta-llama-3.3-70b-instruct",
            "type": "chat",
            "inputCost": 0.00000100002,
            "inputCostUnit": "token",
            "outputCost": 0.00000299999,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "databricks/databricks-dbrx-instruct",
            "type": "chat",
            "inputCost": 7.4998e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000224901,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "databricks/databricks-meta-llama-3-70b-instruct",
            "type": "chat",
            "inputCost": 0.00000100002,
            "inputCostUnit": "token",
            "outputCost": 0.00000299999,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "databricks/databricks-llama-2-70b-chat",
            "type": "chat",
            "inputCost": 5.0001e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "databricks/databricks-mixtral-8x7b-instruct",
            "type": "chat",
            "inputCost": 5.0001e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9902e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "databricks/databricks-mpt-30b-instruct",
            "type": "chat",
            "inputCost": 9.9902e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9902e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "databricks/databricks-mpt-7b-instruct",
            "type": "chat",
            "inputCost": 5.0001e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 512,
            "name": "databricks/databricks-bge-large-en",
            "type": "embedding",
            "inputCost": 1.0003e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "databricks/databricks-gte-large-en",
            "type": "embedding",
            "inputCost": 1.2999e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "sambanova": [
        {
            "maxTokens": 16000,
            "name": "sambanova/Meta-Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "sambanova/Meta-Llama-3.1-70B-Instruct",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16000,
            "name": "sambanova/Meta-Llama-3.1-405B-Instruct",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16000,
            "name": "sambanova/Meta-Llama-3.2-1B-Instruct",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4000,
            "name": "sambanova/Meta-Llama-3.2-3B-Instruct",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "sambanova/Qwen2.5-Coder-32B-Instruct",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "sambanova/Qwen2.5-72B-Instruct",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        }
    ]
} as const
