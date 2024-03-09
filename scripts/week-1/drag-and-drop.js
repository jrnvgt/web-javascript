'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.getElementById('draggables');
  draggables.addEventListener('dragstart', dragStartHandler);

  const dropzones = document.getElementById('dropzones');
  dropzones.addEventListener('click', clickHandler);
  dropzones.addEventListener('dragstart', dragStartHandler);
  dropzones.addEventListener('dragenter', dragEnterHandler);
  dropzones.addEventListener('dragover', dragOverHandler);
  dropzones.addEventListener('dragleave', dragLeaveHandler);
  dropzones.addEventListener('drop', dropHandler);
});

function clickHandler(event) {
  if (event.target.tagName !== 'IMG') { return; }

  const element = event.target;
  const pokemon = element.id.at(0).toUpperCase() + element.id.slice(1) + '!';
  
  alert(pokemon);
}

function dragStartHandler(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.dataTransfer.effectAllowed = 'move';
}

function dragEnterHandler(event) {
  if (event.target.tagName !== 'TD') { return; }
  event.target.className = 'has-background-primary-light';
}

function dragOverHandler(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function dragLeaveHandler(event) {
  if (event.target.tagName !== 'TD') { return; }
  event.target.removeAttribute('class');
}

function dropHandler(event) {
  event.preventDefault();

  if (event.target.tagName !== 'TD') { return; }

  event.target.removeAttribute('class');

  if (event.target.childElementCount !== 0) { return; }

  const id = event.dataTransfer.getData('text/plain');
  const element = document.getElementById(id);

  event.target.append(element);
}
