import { generateRandomId } from './utils';
function identity(arg) {
    return arg;
}
identity(12);
identity('Nik');
console.log(generateRandomId('#', 12));
function userAlert() {
    alert('Hello');
}
function userAlert2() {
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
