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

// Function that calls calculator operator functions on 2 numbers
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

// Handle when "0" is clicked
const zero = document.querySelector(".zero");
zero.addEventListener("click", () => handleDigitClick(0));

// Handle when "1" is clicked
const one = document.querySelector(".one");
one.addEventListener("click", () => handleDigitClick(1));

// Handle when "2" is clicked
const two = document.querySelector(".two");
two.addEventListener("click", () => handleDigitClick(2));

// Handle when "3" is clicked
const three = document.querySelector(".three");
three.addEventListener("click", () => handleDigitClick(3));

// Handle when "4" is clicked
const four = document.querySelector(".four");
four.addEventListener("click", () => handleDigitClick(4));

// Handle when "5" is clicked
const five = document.querySelector(".five");
five.addEventListener("click", () => handleDigitClick(5));

// Handle when "6" is clicked
const six = document.querySelector(".six");
six.addEventListener("click", () => handleDigitClick(6));

// Handle when "7" is clicked
const seven = document.querySelector(".seven");
seven.addEventListener("click", () => handleDigitClick(7));

// Handle when "8" is clicked
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => handleDigitClick(8));

// Handle when "9" is clicked
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => handleDigitClick(9));
