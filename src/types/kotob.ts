type _Kotob = {
    setKey(key: string): void;
    getKey(): string;

    setModel(model: string): void;
    getModel(): string;

    setEndpoint(endpoint: string): void;
    getEndpoint(): string;

    translate(text: string, targetLanguage: string): Promise<string>;
}

type KotobConfig = {
    key: string;
    model?: string;
    endpoint?: string;
}

export default _Kotob;
export type { KotobConfig };