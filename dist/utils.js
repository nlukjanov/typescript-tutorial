export function generateRandomId(optionsOrSymbol) {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, 7);
    }
    return (optionsOrSymbol.symbol +
        Math.random().toString(36).substr(2, optionsOrSymbol.strLength));
}
