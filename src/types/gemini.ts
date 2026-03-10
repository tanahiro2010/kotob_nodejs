type Model =
    'gemini-1.5-pro' |
    'gemini-1.5-pro-100k' |
    'gemini-1.5-pro-100k-20240606' |
    'gemini-2.0-flash' |
    'gemini-2.0-flash-lite' |
    'gemini-2.5-flash' |
    'gemini-2.5-flash-image' |
    'gemini-2.5-flash-native-audio-preview-12-2025' |
    'gemini-2.5-flash-preview-tts' |
    'gemini-2.5-flash-lite' |
    'gemini-2.5-pro' |
    'gemini-2.5-pro-preview-tts' |
    'gemini-2.5-computer-use-preview-10-2025' |
    'gemini-3.1-pro-preview' |
    'gemini-3-flash-preview' |
    'gemini-3.1-flash-lite-preview' |
    'gemini-3-pro-image-preview' |
    'veo-3.1-generate-preview' |
    'imagen' |
    'lyria-realtime-exp' |
    'deep-research-pro-preview-12-2025' |
    'gemini-embedding-001' |
    'gemini-robotics-er-1.5-preview';

type ContentPayload = {
    role:    'user' | 'system' | 'assistant';
    content: string;
}

type ArrayConfig = {
    type: "array";
    items: {
        
    }
}

type GeminiPayload = {
    model: Model;
    contents: {
        parts: Array<{ text: string; }>;
    }
    generationConfig?: {
        responseMimeType: "application/json";
        responseJsonSchema: {
            type: "object";
            proparties: {
                [key: string]: {
                    type: "string" | "number" | "boolean" | "object" | "array";
                    description: string;
                }
            }
        }
    }

}

export type { GeminiPayload, Model };