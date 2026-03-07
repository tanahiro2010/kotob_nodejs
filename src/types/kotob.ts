import { Model } from "./gemini";

type _Kotob = {
    setKey(key: string): void;
    getKey(): string | null | undefined;

    setModel(model: string): void;
    getModel(): string;

    setEndpoint(endpoint: string): void;
    getEndpoint(): string;

    translate(text: string): Promise<string>;
    translate(text: string, sourceLanguage: string): Promise<string>;
    translate(text: string, sourceLanguage: string, targetLanguage: string): Promise<string>;
}

type KotobConfig = {
    key: string;
    model?: Model;
    endpoint?: string;
}

export default _Kotob;
export type { KotobConfig };