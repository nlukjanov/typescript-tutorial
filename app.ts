import { generateRandomId } from './utils';

function identity<T>(arg: T): T {
  return arg;
}

identity<number>(12);
identity<string>('Nik');

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
