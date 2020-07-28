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

function enumerable(isEnumerable: boolean) {
  return (target, propertyKey, propertyDescriptor: PropertyDescriptor) => {
    propertyDescriptor.enumerable = isEnumerable;
  };
}

@Component({
  id: 'app'
})
class App {
  @enumerable(false)
  onInit(el: HTMLElement | null): void {
    setInterval(() => {
      if (el) {
        el.innerHTML =
          'by Nik' + ' ' + generateRandomId({ symbol: '#', strLength: 7 });
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
