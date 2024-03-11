'use strict';

document.addEventListener('DOMContentLoaded', () => {
  createInput();

  const buttons = document.getElementById('buttons');
  buttons.addEventListener('click', clickHandler);
});

function blurHandler() {
  if (this.value === '') { this.value = 0; }

  const inputs = document.querySelectorAll('.input');

  if (inputs.length === 1) { return; }

  calculate();
}

function calculate() {
  const stepResults = new Array();
  const numbers = document.forms.calculator.number;
  const operators = document.querySelectorAll('.operator');
  let result = +numbers[0].value;

  for (let i = 1; i < numbers.length; ++i) {
    const operator = operators[i - 1].textContent;

    switch (operator) {
      case '+':
        result += +numbers[i].value;
        break;
      case '-':
        result -= +numbers[i].value;
        break;
      case 'x':
        result *= +numbers[i].value;
        break;
      case '/':
        result /= +numbers[i].value;
        break;
    }

    stepResults.push(result);
  }

  showStepResults(stepResults);
  showEndResult(result);
}

function showStepResults(stepResults) {
  const helpers = document.querySelectorAll('.help');

  for (let i = 1; i < helpers.length; ++i) {
    helpers[i].textContent = '= ' + stepResults[i - 1];
  }
}

function showEndResult(endResult) {
  const inputs = document.querySelectorAll('.input');

  if (inputs.length !== 10) { return; }

  if (document.querySelector('.result') === null) { createResult(); }

  const result = document.querySelector('.result');
  result.textContent = 'Result = ' + endResult;
}

function clickHandler(event) {
  if (event.target.tagName !== 'BUTTON') { return; }

  const inputs = document.querySelectorAll('.input');

  if (inputs.length < 10) {
    createOperator(event.target.textContent);
    createInput();
  }
}

function createOperator(operator) {
  const element = document.createElement('p');
  element.className = 'operator is-size-4 has-text-centered';
  element.textContent = operator;

  document.forms.calculator.lastElementChild.append(element);
}

function createInput() {
  const field = document.createElement('div');
  field.className = 'field';

  const control = document.createElement('div');
  control.className = 'control';

  const input = document.createElement('input');
  input.addEventListener('blur', blurHandler);
  input.className = 'input';
  input.name = 'number';
  input.type = 'number';
  input.value = 0;

  const help = document.createElement('p');
  help.className = 'help has-text-right';

  control.append(input);
  field.append(control);
  field.append(help);

  document.forms.calculator.append(field);
}

function createResult() {
  const columns = document.querySelectorAll('.columns');
  const column = columns[columns.length - 1].lastElementChild;

  console.log(column);

  const box = document.createElement('div');
  box.className = 'box';

  const paragraph = document.createElement('p');
  paragraph.className = 'result is-size-4';

  box.append(paragraph);
  column.append(box);
}
