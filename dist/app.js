"use strict";
function generateRandomId(options) {
    return (options.symbol + Math.random().toString(36).substr(2, options.strLength));
}
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
