import _Kotob, { type KotobConfig } from "./types/kotob";

class Kotob implements Kotob {
    private key: string | undefined | null;
    private model: string = "gemini-1.5-pro";
    private endpoint: string = "https://";
    constructor(config: KotobConfig) {
        if (config.key) throw new Error("Key is required");
        this.key = config.key;

        if (config.model) this.model = config.model;
        if (config.endpoint) this.endpoint = config.endpoint;
    }

    setKey(key: string): void {
        this.key = key;
    }

    getKey(): string | undefined | null {
        return this.key;
    }

    setModel(model: string): void {
        this.model = model;
    }

    getModel(): string {
        return this.model;
    }
}