type ValidSymbol = '#' | '$' | '@';

function generateRandomId(symbol: ValidSymbol, strLength: number = 7): string {
  return symbol + Math.random().toString(36).substr(2, strLength);
}

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
      app.innerHTML = generateRandomId('#', 7);
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
