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
let isResult = false; // Placeholder to track whether equals-to clicked, enabling user to type digits fresh

function handleDigitClick(digit) {
    if (displayValue === 0) {
        displayValue = digit;
        isResult = false;
        isChaining = false; /// Ensures that operator chaining is negated after digits are clicked (refer to handleOperatorClick)
        valueB = undefined; // Ensures that the correct condition is fulfilled in handleOperatorClick
        console.log(`${digit} was clicked`)
    } else if (isResult === true) {
        displayValue = digit;
        isResult = false;
        isChaining = false;
        valueB = undefined;
        console.log(`${digit} was clicked`)
    } else {
        displayValue = displayValue * 10 + digit;
        isResult = false;
        isChaining = false;
        valueB = undefined;
        console.log(`${digit} was appended`);
    };
    display.textContent = displayValue;
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}`);
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

// Function that rounds off results from math operators
function roundedResult(value, decimal = 10) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
};

// Functions that handle operator clicks

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
let operatorAssigned = false; // Placeholder to help enable chaining of operators
let isChaining = false; // Placeholder to help enable chaining of operators

function handleOperatorClick(opr) {
    if (mathOperator === "/" && displayValue === 0) {
        display.textContent = "you can't break me";
        displayValue = 0;
        console.log(`Values
            calculation: ${valueA} ${mathOperator} ${valueB} = ${displayValue}
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}`);
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        isResult = false;
        operatorAssigned = false;
    
    } else if (displayValue === 0 && valueA === undefined && valueB === undefined && mathOperator === undefined) {
        handleClearClick();
        console.log("Ping 1, There is nothing to operate on, operator that was clicked clears calculator");
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}`);

    } else if (displayValue !== 0 && valueA === undefined && valueB === undefined && mathOperator === undefined && operatorAssigned === false && isChaining === false) {
        valueA = displayValue;
        displayValue = 0; // Ensures that digits clicked after operator click are displayed (refer to handleDigitClick)
        mathOperator = opr;
        isResult = false;
        operatorAssigned = true;
        isChaining = true;
        console.log(`Ping 2, operator ${mathOperator} has been assigned`);
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}`);

    } else if (!isNaN(valueA) && valueB === undefined && operatorAssigned === true && isChaining === false) {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        valueA = cleanResult
        valueB = undefined;
        displayValue = 0;
        mathOperator = opr;
        isResult = true;
        operatorAssigned = true;
        isChaining = false;
        console.log("Ping 3, chaining has occured, previous values were calculated and displayed first");
        console.log(`Values
            calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}`);

    } else if (displayValue === 0 && !isNaN(valueA) && valueB === undefined && operatorAssigned === true && isResult === false && isChaining === true) {
        mathOperator = opr;
        isResult = false;
        operatorAssigned = true;
        isChaining = true;
        console.log(`Ping 4, chaining has occured without valueB being assigned, no values have been calculated, only operator is affected`);
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}`);
    }
    
/*
    } else if (!isNaN(valueA) && isNaN(valueB)) { // Enables chaining of operators by assigning valueB
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        console.log("Ping 1(!isNaN(valueA) && isNaN(valueB))");
        console.log(`Values
            calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);
        valueA = cleanResult;
        valueB = 0; // Enables chainig of operators - see the next else if statement
        mathOperator = opr;
        displayValue = valueB;
        isResult = false;

    } else if (!isNaN(valueA) && valueB === 0) {
        valueB = displayValue
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        console.log("Ping 2(!isNaN(valueA) && valueB === 0)");
        console.log(`Values
            calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);
        valueA = cleanResult;
        valueB = 0;
        mathOperator = opr;
        displayValue = valueB;
        isResult = false;

    } else {
        valueA = displayValue;
        displayValue = 0;
        mathOperator = opr;
        isResult = false;
        console.log("Ping 3, else");
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);
    };
*/
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
        console.log("There is nothing to operator on, nothing happens.")
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);

    } else if (mathOperator === "/" && displayValue === 0) {
        display.textContent = "you can't break me";
        displayValue = 0;
        valueB = undefined;
        isResult = true;
        operatorAssigned = false;
        isChaining = false;
        console.log(`Values
            calculation: ${valueA} ${mathOperator} ${valueB} = ${displayValue}
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;

    } else {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        displayValue = cleanResult;
        isResult = true;
        operatorAssigned = false;
        isChaining = false;
        console.log(`Calculation: ${valueA} ${mathOperator} ${valueB} = ${displayValue}`);
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        console.log(`Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}`);
      
    };
};

equalsTo.addEventListener("click", handleEqualsToClick);

// Clear calculator feature
function handleClearClick () {
    valueA = undefined;
    valueB = undefined;
    mathOperator = undefined;
    displayValue = 0;
    display.textContent = 0;
    isResult = false;
    operatorAssigned = false;
    isChaining = false;
    console.log("Calculator was cleared")
    console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}`);
};

const clear = document.querySelector(".clear");
clear.addEventListener("click", handleClearClick);

