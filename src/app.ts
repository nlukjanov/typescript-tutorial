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

class App {
  static id = 'app';
}

function main(ComponentClass) {
  const app = document.getElementById(ComponentClass.id);
  setInterval(() => {
    if (app) {
      app.innerHTML =
        'by Nik' + ' ' + generateRandomId({ symbol: '#', strLength: 7 });
    }
  }, 1000);
}

main(App);
