'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const previousButton = getPreviousButton();
  const nextButton = getNextButton();

  addValidation();
  validateInput();
  
  previousButton.addEventListener('click', previousHandler);
  nextButton.addEventListener('click', nextHandler);
});

function addValidation() {
  const fields = document.forms.register.elements;

  for (const field of fields) {
    field.addEventListener('focus', focusHandler);
    field.addEventListener('blur', blurHandler);
  }
}

function focusHandler() {
  this.classList.remove('is-danger');

  const help = this.parentElement.nextElementSibling;
  help.textContent = '';
}

function blurHandler() {
  if (this.value.trim() !== '') {
    validateInput();
    return;
  }

  this.classList.add('is-danger');

  const help = this.parentElement.nextElementSibling;
  help.textContent = 'Invalid input';

  validateInput();
}

function previousHandler() {
  const steps = getAllSteps();
  const numbers = getAllNumbers();
  const currentStep = getCurrentStep();

  steps[currentStep].hidden = true;
  numbers[currentStep].classList.remove('is-current');

  steps[currentStep - 1].hidden = false;
  numbers[currentStep - 1].classList.add('is-current');

  updateButtons();
}

function nextHandler() {
  const steps = getAllSteps();
  const numbers = getAllNumbers();
  const currentStep = getCurrentStep();

  steps[currentStep].hidden = true;
  numbers[currentStep].classList.remove('is-current');

  steps[currentStep + 1].hidden = false;
  numbers[currentStep + 1].classList.add('is-current');

  updateButtons();
  validateInput();
}

function updateButtons() {
  const previousButton = getPreviousButton();
  const nextButton = getNextButton();
  const numbers = getAllNumbers();
  const currentStep = getCurrentStep();

  if (currentStep === 0) {
    previousButton.classList.add('is-disabled');
    nextButton.classList.remove('is-disabled');
  }
  else if (currentStep === (numbers.length - 1)) {
    previousButton.classList.remove('is-disabled');
    nextButton.classList.add('is-disabled');
  }
  else {
    previousButton.classList.remove('is-disabled');
    nextButton.classList.remove('is-disabled');
  }
}

function validateInput() {
  const nextButton = getNextButton();
  const steps = getAllSteps();
  const numbers = getAllNumbers();
  const currentStep = getCurrentStep();

  const fields = steps[currentStep].querySelectorAll('.input');
  
  for (const field of fields) {
    if (field.value.trim() === '') {
      nextButton.classList.add('is-disabled');
      return;
    }
  }

  if (currentStep !== (numbers.length - 1)) {
    nextButton.classList.remove('is-disabled');
  }
}

function getPreviousButton() {
  return document.getElementById('previous-button');
}

function getNextButton() {
  return document.getElementById('next-button');
}

function getAllSteps() {
  return document.querySelectorAll('.register-step')
}

function getAllNumbers() {
  return document.querySelectorAll('.pagination-link');
}

function getCurrentStep() {
  const numbers = getAllNumbers();

  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i].classList.contains('is-current')) { return i; }
  }
}
