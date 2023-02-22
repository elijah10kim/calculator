let num1 = 0;
let num2 = 0;
let operator = '';
let newScreen = false;

const digitButtons = document.querySelectorAll('.digit-btn');
digitButtons.forEach((button) => {button.addEventListener('click', () => appendDigit(button.textContent))});

const operatorButtons = document.querySelectorAll('.operator-btn');
operatorButtons.forEach((button) => {button.addEventListener('click', () => setOperation(button.textContent))})

const screen = document.getElementById('screen');
const clearButton = document.getElementById('clear-btn');
const equalButton = document.getElementById('equal-btn');
const decimalButton = document.getElementById('decimal-btn');

clearButton.addEventListener('click', clearScreen);
equalButton.addEventListener('click', evaluateExpression);


function clearScreen() {
    screen.textContent = 0;
    num1 = 0;
    num2 = 0;
    operator = '';
}

function appendDigit(digit) {
    if (screen.textContent === '0' || newScreen) {
        screen.textContent = digit;
        console.log(screen.textContent);
        newScreen = false;
    }
    else {
        screen.textContent += digit;
    }
}

function setOperation(op) {
    if (operator != '') {
        evaluateExpression();
    }
    num1 = Number(screen.textContent);
    operator = op;
    newScreen = true;
}

function evaluateExpression() {
    num2 = Number(screen.textContent);
    result = Math.round((operate(operator, num1, num2)) * 100) / 100
    screen.textContent = result;
}

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    let product = x * y;
    if (product == -0) {
        product = 0;
    }
    return product;
}

function divide(x,y) {
    if (x == -0) {
        x = 0;
    }
    let quotient = x / y;
    if (quotient == -0) {
        return 0;
    }
    return quotient;
}

function operate(op, x, y) {
    switch(op) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case 'x':
            return multiply(x,y);
        case '/':
            return divide(x,y);
    }
}

