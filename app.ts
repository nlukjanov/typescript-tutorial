const symbol: string = '#';
const strLength: number = 7;

function generateRandomId() {
  return symbol + Math.random().toString(36).substr(2, strLength);
}

function main() {
  const app = document.getElementById('app');
  setInterval(() => {
    app.innerHTML = generateRandomId();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
