export type ValidSymbol = '#' | '$' | '@';

export interface GenerateConfig {
  symbol: ValidSymbol;
  strLength: number;
}

export function generateRandomId(
  symbol: ValidSymbol,
  strLength: number
): string;
export function generateRandomId(options: GenerateConfig): string;
export function generateRandomId(
  optionsOrSymbol: GenerateConfig | ValidSymbol
): string {
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36).substr(2, 7);
  }
  return (
    optionsOrSymbol.symbol +
    Math.random().toString(36).substr(2, optionsOrSymbol.strLength)
  );
}

export function Component(options: { id: string }) {
  return (target: any) => {
    target.id = options.id;
  };
}
