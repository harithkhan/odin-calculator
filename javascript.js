// Functions of a calculator
function add (a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// Variables that contain first number, math operator and second number for display
let displayFirstNumber;
let displayOperator;
let displaySecondNumber;

// Function that calls operator functions on 2 numbers
function operator(mathOperator, firstNum, secondNum) {
    if (mathOperator === "+") {
        return add(firstNum, secondNum);
    } else if (mathOperator === "-") {
        return subtract(firstNum, secondNum);
    } else if (mathOperator === "*") {
        return multiply(firstNum, secondNum);
    } else if (mathOperator === "/") {
        return divide(firstNum, secondNum);
    };
};