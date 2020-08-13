export function resolveJson<TReturnType>(
    input: string | TReturnType
): TReturnType {
    return typeof input === "string" ? JSON.parse(input) : input;
}