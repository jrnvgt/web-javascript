'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', changeHandler);

  const imageButton = document.getElementById('image-button');
  imageButton.addEventListener('click', clickHandler);
});

function changeHandler() {
  if (this.files.length === 0) { return; }

  const file = this.files[0];

  const fileName = document.getElementById('file-name');
  fileName.textContent = file.name;

  const reader = new FileReader();

  reader.onload = () => {
    localStorage.setItem('image', reader.result);
  }

  reader.readAsDataURL(file);
}

function clickHandler() {
  let image = document.querySelector('.box > img');

  if (image === null) {
    image = document.createElement('img');
    image.src = localStorage.getItem('image');
    image.alt = 'image';
    
    this.parentElement.append(image);

    return;
  }

  image.src = localStorage.getItem('image');
}
