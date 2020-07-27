function generateRandomId() {
  return '#' + Math.random().toString(36).substr(2, 7);
}

function main() {
  const appComponent = document.getElementById('app');
  setInterval(() => {
    appComponent.innerHTML = generateRandomId();
  }, 1000);
}

document.addEventListener('DOMContentLoaded', main);
