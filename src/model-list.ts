// Last updated: 2025-09-10T18:05:10.642Z
// Next update: 2025-09-11T00:05:10.642Z

export type AICostModelProvider = 'openai' | 'watsonx' | 'azure' | 'text-completion-openai' | 'azure_text' | 'azure_ai' | 'mistral' | 'deepseek' | 'codestral' | 'text-completion-codestral' | 'xai' | 'groq' | 'cerebras' | 'friendliai' | 'anthropic' | 'vertex-ai' | 'vertex_ai-code-chat-models' | 'meta_llama' | 'vertex_ai-anthropic_models' | 'vertex_ai-deepseek_models' | 'vertex_ai-openai_models' | 'vertex_ai-qwen_models' | 'vertex_ai-llama_models' | 'vertex_ai-mistral_models' | 'vertex_ai-ai21_models' | 'cohere_chat' | 'cohere' | 'replicate' | 'openrouter' | 'ai21' | 'nlp_cloud' | 'aleph_alpha' | 'bedrock' | 'bedrock_converse' | 'sagemaker' | 'together_ai' | 'ollama' | 'deepinfra' | 'perplexity' | 'fireworks_ai' | 'fireworks_ai-embedding-models' | 'anyscale' | 'cloudflare' | 'v0' | 'lambda_ai' | 'hyperbolic' | 'voyage' | 'databricks' | 'sambanova' | 'snowflake' | 'gradient_ai' | 'nscale' | 'featherless_ai' | 'dashscope' | 'moonshot' | 'morph' | 'heroku' | 'vercel_ai_gateway' | 'oci' | 'volcengine'

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
            "maxTokens": 32768,
            "name": "gpt-4.1",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "gpt-4.1-2025-04-14",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "gpt-4.1-mini",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "gpt-4.1-mini-2025-04-14",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "gpt-4.1-nano",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "gpt-4.1-nano-2025-04-14",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
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
            "name": "gpt-4o-search-preview-2025-03-11",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-search-preview",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4.5-preview",
            "type": "chat",
            "inputCost": 0.000075,
            "inputCostUnit": "token",
            "outputCost": 0.00015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4.5-preview-2025-02-27",
            "type": "chat",
            "inputCost": 0.000075,
            "inputCostUnit": "token",
            "outputCost": 0.00015,
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
            "name": "gpt-4o-audio-preview-2025-06-03",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-mini-audio-preview",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
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
            "name": "gpt-4o-mini-search-preview-2025-03-11",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gpt-4o-mini-search-preview",
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
            "maxTokens": 128000,
            "name": "gpt-5",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-mini",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-nano",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-chat",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-chat-latest",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-2025-08-07",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-mini-2025-08-07",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "gpt-5-nano-2025-08-07",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
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
            "name": "o3",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o3-2025-04-16",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
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
            "maxTokens": 100000,
            "name": "o4-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "o4-mini-2025-04-16",
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
            "name": "gpt-realtime",
            "type": "chat",
            "inputCost": 0.000004,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "gpt-realtime-2025-08-28",
            "type": "chat",
            "inputCost": 0.000004,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
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
            "name": "gpt-4o-realtime-preview-2025-06-03",
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
    "watsonx": [
        {
            "maxTokens": 8192,
            "name": "watsonx/ibm/granite-3-8b-instruct",
            "type": "chat",
            "inputCost": 0.0002,
            "inputCostUnit": "token",
            "outputCost": 0.0002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "watsonx/mistralai/mistral-large",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        }
    ],
    "azure": [
        {
            "maxTokens": 1024,
            "name": "computer-use-preview",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-2025-08-07",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-mini",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-mini-2025-08-07",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-nano-2025-08-07",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-nano",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-chat",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "azure/gpt-5-chat-latest",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "azure/computer-use-preview",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-audio-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-mini-audio-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1-2025-04-14",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1-mini",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1-mini-2025-04-14",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1-nano",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/gpt-4.1-nano-2025-04-14",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o3",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o3-2025-04-16",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o4-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4o-mini-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/eu/gpt-4o-mini-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 6.6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000264,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/us/gpt-4o-mini-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 6.6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000264,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4o-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/us/gpt-4o-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000055,
            "inputCostUnit": "token",
            "outputCost": 0.000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/eu/gpt-4o-realtime-preview-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000055,
            "inputCostUnit": "token",
            "outputCost": 0.000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/gpt-4o-realtime-preview-2024-10-01",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/us/gpt-4o-realtime-preview-2024-10-01",
            "type": "chat",
            "inputCost": 0.0000055,
            "inputCostUnit": "token",
            "outputCost": 0.000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure/eu/gpt-4o-realtime-preview-2024-10-01",
            "type": "chat",
            "inputCost": 0.0000055,
            "inputCostUnit": "token",
            "outputCost": 0.000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/o4-mini-2025-04-16",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
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
            "name": "azure/us/o3-mini-2025-01-31",
            "type": "chat",
            "inputCost": 0.00000121,
            "inputCostUnit": "token",
            "outputCost": 0.00000484,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/eu/o3-mini-2025-01-31",
            "type": "chat",
            "inputCost": 0.00000121,
            "inputCostUnit": "token",
            "outputCost": 0.00000484,
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
            "inputCost": 0.00000121,
            "inputCostUnit": "token",
            "outputCost": 0.00000484,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "azure/o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "azure/us/o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.00000121,
            "inputCostUnit": "token",
            "outputCost": 0.00000484,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "azure/eu/o1-mini-2024-09-12",
            "type": "chat",
            "inputCost": 0.00000121,
            "inputCostUnit": "token",
            "outputCost": 0.00000484,
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
            "maxTokens": 100000,
            "name": "azure/us/o1-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000165,
            "inputCostUnit": "token",
            "outputCost": 0.000066,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "azure/eu/o1-2024-12-17",
            "type": "chat",
            "inputCost": 0.0000165,
            "inputCostUnit": "token",
            "outputCost": 0.000066,
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
            "maxTokens": 32768,
            "name": "azure/us/o1-preview-2024-09-12",
            "type": "chat",
            "inputCost": 0.0000165,
            "inputCostUnit": "token",
            "outputCost": 0.000066,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "azure/eu/o1-preview-2024-09-12",
            "type": "chat",
            "inputCost": 0.0000165,
            "inputCostUnit": "token",
            "outputCost": 0.000066,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4.5-preview",
            "type": "chat",
            "inputCost": 0.000075,
            "inputCostUnit": "token",
            "outputCost": 0.00015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/global/gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/global/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
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
            "maxTokens": 16384,
            "name": "azure/us/gpt-4o-2024-11-20",
            "type": "chat",
            "inputCost": 0.00000275,
            "inputCostUnit": "token",
            "outputCost": 0.000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/eu/gpt-4o-2024-11-20",
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
            "name": "azure/us/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.00000275,
            "inputCostUnit": "token",
            "outputCost": 0.000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/eu/gpt-4o-2024-08-06",
            "type": "chat",
            "inputCost": 0.00000275,
            "inputCostUnit": "token",
            "outputCost": 0.000011,
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
            "maxTokens": 16384,
            "name": "azure/us/gpt-4o-mini-2024-07-18",
            "type": "chat",
            "inputCost": 1.65e-7,
            "inputCostUnit": "token",
            "outputCost": 6.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure/eu/gpt-4o-mini-2024-07-18",
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
            "maxTokens": 131072,
            "name": "azure_ai/grok-3",
            "type": "chat",
            "inputCost": 0.0000033,
            "inputCostUnit": "token",
            "outputCost": 0.0000165,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "azure_ai/global/grok-3",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "azure_ai/global/grok-3-mini",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000127,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "azure_ai/grok-3-mini",
            "type": "chat",
            "inputCost": 2.75e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000138,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "azure_ai/deepseek-r1",
            "type": "chat",
            "inputCost": 0.00000135,
            "inputCostUnit": "token",
            "outputCost": 0.0000054,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "azure_ai/deepseek-v3",
            "type": "chat",
            "inputCost": 0.00000114,
            "inputCostUnit": "token",
            "outputCost": 0.00000456,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "azure_ai/deepseek-v3-0324",
            "type": "chat",
            "inputCost": 0.00000114,
            "inputCostUnit": "token",
            "outputCost": 0.00000456,
            "outputCostUnit": "token"
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
            "maxTokens": 8192,
            "name": "azure_ai/jais-30b-chat",
            "type": "chat",
            "inputCost": 0.0032,
            "inputCostUnit": "token",
            "outputCost": 0.00971,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/mistral-nemo",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "azure_ai/mistral-medium-2505",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
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
            "maxTokens": 128000,
            "name": "azure_ai/mistral-small-2503",
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
            "name": "azure_ai/mistral-large-latest",
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
            "maxTokens": 16384,
            "name": "azure_ai/Llama-4-Scout-17B-16E-Instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure_ai/Llama-4-Maverick-17B-128E-Instruct-FP8",
            "type": "chat",
            "inputCost": 0.00000141,
            "inputCostUnit": "token",
            "outputCost": 3.5e-7,
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
            "name": "azure_ai/Phi-4-mini-instruct",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "azure_ai/Phi-4-multimodal-instruct",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 3.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "azure_ai/Phi-4",
            "type": "chat",
            "inputCost": 1.25e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
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
        },
        {
            "maxTokens": 128000,
            "name": "azure_ai/embed-v-4-0",
            "type": "embedding",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
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
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-small-latest",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
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
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8191,
            "name": "mistral/mistral-medium-2505",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
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
            "maxTokens": 128000,
            "name": "mistral/devstral-small-2505",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/devstral-small-2507",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "mistral/devstral-medium-2507",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40000,
            "name": "mistral/magistral-medium-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40000,
            "name": "mistral/magistral-medium-2506",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40000,
            "name": "mistral/magistral-small-latest",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40000,
            "name": "mistral/magistral-small-2506",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
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
            "maxTokens": 8192,
            "name": "deepseek/deepseek-r1",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "deepseek/deepseek-v3",
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
            "maxTokens": 131072,
            "name": "xai/grok-3",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-latest",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-beta",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-fast-beta",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-fast-latest",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini-latest",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini-fast",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini-fast-latest",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini-beta",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "xai/grok-3-mini-fast-beta",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
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
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-code-fast-1",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-code-fast",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-code-fast-1-0825",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-4-0709",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "xai/grok-4-latest",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        }
    ],
    "groq": [
        {
            "maxTokens": 128000,
            "name": "groq/deepseek-r1-distill-llama-70b",
            "type": "chat",
            "inputCost": 7.5e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
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
            "maxTokens": 8192,
            "name": "groq/llama-guard-3-8b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
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
            "maxTokens": 8192,
            "name": "groq/meta-llama/llama-4-scout-17b-16e-instruct",
            "type": "chat",
            "inputCost": 1.1e-7,
            "inputCostUnit": "token",
            "outputCost": 3.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "groq/meta-llama/llama-4-maverick-17b-128e-instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "groq/mistral-saba-24b",
            "type": "chat",
            "inputCost": 7.9e-7,
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
        },
        {
            "maxTokens": 131000,
            "name": "groq/qwen/qwen3-32b",
            "type": "chat",
            "inputCost": 2.9e-7,
            "inputCostUnit": "token",
            "outputCost": 5.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "groq/moonshotai/kimi-k2-instruct",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "groq/openai/gpt-oss-20b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32766,
            "name": "groq/openai/gpt-oss-120b",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7.5e-7,
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
        },
        {
            "maxTokens": 128000,
            "name": "cerebras/llama-3.3-70b",
            "type": "chat",
            "inputCost": 8.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "cerebras/qwen-3-32b",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "cerebras/openai/gpt-oss-120b",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6.9e-7,
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
    "anthropic": [
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
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "claude-3-5-haiku-latest",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "claude-3-opus-latest",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
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
            "maxTokens": 8192,
            "name": "claude-3-5-sonnet-latest",
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
            "maxTokens": 32000,
            "name": "claude-opus-4-20250514",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "claude-opus-4-1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "claude-opus-4-1-20250805",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "claude-sonnet-4-20250514",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "claude-4-opus-20250514",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "claude-4-sonnet-20250514",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "claude-3-7-sonnet-latest",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "claude-3-7-sonnet-20250219",
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
            "maxTokens": 65535,
            "name": "gemini-2.5-pro-exp-03-25",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-pro-exp-02-05",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash-exp",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
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
            "maxTokens": 65535,
            "name": "gemini-2.5-pro",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash-image-preview",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash-preview-05-20",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash-preview-04-17",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash-lite-preview-06-17",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-flash-lite",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "gemini-2.0-flash-lite",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "gemini-2.0-flash-lite-001",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-pro-preview-06-05",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-pro-preview-05-06",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-pro-preview-03-25",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "gemini-2.0-flash-preview-image-generation",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.5-pro-preview-tts",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65535,
            "name": "gemini-2.0-flash-live-preview-04-09",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
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
            "name": "gemini-embedding-001",
            "type": "embedding",
            "inputCost": 1.5e-7,
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
            "maxTokens": 2048,
            "name": "multimodalembedding",
            "type": "embedding",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "multimodalembedding@001",
            "type": "embedding",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "text-embedding-large-exp-03-07",
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
    "meta_llama": [
        {
            "maxTokens": 128000,
            "name": "meta_llama/Llama-4-Scout-17B-16E-Instruct-FP8",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "meta_llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "meta_llama/Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "meta_llama/Llama-3.3-8B-Instruct",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "vertex_ai-anthropic_models": [
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-opus-4-1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "vertex_ai/claude-opus-4-1@20250805",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
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
            "maxTokens": 8192,
            "name": "vertex_ai/claude-3-7-sonnet@20250219",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "vertex_ai/claude-opus-4",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "vertex_ai/claude-opus-4@20250514",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "vertex_ai/claude-sonnet-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "vertex_ai/claude-sonnet-4@20250514",
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
    "vertex_ai-deepseek_models": [
        {
            "maxTokens": 8192,
            "name": "vertex_ai/deepseek-ai/deepseek-r1-0528-maas",
            "type": "chat",
            "inputCost": 0.00000135,
            "inputCostUnit": "token",
            "outputCost": 0.0000054,
            "outputCostUnit": "token"
        }
    ],
    "vertex_ai-openai_models": [
        {
            "maxTokens": 32768,
            "name": "vertex_ai/openai/gpt-oss-20b-maas",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "vertex_ai/openai/gpt-oss-120b-maas",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        }
    ],
    "vertex_ai-qwen_models": [
        {
            "maxTokens": 32768,
            "name": "vertex_ai/qwen/qwen3-coder-480b-a35b-instruct-maas",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "vertex_ai/qwen/qwen3-235b-a22b-instruct-2507-maas",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
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
            "maxTokens": 10000000,
            "name": "vertex_ai/meta/llama-4-scout-17b-16e-instruct-maas",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000000,
            "name": "vertex_ai/meta/llama-4-scout-17b-128e-instruct-maas",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "vertex_ai/meta/llama-4-maverick-17b-128e-instruct-maas",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000115,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "vertex_ai/meta/llama-4-maverick-17b-16e-instruct-maas",
            "type": "chat",
            "inputCost": 3.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000115,
            "outputCostUnit": "token"
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
            "name": "vertex_ai/meta/llama-3.1-8b-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/meta/llama-3.1-70b-instruct-maas",
            "type": "chat",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/meta/llama-3.1-405b-instruct-maas",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000016,
            "outputCostUnit": "token"
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
            "maxTokens": 8191,
            "name": "vertex_ai/mistral-small-2503@001",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vertex_ai/mistral-small-2503",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
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
            "maxTokens": 8000,
            "name": "command-a-03-2025",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
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
            "name": "openrouter/deepseek/deepseek-r1-0528",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000215,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/deepseek/deepseek-chat-v3.1",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "openrouter/x-ai/grok-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "openrouter/bytedance/ui-tars-1.5-7b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
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
            "name": "openrouter/deepseek/deepseek-chat-v3-0324",
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
            "name": "openrouter/google/gemini-2.5-pro",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
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
            "maxTokens": 8192,
            "name": "openrouter/google/gemini-2.0-flash-001",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/google/gemini-2.5-flash",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
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
            "maxTokens": 128000,
            "name": "openrouter/anthropic/claude-3.7-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openrouter/anthropic/claude-3.7-sonnet:beta",
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
            "maxTokens": 64000,
            "name": "openrouter/anthropic/claude-sonnet-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "openrouter/anthropic/claude-opus-4",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "openrouter/anthropic/claude-opus-4.1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
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
            "maxTokens": 32000,
            "name": "openrouter/mistralai/mistral-small-3.1-24b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "openrouter/mistralai/mistral-small-3.2-24b-instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
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
            "maxTokens": 65536,
            "name": "openrouter/openai/o3-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "openrouter/openai/o3-mini-high",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "openrouter/openai/gpt-4o",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
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
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1-2025-04-14",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1-mini",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1-mini-2025-04-14",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1-nano",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-4.1-nano-2025-04-14",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openrouter/openai/gpt-5-mini",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openrouter/openai/gpt-5-nano",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openrouter/openai/gpt-5-chat",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-oss-20b",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "openrouter/openai/gpt-oss-120b",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
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
        },
        {
            "maxTokens": 8192,
            "name": "openrouter/qwen/qwen-vl-plus",
            "type": "chat",
            "inputCost": 2.1e-7,
            "inputCostUnit": "token",
            "outputCost": 6.3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "openrouter/qwen/qwen3-coder",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "openrouter/switchpoint/router",
            "type": "chat",
            "inputCost": 8.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000034,
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
            "maxTokens": 256000,
            "name": "jamba-large-1.6",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-large-1.7",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-mini-1.6",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "jamba-mini-1.7",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
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
            "name": "bedrock/invoke/anthropic.claude-3-5-sonnet-20240620-v1:0",
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
            "maxTokens": 8192,
            "name": "eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
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
            "maxTokens": 4096,
            "name": "apac.anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "apac.anthropic.claude-3-sonnet-20240229-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "apac.anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "apac.anthropic.claude-3-5-sonnet-20241022-v2:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
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
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-east-1/amazon.titan-embed-text-v1",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-east-1/amazon.titan-embed-text-v2:0",
            "type": "embedding",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "bedrock/us-gov-east-1/amazon.titan-text-express-v1",
            "type": "chat",
            "inputCost": 0.0000013,
            "inputCostUnit": "token",
            "outputCost": 0.0000017,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4000,
            "name": "bedrock/us-gov-east-1/amazon.titan-text-lite-v1",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "bedrock/us-gov-east-1/amazon.titan-text-premier-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-east-1/anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.0000036,
            "inputCostUnit": "token",
            "outputCost": 0.000018,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/us-gov-east-1/anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "bedrock/us-gov-east-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000265,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "bedrock/us-gov-east-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000265,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-west-1/amazon.titan-embed-text-v1",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-west-1/amazon.titan-embed-text-v2:0",
            "type": "embedding",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "bedrock/us-gov-west-1/amazon.titan-text-express-v1",
            "type": "chat",
            "inputCost": 0.0000013,
            "inputCostUnit": "token",
            "outputCost": 0.0000017,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4000,
            "name": "bedrock/us-gov-west-1/amazon.titan-text-lite-v1",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "bedrock/us-gov-west-1/amazon.titan-text-premier-v1:0",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "bedrock/us-gov-west-1/anthropic.claude-3-5-sonnet-20240620-v1:0",
            "type": "chat",
            "inputCost": 0.0000036,
            "inputCostUnit": "token",
            "outputCost": 0.000018,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "bedrock/us-gov-west-1/anthropic.claude-3-haiku-20240307-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "bedrock/us-gov-west-1/meta.llama3-70b-instruct-v1:0",
            "type": "chat",
            "inputCost": 0.00000265,
            "inputCostUnit": "token",
            "outputCost": 0.0000035,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "bedrock/us-gov-west-1/meta.llama3-8b-instruct-v1:0",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000265,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "bedrock/us-gov-east-1/amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 9.6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000384,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "bedrock/us-gov-west-1/amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 9.6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000384,
            "outputCostUnit": "token"
        }
    ],
    "bedrock_converse": [
        {
            "maxTokens": 128000,
            "name": "eu.mistral.pixtral-large-2502-v1:0",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "us.mistral.pixtral-large-2502-v1:0",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 3.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "us.amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 3.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "eu.amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 4.6e-8,
            "inputCostUnit": "token",
            "outputCost": 1.84e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "us.amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "eu.amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 7.8e-8,
            "inputCostUnit": "token",
            "outputCost": 3.12e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000032,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "us.amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000032,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "eu.amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 0.00000105,
            "inputCostUnit": "token",
            "outputCost": 0.0000042,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "apac.amazon.nova-micro-v1:0",
            "type": "chat",
            "inputCost": 3.7e-8,
            "inputCostUnit": "token",
            "outputCost": 1.48e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "apac.amazon.nova-lite-v1:0",
            "type": "chat",
            "inputCost": 6.3e-8,
            "inputCostUnit": "token",
            "outputCost": 2.52e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "apac.amazon.nova-pro-v1:0",
            "type": "chat",
            "inputCost": 8.4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000336,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 10000,
            "name": "us.amazon.nova-premier-v1:0",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.0000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openai.gpt-oss-20b-1:0",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "openai.gpt-oss-120b-1:0",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "anthropic.claude-opus-4-1-20250805-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "anthropic.claude-opus-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "anthropic.claude-sonnet-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "anthropic.claude-3-7-sonnet-20250219-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "us.anthropic.claude-opus-4-1-20250805-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "us.anthropic.claude-opus-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "us.anthropic.claude-sonnet-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "eu.anthropic.claude-opus-4-1-20250805-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "eu.anthropic.claude-opus-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "eu.anthropic.claude-sonnet-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 64000,
            "name": "apac.anthropic.claude-sonnet-4-20250514-v1:0",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.deepseek.r1-v1:0",
            "type": "chat",
            "inputCost": 0.00000135,
            "inputCostUnit": "token",
            "outputCost": 0.0000054,
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
        },
        {
            "maxTokens": 4096,
            "name": "meta.llama4-maverick-17b-instruct-v1:0",
            "type": "chat",
            "inputCost": 2.4e-7,
            "inputCostUnit": "token",
            "outputCost": 9.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.meta.llama4-maverick-17b-instruct-v1:0",
            "type": "chat",
            "inputCost": 2.4e-7,
            "inputCostUnit": "token",
            "outputCost": 9.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "meta.llama4-scout-17b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.7e-7,
            "inputCostUnit": "token",
            "outputCost": 6.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "us.meta.llama4-scout-17b-instruct-v1:0",
            "type": "chat",
            "inputCost": 1.7e-7,
            "inputCostUnit": "token",
            "outputCost": 6.6e-7,
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
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 8.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Llama-4-Scout-17B-16E-Instruct",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 5.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/meta-llama/Llama-3.2-3B-Instruct-Turbo",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen2.5-7B-Instruct-Turbo",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen2.5-72B-Instruct-Turbo",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen3-235B-A22B-Instruct-2507-tput",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen3-235B-A22B-Thinking-2507",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/Qwen/Qwen3-235B-A22B-fp8-tput",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "together_ai/deepseek-ai/DeepSeek-V3",
            "type": "chat",
            "inputCost": 0.00000125,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 20480,
            "name": "together_ai/deepseek-ai/DeepSeek-R1",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000007,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/deepseek-ai/DeepSeek-R1-0528-tput",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/mistralai/Mistral-Small-24B-Instruct-2501",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": null,
            "name": "together_ai/moonshotai/Kimi-K2-Instruct",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/openai/gpt-oss-120b",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/openai/gpt-oss-20b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "together_ai/zai-org/GLM-4.5-Air-FP8",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "together_ai/deepseek-ai/DeepSeek-V3.1",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000017,
            "outputCostUnit": "token"
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
            "name": "deepinfra/Gryphe/MythoMax-L2-13b",
            "type": "chat",
            "inputCost": 7.2e-8,
            "inputCostUnit": "token",
            "outputCost": 7.2e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/NousResearch/Hermes-3-Llama-3.1-405B",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/NousResearch/Hermes-3-Llama-3.1-70B",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/Qwen/QwQ-32B",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/Qwen/Qwen2.5-72B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/Qwen/Qwen2.5-7B-Instruct",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "deepinfra/Qwen/Qwen2.5-VL-32B-Instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "deepinfra/Qwen/Qwen3-14B",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "deepinfra/Qwen/Qwen3-235B-A22B",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 262144,
            "name": "deepinfra/Qwen/Qwen3-235B-A22B-Instruct-2507",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 262144,
            "name": "deepinfra/Qwen/Qwen3-235B-A22B-Thinking-2507",
            "type": "chat",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "deepinfra/Qwen/Qwen3-30B-A3B",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 2.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "deepinfra/Qwen/Qwen3-32B",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 262144,
            "name": "deepinfra/Qwen/Qwen3-Coder-480B-A35B-Instruct",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 262144,
            "name": "deepinfra/Qwen/Qwen3-Coder-480B-A35B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "deepinfra/Sao10K/L3-8B-Lunaris-v1-Turbo",
            "type": "chat",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/Sao10K/L3.1-70B-Euryale-v2.2",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/Sao10K/L3.3-70B-Euryale-v2.3",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 7.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "deepinfra/allenai/olmOCR-7B-0725-FP8",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "deepinfra/anthropic/claude-3-7-sonnet-latest",
            "type": "chat",
            "inputCost": 0.0000033,
            "inputCostUnit": "token",
            "outputCost": 0.0000165,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "deepinfra/anthropic/claude-4-opus",
            "type": "chat",
            "inputCost": 0.0000165,
            "inputCostUnit": "token",
            "outputCost": 0.0000825,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "deepinfra/anthropic/claude-4-sonnet",
            "type": "chat",
            "inputCost": 0.0000033,
            "inputCostUnit": "token",
            "outputCost": 0.0000165,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000024,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1-0528",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000215,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1-0528-Turbo",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "deepinfra/deepseek-ai/DeepSeek-R1-Turbo",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/deepseek-ai/DeepSeek-V3",
            "type": "chat",
            "inputCost": 3.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/deepseek-ai/DeepSeek-V3-0324",
            "type": "chat",
            "inputCost": 2.8e-7,
            "inputCostUnit": "token",
            "outputCost": 8.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/deepseek-ai/DeepSeek-V3.1",
            "type": "chat",
            "inputCost": 2.7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "deepinfra/google/gemini-2.0-flash-001",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "deepinfra/google/gemini-2.5-flash",
            "type": "chat",
            "inputCost": 2.1e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000175,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "deepinfra/google/gemini-2.5-pro",
            "type": "chat",
            "inputCost": 8.75e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000007,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/google/gemma-3-12b-it",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/google/gemma-3-27b-it",
            "type": "chat",
            "inputCost": 9e-8,
            "inputCostUnit": "token",
            "outputCost": 1.7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/google/gemma-3-4b-it",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Llama-3.2-11B-Vision-Instruct",
            "type": "chat",
            "inputCost": 4.9e-8,
            "inputCostUnit": "token",
            "outputCost": 4.9e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Llama-3.2-3B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": 2.3e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Llama-3.3-70B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 3.8e-8,
            "inputCostUnit": "token",
            "outputCost": 1.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1048576,
            "name": "deepinfra/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 327680,
            "name": "deepinfra/meta-llama/Llama-4-Scout-17B-16E-Instruct",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Llama-Guard-3-8B",
            "type": "chat",
            "inputCost": 5.5e-8,
            "inputCostUnit": "token",
            "outputCost": 5.5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 163840,
            "name": "deepinfra/meta-llama/Llama-Guard-4-12B",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 1.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "deepinfra/meta-llama/Meta-Llama-3-8B-Instruct",
            "type": "chat",
            "inputCost": 3e-8,
            "inputCostUnit": "token",
            "outputCost": 6e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Meta-Llama-3.1-70B-Instruct",
            "type": "chat",
            "inputCost": 2.3e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Meta-Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 3e-8,
            "inputCostUnit": "token",
            "outputCost": 5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
            "type": "chat",
            "inputCost": 1.5e-8,
            "inputCostUnit": "token",
            "outputCost": 2e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "deepinfra/microsoft/WizardLM-2-8x22B",
            "type": "chat",
            "inputCost": 4.8e-7,
            "inputCostUnit": "token",
            "outputCost": 4.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "deepinfra/microsoft/phi-4",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/mistralai/Mistral-Nemo-Instruct-2407",
            "type": "chat",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/mistralai/Mistral-Small-24B-Instruct-2501",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "deepinfra/mistralai/Mistral-Small-3.2-24B-Instruct-2506",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "deepinfra/mistralai/Mixtral-8x7B-Instruct-v0.1",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/moonshotai/Kimi-K2-Instruct",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/nvidia/Llama-3.1-Nemotron-70B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/openai/gpt-oss-120b",
            "type": "chat",
            "inputCost": 9e-8,
            "inputCostUnit": "token",
            "outputCost": 4.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/openai/gpt-oss-20b",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 1.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/zai-org/GLM-4.5",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "deepinfra/zai-org/GLM-4.5-Air",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000011,
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
        },
        {
            "maxTokens": 128000,
            "name": "perplexity/sonar",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "perplexity/sonar-pro",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "perplexity/sonar-reasoning",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "perplexity/sonar-reasoning-pro",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "perplexity/sonar-deep-research",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
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
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p2-90b-vision-instruct",
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
        },
        {
            "maxTokens": 163840,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-v3-0324",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 20480,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 20480,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1-basic",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 160000,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-r1-0528",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "fireworks_ai/accounts/fireworks/models/deepseek-v3p1",
            "type": "chat",
            "inputCost": 5.6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000168,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "fireworks_ai/accounts/fireworks/models/kimi-k2-instruct",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "fireworks_ai/accounts/fireworks/models/llama-v3p1-405b-instruct",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "fireworks_ai/accounts/fireworks/models/llama4-maverick-instruct-basic",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 8.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "fireworks_ai/accounts/fireworks/models/llama4-scout-instruct-basic",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 96000,
            "name": "fireworks_ai/accounts/fireworks/models/glm-4p5",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 96000,
            "name": "fireworks_ai/accounts/fireworks/models/glm-4p5-air",
            "type": "chat",
            "inputCost": 2.2e-7,
            "inputCostUnit": "token",
            "outputCost": 8.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "fireworks_ai/accounts/fireworks/models/gpt-oss-120b",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "fireworks_ai/accounts/fireworks/models/gpt-oss-20b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
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
    "v0": [
        {
            "maxTokens": 128000,
            "name": "v0/v0-1.0-md",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "v0/v0-1.5-md",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 512000,
            "name": "v0/v0-1.5-lg",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        }
    ],
    "lambda_ai": [
        {
            "maxTokens": 131072,
            "name": "lambda_ai/deepseek-llama3.3-70b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/deepseek-r1-0528",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/deepseek-r1-671b",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/deepseek-v3-0324",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/hermes3-405b",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/hermes3-70b",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/hermes3-8b",
            "type": "chat",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/lfm-40b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/lfm-7b",
            "type": "chat",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama-4-maverick-17b-128e-instruct-fp8",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "lambda_ai/llama-4-scout-17b-16e-instruct",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.1-405b-instruct-fp8",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.1-70b-instruct-fp8",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.1-8b-instruct",
            "type": "chat",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.1-nemotron-70b-instruct-fp8",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.2-11b-vision-instruct",
            "type": "chat",
            "inputCost": 1.5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.2-3b-instruct",
            "type": "chat",
            "inputCost": 1.5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/llama3.3-70b-instruct-fp8",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/qwen25-coder-32b-instruct",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "lambda_ai/qwen3-32b-fp8",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        }
    ],
    "hyperbolic": [
        {
            "maxTokens": 131072,
            "name": "hyperbolic/moonshotai/Kimi-K2-Instruct",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/deepseek-ai/DeepSeek-R1-0528",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 2.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/Qwen/Qwen3-235B-A22B",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/deepseek-ai/DeepSeek-V3-0324",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/Qwen/QwQ-32B",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/deepseek-ai/DeepSeek-R1",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/deepseek-ai/DeepSeek-V3",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/meta-llama/Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/Qwen/Qwen2.5-Coder-32B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/meta-llama/Llama-3.2-3B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/Qwen/Qwen2.5-72B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "hyperbolic/meta-llama/Meta-Llama-3-70B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/NousResearch/Hermes-3-Llama-3.1-70B",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/meta-llama/Meta-Llama-3.1-405B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/meta-llama/Meta-Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "hyperbolic/meta-llama/Meta-Llama-3.1-70B-Instruct",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        }
    ],
    "voyage": [
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
        },
        {
            "maxTokens": 120000,
            "name": "voyage/voyage-context-3",
            "type": "embedding",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        }
    ],
    "databricks": [
        {
            "maxTokens": 200000,
            "name": "databricks/databricks-claude-3-7-sonnet",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.000017857,
            "outputCostUnit": "token"
        },
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
            "name": "databricks/databricks-meta-llama-3-3-70b-instruct",
            "type": "chat",
            "inputCost": 0.00000100002,
            "inputCostUnit": "token",
            "outputCost": 0.00000299999,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "databricks/databricks-llama-4-maverick",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
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
            "maxTokens": 16384,
            "name": "sambanova/Meta-Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "sambanova/Meta-Llama-3.1-405B-Instruct",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "sambanova/Meta-Llama-3.2-1B-Instruct",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "sambanova/Meta-Llama-3.2-3B-Instruct",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 1.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "sambanova/Llama-4-Maverick-17B-128E-Instruct",
            "type": "chat",
            "inputCost": 6.3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000018,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "sambanova/Llama-4-Scout-17B-16E-Instruct",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 7e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "sambanova/Meta-Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "sambanova/Meta-Llama-Guard-3-8B",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "sambanova/Qwen3-32B",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "sambanova/QwQ-32B",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 4096,
            "name": "sambanova/Qwen2-Audio-7B-Instruct",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "sambanova/DeepSeek-R1-Distill-Llama-70B",
            "type": "chat",
            "inputCost": 7e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000014,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "sambanova/DeepSeek-R1",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000007,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "sambanova/DeepSeek-V3-0324",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.0000045,
            "outputCostUnit": "token"
        }
    ],
    "snowflake": [
        {
            "maxTokens": 32768,
            "name": "snowflake/deepseek-r1",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "snowflake/snowflake-arctic",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 18000,
            "name": "snowflake/claude-3-5-sonnet",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "snowflake/mistral-large",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/mistral-large2",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 100000,
            "name": "snowflake/reka-flash",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "snowflake/reka-core",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 256000,
            "name": "snowflake/jamba-instruct",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 256000,
            "name": "snowflake/jamba-1.5-mini",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 256000,
            "name": "snowflake/jamba-1.5-large",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "snowflake/mixtral-8x7b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "snowflake/llama2-70b-chat",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "snowflake/llama3-8b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "snowflake/llama3-70b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.1-8b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.1-70b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.3-70b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "snowflake/snowflake-llama-3.3-70b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.1-405b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "snowflake/snowflake-llama-3.1-405b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.2-1b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "snowflake/llama3.2-3b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32000,
            "name": "snowflake/mistral-7b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8000,
            "name": "snowflake/gemma-7b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "gradient_ai": [
        {
            "maxTokens": 1024,
            "name": "gradient_ai/anthropic-claude-3.7-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "gradient_ai/anthropic-claude-3.5-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "gradient_ai/anthropic-claude-3.5-haiku",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1024,
            "name": "gradient_ai/anthropic-claude-3-opus",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8000,
            "name": "gradient_ai/deepseek-r1-distill-llama-70b",
            "type": "chat",
            "inputCost": 9.9e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 2048,
            "name": "gradient_ai/llama3.3-70b-instruct",
            "type": "chat",
            "inputCost": 6.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 512,
            "name": "gradient_ai/llama3-8b-instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 512,
            "name": "gradient_ai/mistral-nemo-instruct-2407",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "gradient_ai/openai-o3",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 100000,
            "name": "gradient_ai/openai-o3-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16384,
            "name": "gradient_ai/openai-gpt-4o",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 16384,
            "name": "gradient_ai/openai-gpt-4o-mini",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 2048,
            "name": "gradient_ai/alibaba-qwen3-32b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "nscale": [
        {
            "maxTokens": null,
            "name": "nscale/meta-llama/Llama-4-Scout-17B-16E-Instruct",
            "type": "chat",
            "inputCost": 9e-8,
            "inputCostUnit": "token",
            "outputCost": 2.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/Qwen/Qwen2.5-Coder-3B-Instruct",
            "type": "chat",
            "inputCost": 1e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/Qwen/Qwen2.5-Coder-7B-Instruct",
            "type": "chat",
            "inputCost": 1e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/Qwen/Qwen2.5-Coder-32B-Instruct",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/Qwen/QwQ-32B",
            "type": "chat",
            "inputCost": 1.8e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
            "type": "chat",
            "inputCost": 3.75e-7,
            "inputCostUnit": "token",
            "outputCost": 3.75e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
            "type": "chat",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 2.5e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
            "type": "chat",
            "inputCost": 9e-8,
            "inputCostUnit": "token",
            "outputCost": 9e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 7e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/mistralai/mixtral-8x22b-instruct-v0.1",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/meta-llama/Llama-3.1-8B-Instruct",
            "type": "chat",
            "inputCost": 3e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": null,
            "name": "nscale/meta-llama/Llama-3.3-70B-Instruct",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        }
    ],
    "featherless_ai": [
        {
            "maxTokens": 32768,
            "name": "featherless_ai/featherless-ai/Qwerky-72B",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "featherless_ai/featherless-ai/Qwerky-QwQ-32B",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "dashscope": [
        {
            "maxTokens": 32768,
            "name": "dashscope/qwen-max",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 131072,
            "name": "dashscope/qwen-plus-latest",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 131072,
            "name": "dashscope/qwen-turbo-latest",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 131072,
            "name": "dashscope/qwen3-30b-a3b",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "moonshot": [
        {
            "maxTokens": 8192,
            "name": "moonshot/moonshot-v1-8k",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "moonshot/moonshot-v1-32k",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/moonshot-v1-128k",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/moonshot-v1-auto",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/kimi-k2-0711-preview",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "moonshot/moonshot-v1-32k-0430",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/moonshot-v1-128k-0430",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "moonshot/moonshot-v1-8k-0430",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/kimi-latest",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "moonshot/kimi-latest-8k",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "moonshot/kimi-latest-32k",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/kimi-latest-128k",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/kimi-thinking-preview",
            "type": "chat",
            "inputCost": 0.00003,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "moonshot/moonshot-v1-8k-vision-preview",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "moonshot/moonshot-v1-32k-vision-preview",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "moonshot/moonshot-v1-128k-vision-preview",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        }
    ],
    "morph": [
        {
            "maxTokens": 16000,
            "name": "morph/morph-v3-fast",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16000,
            "name": "morph/morph-v3-large",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000019,
            "outputCostUnit": "token"
        }
    ],
    "heroku": [
        {
            "maxTokens": 8192,
            "name": "heroku/claude-4-sonnet",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "heroku/claude-3-7-sonnet",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 8192,
            "name": "heroku/claude-3-5-sonnet-latest",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "heroku/claude-3-5-haiku",
            "type": "chat",
            "inputCost": null,
            "inputCostUnit": null,
            "outputCost": null,
            "outputCostUnit": null
        }
    ],
    "vercel_ai_gateway": [
        {
            "maxTokens": 262144,
            "name": "vercel_ai_gateway/alibaba/qwen3-coder",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/mistral/codestral-embed",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1048576,
            "name": "vercel_ai_gateway/google/gemini-2.5-pro",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/deepseek/deepseek-v3",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 300000,
            "name": "vercel_ai_gateway/amazon/nova-lite",
            "type": "chat",
            "inputCost": 6e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/meta/llama-4-scout",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.2-1b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "vercel_ai_gateway/mistral/mistral-small",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1000000,
            "name": "vercel_ai_gateway/google/gemini-2.5-flash",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "vercel_ai_gateway/inception/mercury-coder-small",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/openai/text-embedding-3-small",
            "type": "embedding",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 32768,
            "name": "vercel_ai_gateway/xai/grok-2-vision",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/xai/grok-2",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/deepseek/deepseek-r1-distill-llama-70b",
            "type": "chat",
            "inputCost": 7.5e-7,
            "inputCostUnit": "token",
            "outputCost": 9.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.1-70b",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/xai/grok-3",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "vercel_ai_gateway/alibaba/qwen-3-235b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/xai/grok-3-fast",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/vercel/v0-1.5-md",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/openai/o4-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/magistral-medium",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/amazon/titan-embed-text-v2",
            "type": "chat",
            "inputCost": 2e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 40960,
            "name": "vercel_ai_gateway/alibaba/qwen-3-30b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/zai/glm-4.5-air",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000011,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/openai/gpt-4-turbo",
            "type": "chat",
            "inputCost": 0.00001,
            "inputCostUnit": "token",
            "outputCost": 0.00003,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32000,
            "name": "vercel_ai_gateway/mistral/mistral-large",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/perplexity/sonar-pro",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.2-90b",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vercel_ai_gateway/meta/llama-3-8b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/google/text-embedding-005",
            "type": "embedding",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/pixtral-large",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-3.5-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/amazon/nova-micro",
            "type": "chat",
            "inputCost": 3.5e-8,
            "inputCostUnit": "token",
            "outputCost": 1.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/cohere/command-r",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "vercel_ai_gateway/morph/morph-v3-large",
            "type": "chat",
            "inputCost": 9e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000019,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 65536,
            "name": "vercel_ai_gateway/mistral/mixtral-8x22b-instruct",
            "type": "chat",
            "inputCost": 0.0000012,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vercel_ai_gateway/xai/grok-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131000,
            "name": "vercel_ai_gateway/meta/llama-3.1-8b",
            "type": "chat",
            "inputCost": 5e-8,
            "inputCostUnit": "token",
            "outputCost": 8e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-3-opus",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/zai/glm-4.5",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/openai/gpt-4o",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/openai/o3-mini",
            "type": "chat",
            "inputCost": 0.0000011,
            "inputCostUnit": "token",
            "outputCost": 0.0000044,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/ministral-8b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 1e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/openai/o3",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/vercel/v0-1.0-md",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/google/text-multilingual-embedding-002",
            "type": "embedding",
            "inputCost": 2.5e-8,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 300000,
            "name": "vercel_ai_gateway/amazon/nova-pro",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000032,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "vercel_ai_gateway/morph/morph-v3-fast",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000012,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 16385,
            "name": "vercel_ai_gateway/openai/gpt-3.5-turbo",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vercel_ai_gateway/mistral/codestral",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.2-11b",
            "type": "chat",
            "inputCost": 1.6e-7,
            "inputCostUnit": "token",
            "outputCost": 1.6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vercel_ai_gateway/meta/llama-3-70b",
            "type": "chat",
            "inputCost": 5.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/xai/grok-3-mini-fast",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/openai/text-embedding-3-large",
            "type": "embedding",
            "inputCost": 1.3e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1048576,
            "name": "vercel_ai_gateway/google/gemini-2.0-flash-lite",
            "type": "chat",
            "inputCost": 7.5e-8,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/ministral-3b",
            "type": "chat",
            "inputCost": 4e-8,
            "inputCostUnit": "token",
            "outputCost": 4e-8,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127000,
            "name": "vercel_ai_gateway/perplexity/sonar-reasoning-pro",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/google/gemini-embedding-001",
            "type": "embedding",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-3-haiku",
            "type": "chat",
            "inputCost": 2.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000125,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/openai/o1",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.00006,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/deepseek/deepseek-r1",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.00000219,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/mistral/mistral-embed",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 1047576,
            "name": "vercel_ai_gateway/openai/gpt-4.1-mini",
            "type": "chat",
            "inputCost": 4e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000016,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/openai/gpt-4o-mini",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "vercel_ai_gateway/alibaba/qwen-3-14b",
            "type": "chat",
            "inputCost": 8e-8,
            "inputCostUnit": "token",
            "outputCost": 2.4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-4-opus",
            "type": "chat",
            "inputCost": 0.000015,
            "inputCostUnit": "token",
            "outputCost": 0.000075,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 32768,
            "name": "vercel_ai_gateway/mistral/mistral-saba-24b",
            "type": "chat",
            "inputCost": 7.9e-7,
            "inputCostUnit": "token",
            "outputCost": 7.9e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127000,
            "name": "vercel_ai_gateway/perplexity/sonar-reasoning",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000005,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-3.5-haiku",
            "type": "chat",
            "inputCost": 8e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 256000,
            "name": "vercel_ai_gateway/cohere/command-a",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vercel_ai_gateway/google/gemma-2-9b",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.2-3b",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1047576,
            "name": "vercel_ai_gateway/openai/gpt-4.1-nano",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 4e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-4-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 127000,
            "name": "vercel_ai_gateway/perplexity/sonar",
            "type": "chat",
            "inputCost": 0.000001,
            "inputCostUnit": "token",
            "outputCost": 0.000001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/meta/llama-4-maverick",
            "type": "chat",
            "inputCost": 2e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/openai/text-embedding-ada-002",
            "type": "embedding",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/xai/grok-3-mini",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 0,
            "name": "vercel_ai_gateway/cohere/embed-v4.0",
            "type": "chat",
            "inputCost": 1.2e-7,
            "inputCostUnit": "token",
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/meta/llama-3.3-70b",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/cohere/command-r-plus",
            "type": "chat",
            "inputCost": 0.0000025,
            "inputCostUnit": "token",
            "outputCost": 0.00001,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 8192,
            "name": "vercel_ai_gateway/openai/gpt-3.5-turbo-instruct",
            "type": "chat",
            "inputCost": 0.0000015,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/devstral-small",
            "type": "chat",
            "inputCost": 7e-8,
            "inputCostUnit": "token",
            "outputCost": 2.8e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 200000,
            "name": "vercel_ai_gateway/anthropic/claude-3.7-sonnet",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 0.000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1048576,
            "name": "vercel_ai_gateway/google/gemini-2.0-flash",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 6e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/pixtral-12b",
            "type": "chat",
            "inputCost": 1.5e-7,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "vercel_ai_gateway/mistral/magistral-small",
            "type": "chat",
            "inputCost": 5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000015,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "vercel_ai_gateway/moonshotai/kimi-k2",
            "type": "chat",
            "inputCost": 5.5e-7,
            "inputCostUnit": "token",
            "outputCost": 0.0000022,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 40960,
            "name": "vercel_ai_gateway/alibaba/qwen-3-32b",
            "type": "chat",
            "inputCost": 1e-7,
            "inputCostUnit": "token",
            "outputCost": 3e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 1047576,
            "name": "vercel_ai_gateway/openai/gpt-4.1",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000008,
            "outputCostUnit": "token"
        }
    ],
    "oci": [
        {
            "maxTokens": 512000,
            "name": "oci/meta.llama-4-maverick-17b-128e-instruct-fp8",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 192000,
            "name": "oci/meta.llama-4-scout-17b-16e-instruct",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "oci/meta.llama-3.3-70b-instruct",
            "type": "chat",
            "inputCost": 7.2e-7,
            "inputCostUnit": "token",
            "outputCost": 7.2e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "oci/meta.llama-3.2-90b-vision-instruct",
            "type": "chat",
            "inputCost": 0.000002,
            "inputCostUnit": "token",
            "outputCost": 0.000002,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "oci/meta.llama-3.1-405b-instruct",
            "type": "chat",
            "inputCost": 0.00001068,
            "inputCostUnit": "token",
            "outputCost": 0.00001068,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 128000,
            "name": "oci/xai.grok-4",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "oci/xai.grok-3",
            "type": "chat",
            "inputCost": 0.000003,
            "inputCostUnit": "token",
            "outputCost": 1.5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "oci/xai.grok-3-mini",
            "type": "chat",
            "inputCost": 3e-7,
            "inputCostUnit": "token",
            "outputCost": 5e-7,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "oci/xai.grok-3-fast",
            "type": "chat",
            "inputCost": 0.000005,
            "inputCostUnit": "token",
            "outputCost": 0.000025,
            "outputCostUnit": "token"
        },
        {
            "maxTokens": 131072,
            "name": "oci/xai.grok-3-mini-fast",
            "type": "chat",
            "inputCost": 6e-7,
            "inputCostUnit": "token",
            "outputCost": 0.000004,
            "outputCostUnit": "token"
        }
    ],
    "volcengine": [
        {
            "maxTokens": 4096,
            "name": "doubao-embedding-large",
            "type": "embedding",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "doubao-embedding-large-text-250515",
            "type": "embedding",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "doubao-embedding-large-text-240915",
            "type": "embedding",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "doubao-embedding",
            "type": "embedding",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        },
        {
            "maxTokens": 4096,
            "name": "doubao-embedding-text-240715",
            "type": "embedding",
            "inputCost": 0,
            "inputCostUnit": null,
            "outputCost": 0,
            "outputCostUnit": null
        }
    ]
} as const
