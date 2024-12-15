// Functions of a calculator
function toAdd (a, b) {
    return a + b;
};

function toSubtract(a, b) {
    return a - b;
};

function toMultiply(a, b) {
    return a * b;
};

function toDivide(a, b) {
    return a / b;
};

// Variables that contain first number, math operator and second number for display
let valueA;
let valueB;
let mathOperator;

// Function that calls calculator operator functions on 2 numbers
function operator(mathOperator, firstNum, secondNum) {
    if (mathOperator === "+") {
        return toAdd(firstNum, secondNum);
    } else if (mathOperator === "-") {
        return toSubtract(firstNum, secondNum);
    } else if (mathOperator === "*") {
        return toMultiply(firstNum, secondNum);
    } else if (mathOperator === "/") {
        return toDivide(firstNum, secondNum);
    };
};

// Functions that populate display when digit buttons are clicked

const display = document.querySelector(".display");
let displayValue = 0;
function handleDigitClick(digit) {
    if (displayValue === 0) {
        displayValue = digit;
    } else {
        displayValue = displayValue * 10 + digit;
    }
    display.textContent = displayValue;
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}`);
};

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => handleDigitClick(0));

const one = document.querySelector(".one");
one.addEventListener("click", () => handleDigitClick(1));

const two = document.querySelector(".two");
two.addEventListener("click", () => handleDigitClick(2));

const three = document.querySelector(".three");
three.addEventListener("click", () => handleDigitClick(3));

const four = document.querySelector(".four");
four.addEventListener("click", () => handleDigitClick(4));

const five = document.querySelector(".five");
five.addEventListener("click", () => handleDigitClick(5));

const six = document.querySelector(".six");
six.addEventListener("click", () => handleDigitClick(6));

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => handleDigitClick(7));

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => handleDigitClick(8));

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => handleDigitClick(9));

// Functions that handle operator clicks

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

function handleOperatorClick(opr) {
    if (!isNaN(valueA) && isNaN(valueB)) {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        display.textContent = result;
        valueA = result;
        valueB = 0;
        mathOperator = opr;
        displayValue = valueB;

    } else if (!isNaN(valueA) && !isNaN(valueB)) {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        display.textContent = result;
        valueA = result;
        valueB = 0;
        mathOperator = opr;
        displayValue = valueB;

    } else if (!isNaN(valueA) && valueB === 0) {
        valueB = displayValue
        let result = operator(mathOperator, valueA, valueB);
        display.textContent = result;
        valueA = result;
        mathOperator = opr;
        displayValue = valueB;

    } else {
        valueA = displayValue;
        displayValue = 0;
        mathOperator = opr;
        
    };
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}`);
};

add.addEventListener("click", () => handleOperatorClick("+"));
subtract.addEventListener("click", () => handleOperatorClick("-"));
multiply.addEventListener("click", () => handleOperatorClick("*"));
divide.addEventListener("click", () => handleOperatorClick("/"));

// Functions than handle equal click

const equalsTo = document.querySelector(".equals-to");
function handleEqualsToClick() {
    if (isNaN(valueA)) {
        display.textContent = displayValue;
    } else {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        display.textContent = result;
        displayValue = result;
    };
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}`);
}
equalsTo.addEventListener("click", handleEqualsToClick);

// Clear calculator feature
function handleClearClick () {
    valueA = 0;
    valueB = 0;
    mathOperator = undefined;
    displayValue = 0;
    display.textContent = 0;
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}`);
};

const clear = document.querySelector(".clear");
clear.addEventListener("click", handleClearClick);

