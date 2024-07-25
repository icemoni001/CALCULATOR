let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstValue = '';
let memory = 0;

function input(value) {
    if (operator) {
        currentInput += value;
    } else {
        firstValue += value;
    }
    display.textContent = operator ? currentInput : firstValue;
}

function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    operator = '';
    firstValue = '';
}

function changeSign() {
    if (operator) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.textContent = currentInput;
    } else {
        firstValue = (parseFloat(firstValue) * -1).toString();
        display.textContent = firstValue;
    }
}

function calculate() {
    if (firstValue && currentInput && operator) {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstValue) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(currentInput);
                break;
            case '%':
                result = parseFloat(firstValue) % parseFloat(currentInput);
                break;
        }
        display.textContent = result;
        firstValue = result.toString();
        currentInput = '';
        operator = '';
    }
}

function inputOperator(op) {
    if (!operator) {
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    if (operator) {
        currentInput = memory.toString();
        display.textContent = currentInput;
    } else {
        firstValue = memory.toString();
        display.textContent = firstValue;
    }
}

function addToMemory() {
    memory += parseFloat(display.textContent);
}

function subtractFromMemory() {
    memory -= parseFloat(display.textContent);
}
