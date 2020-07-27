type ValidSymbol = '#' | '$' | '@';

function generateRandomId(symbol: ValidSymbol, strLength: number): string {
  return symbol + Math.random().toString(36).substr(2, strLength);
}

function main() {
  const app = document.getElementById('app');
  setInterval(() => {
    app.innerHTML = generateRandomId('#', 7);
  }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
