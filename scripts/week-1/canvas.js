'use strict';

const canvas = document.getElementById('canvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const context = canvas.getContext('2d');

draw();

window.addEventListener('resize', () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  draw();
});

function draw() {
  context.fillStyle = 'rgb(242, 80, 34)';
  context.fillRect((canvas.width / 2) - 110, (canvas.height / 2) - 110, 100, 100);
  context.fillStyle = 'rgb(127, 186, 0)';
  context.fillRect((canvas.width / 2), (canvas.height / 2) - 110, 100, 100);
  context.fillStyle = 'rgb(0, 164, 239)';
  context.fillRect((canvas.width / 2) - 110, (canvas.height / 2), 100, 100);
  context.fillStyle = 'rgb(255, 185, 0)';
  context.fillRect((canvas.width / 2), (canvas.height / 2), 100, 100);

  context.font = '100px Segoe UI';
  context.textAlign = 'center';
  context.fillStyle = 'rgb(115, 115, 115)';
  context.fillText('Microsoft', (canvas.width / 2), (canvas.height / 2) + 210);
}
