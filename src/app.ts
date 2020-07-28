import { random } from 'lodash';
import { generateRandomId, Component } from './utils';

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

function prop(x: any, name: any) {
  console.log(x, name);
}

function param(x: any, name: any, index: any) {
  console.log(x, name, index);
}

@Component({
  id: 'app'
})
class App {
  onInit(el: HTMLElement | null): void {
    setInterval(() => {
      if (el) {
        el.innerHTML =
          'by Nik' +
          ' ' +
          generateRandomId({ symbol: '#', strLength: random(7, 10) });
      }
    }, 1000);
  }
}

for (let key in App.prototype) {
  console.log(key);
}

function main(ComponentClass: any) {
  const el = document.getElementById(ComponentClass.id);
  const cmp = new ComponentClass();
  cmp.onInit(el);
}

main(App);
