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

interface Component {
  onInit(el: HTMLElement | null): void;
}

class App implements Component {
  static id = 'app';
  onInit(el: HTMLElement | null): void {
    setInterval(() => {
      if (el) {
        el.innerHTML =
          'by Nik' + ' ' + generateRandomId({ symbol: '#', strLength: 7 });
      }
    }, 1000);
  }
}

function main(ComponentClass) {
  const el = document.getElementById(ComponentClass.id);
  const cmp = new ComponentClass();
  cmp.onInit(el);
}

main(App);
