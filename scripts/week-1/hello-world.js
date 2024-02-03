'use strict';

showHelloWorld();

function showHelloWorld() {
  const element = document.querySelector('.box > p');
  element.textContent = 'Hello, world!';
}
