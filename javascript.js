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
let displayFirstNumber;
let displayOperator;
let displaySecondNumber;

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
    console.log(displayValue);
}

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

let valueA = 0;
let valueB = 0;
let mathOperator = "";
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

function handleOperatorClick(opr) {
    valueA = displayValue;
    displayValue = 0;
    mathOperator = opr;
};

add.addEventListener("click", () => handleOperatorClick("+"));
subtract.addEventListener("click", () => handleOperatorClick("-"));
multiply.addEventListener("click", () => handleOperatorClick("*"));
divide.addEventListener("click", () => handleOperatorClick("/"));

// Functions than handle equal click

const equalsTo = document.querySelector(".equals-to");
function handleEqualsToClick() {
    valueB = displayValue;
    let result = operator(mathOperator, valueA, valueB);
    display.textContent = result;
    displayValue = result;
}
equalsTo.addEventListener("click", handleEqualsToClick);


