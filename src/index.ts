import _Kotob, { GeminiPayload, KotobConfig, Model } from "./types";

class Kotob implements _Kotob {
    private key: string | undefined | null;
    private model: Model = "gemini-1.5-pro";
    private endpoint: string = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent";
    constructor(config: KotobConfig) {
        if (config.key) throw new Error("Key is required");
        this.key = config.key;

        if (config.model) this.model = config.model;
        if (config.endpoint) this.endpoint = config.endpoint;
    }

    setKey(key: string): void {
        this.key = key;
    }

    getKey(): string | null | undefined {
        return this.key || null;
    }

    setModel(model: Model): void {
        this.model = model;
    }

    getModel(): Model {
        return this.model;
    }

    setEndpoint(endpoint: string): void {
        this.endpoint = endpoint;
    }

    getEndpoint(): string {
        return this.endpoint;
    }

    translate(text: string): Promise<string>;
    translate(text: string, sourceLanguage: string): Promise<string>;
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
    async translate(text: string, sourceLanguage?: string, targetLanguage?: string): Promise<string> {
        if (!this.key) {
            return Promise.reject(new Error("Key is required"));
        }

        const endpoint = this.endpoint.replace("{model}", this.model);
        const payload: GeminiPayload = {
            model: this.model,
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.key}`
            },
            body: JSON.stringify({
                model: this.model,
                input: {
                    text,
                    sourceLanguage,
                    targetLanguage
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return Promise.reject(new Error(error.error.message));
        }

        const data = await response.json();
        return data.choices[0].message.content;
    }
}

export { Kotob };