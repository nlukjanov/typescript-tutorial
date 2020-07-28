"use strict";
function generateRandomId(symbol, strLength) {
    return symbol + Math.random().toString(36).substr(2, strLength);
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
            app.innerHTML = generateRandomId('#', 7);
        }
    }, 1000);
}
document.addEventListener('DOMContentLoaded', main);
