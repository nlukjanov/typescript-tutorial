type ValidSymbol = '#' | '$' | '@';

interface GenerateConfig {
  symbol: ValidSymbol;
  strLength: number;
}

function generateRandomId(symbol: ValidSymbol, strLength?: number): string;
function generateRandomId(options: GenerateConfig): string;
function generateRandomId(
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

console.log(generateRandomId('#', 12));

function userAlert(): void {
  alert('Hello');
}
function userAlert2(): never {
  throw new Error('Fail');
}

function main() {
  const app = document.getElementById('app');
  setInterval(() => {
    if (app) {
      app.innerHTML = generateRandomId({ symbol: '#', strLength: 7 });
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
