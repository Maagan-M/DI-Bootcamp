let displayValue = '0';
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = displayValue;
}

updateDisplay();

function number(num) {
    if (waitingForSecondOperand === true) {
        displayValue = num;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }
    updateDisplay();
}

function operator(nextOperator) {
    const inputValue = parseFloat(displayValue);
    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }
    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        displayValue = String(result);
        firstOperand = result;
    }
    waitingForSecondOperand = true;
    operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function equal() {
    if (operator === null || waitingForSecondOperand) {
        return;
    }
    const inputValue = parseFloat(displayValue);
    const result = performCalculation[operator](firstOperand, inputValue);
    displayValue = String(result);
    firstOperand = result;
    operator = null;
    waitingForSecondOperand = true;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    waitingForSecondOperand = false;
    operator = null;
    updateDisplay();
}

function resetCalculator() {
    clearDisplay();
    const display = document.querySelector('.calculator-screen');
    display.value = '';
}
document.querySelector('.clear-button').addEventListener('click', clearDisplay);
document.querySelector('.reset-button').addEventListener('click', resetCalculator);
