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

// Miscellaneous variables that help calculator function
let logCounter = 1; // Helps to index console logs
let displayValue = 0; // Default value of display
let isResult = false; // Placeholder to track whether equals-to clicked, enabling user to type digits fresh
let operatorAssigned = false; // Placeholder to help enable chaining of operators
let isChaining = false; // Placeholder to help enable chaining of operators
let decimalDisplay = ""; // Placeholder to turn displayValue into string for decimal appending

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
display.textContent = displayValue; // Default the display to 0

function handleDigitClick(digit) {
    if (displayValue && displayValue.toString().length >= 15) {
        console.log(`${logCounter}: ${digit} was clicked but not appended. Only 15-16 digits may be appended
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++

    } else if (decimalDisplay.toString().includes(".")) {
        decimalDisplay += digit;
        decimalDisplay = parseFloat(decimalDisplay);
        displayValue = decimalDisplay;
        isResult = false;
        isChaining = false; /// Ensures that operator chaining is negated after digits are clicked (refer to handleOperatorClick)
        valueB = undefined; // Ensures that the correct condition is fulfilled in handleOperatorClick
        decimalDisplay = ""; // Resets decimal display
        console.log(`${logCounter}: ${digit} was clicked and appended as decimal value
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    
    } else if (displayValue === 0) {
        displayValue = digit;
        isResult = false;
        isChaining = false; 
        valueB = undefined; 
        decimalDisplay = "";
        console.log(`${logCounter}: ${digit} was clicked
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    
    } else if (isResult || isChaining) {
        displayValue = digit;
        isResult = false;
        isChaining = false;
        valueB = undefined;
        decimalDisplay = "";
        console.log(`${logCounter}: ${digit} was clicked
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else {
        let displayValueString = displayValue.toString();
        let appendedDisplayValueString = displayValueString + digit;
        displayValue = parseFloat(appendedDisplayValueString);
        isResult = false;
        isChaining = false;
        valueB = undefined;
        decimalDisplay = ""; // Resets decimal display
        console.log(`${logCounter}: ${digit} was appended
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    };
    display.textContent = displayValue;
    toToggleNegative();
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

// Functions that toggles the negative value of display

const toggleNegative = document.querySelector(".toggle-negative");

function handleToggleNegative() {
    if (isChaining) {
        console.log(`${logCounter}: Toggle-negative was clicked while chaining, nothing happened
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)

    } else if (isResult) {
        displayValue = displayValue * (-1);
        display.textContent = displayValue;
        isResult = false;
        console.log(`${logCounter}: Toggle-negative was clicked, calculator operates on negative of result
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)

    } else if (isNaN(displayValue) && decimalDisplay.toString().includes(".")) { // Handles when x.0 is entered
        console.log(`${logCounter}: Toggle-negative was clicked while decimal number not properly assigned, nothing happened
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)

    } else if (!isNaN(displayValue)) { // Handles toggle negative when there is a display value
        displayValue = displayValue * -1;
        display.textContent = displayValue;
        isResult = false;
        console.log(`${logCounter}: Toggle-negative was clicked, calculator operates on negative of display value
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)
    };
    toToggleNegative();
};

toggleNegative.addEventListener("click", handleToggleNegative);

function toToggleNegative() { // To remove display of toggle-negative button when it can't be used
    if (isChaining || (isNaN(displayValue) && decimalDisplay.toString().includes(".")) 
        || (isResult && operatorAssigned)) {
        toggleNegative.style.color = "#0a2103";
        
    } else {
        toggleNegative.style.color = "white";
    }
};

// Function that rounds off results from math operators
function roundedResult(value, decimal = 10) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
};

// Functions that handle operator clicks

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

function handleOperatorClick(opr) {
    if (mathOperator === "/" && displayValue === 0 && isChaining === false) {
        display.textContent = "Finland";
        displayValue = 0;
        console.log(`${logCounter}: Tried to divide by 0
        calculation: ${valueA} ${mathOperator} 0 = ${display.textContent}`);
        logCounter++;
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        isResult = false;
        operatorAssigned = false;
        console.log(`
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
    
    } else if (displayValue === undefined) { // For when decimal assigned without decimal number e.g "5." See handleDecimalClick
        console.log(`${logCounter}: Ping 1, ${opr} was clicked, there is nothing to operate on, nothing happened
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (valueA === undefined && valueB === undefined && mathOperator === undefined 
        && operatorAssigned === false && isChaining === false) {

        valueA = displayValue;
        displayValue = 0; // Ensures that digits clicked after operator clicks are displayed (refer to handleDigitClick)
        mathOperator = opr;
        isResult = false;
        operatorAssigned = true;
        isChaining = true;
        console.log(`${logCounter}: Ping 2, operator ${mathOperator} has been assigned
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (!isNaN(valueA) && valueB === undefined && operatorAssigned === true && isChaining === false) {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        if (cleanResult.toString().length > 15) { // Prevent overflow
            display.style.fontSize = "22px";
        };
        console.log(`${logCounter}: Ping 3, ${opr} was clicked, chaining has occured, previous values were calculated and displayed first
        calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}`);
        valueA = cleanResult
        valueB = undefined;
        displayValue = valueA;
        mathOperator = opr;
        isResult = true;
        operatorAssigned = true;
        isChaining = true;
        console.log(`Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (!isNaN(valueA) && valueB === undefined && operatorAssigned === true 
    && isChaining === true) {

        mathOperator = opr;
        isResult = false;
        operatorAssigned = true;
        isChaining = true;
        console.log(`${logCounter}: Ping 5, ${opr} was clicked, chaining has occured without valueB being assigned, no values have been calculated, operator is reassigned
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    };
    toToggleNegative();
};

add.addEventListener("click", () => handleOperatorClick("+"));
subtract.addEventListener("click", () => handleOperatorClick("-"));
multiply.addEventListener("click", () => handleOperatorClick("*"));
divide.addEventListener("click", () => handleOperatorClick("/"));

// Functions than handle equal click

const equalsTo = document.querySelector(".equals-to");
function handleEqualsToClick() {
    if (isNaN(valueA)) {
        console.log(`${logCounter}: There is nothing to operate on, nothing happens
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (mathOperator === "/" && displayValue === 0) {
        display.textContent = "Finland";
        displayValue = 0;
        valueB = undefined;
        isResult = true;
        operatorAssigned = false;
        isChaining = false;
        console.log(`${logCounter}: Tried to divide by 0
        calculation: ${valueA} / 0 = ${display.textContent}`);
        logCounter++;
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        console.log(`
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)

    } else if (!isNaN(valueA) && valueB === undefined && isChaining === true) {
        valueB = valueA;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        if (cleanResult.toString().length > 15) { // Prevent overflow
            display.style.fontSize = "22px";
        };
        displayValue = cleanResult;
        isResult = true;
        operatorAssigned = false;
        isChaining = false;
        console.log(`${logCounter}: Second value was not entered, calculation will execute with first value as second value
        Calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}`);
        logCounter++;
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        console.log(`
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        
    } else {
        valueB = displayValue;
        let result = operator(mathOperator, valueA, valueB);
        let cleanResult = roundedResult(result);
        display.textContent = cleanResult;
        if (cleanResult.toString().length > 15) { // Prevent overflow
            display.style.fontSize = "22px";
        };
        displayValue = cleanResult;
        isResult = true;
        operatorAssigned = false;
        isChaining = false;
        console.log(`${logCounter}: Normal Calculation occurs
        Calculation: ${valueA} ${mathOperator} ${valueB} = ${cleanResult}`);
        logCounter++;
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        console.log(`
            Values
            displayValue: ${displayValue} 
            valueA: ${valueA} 
            valueB: ${valueB}
            mathOperator: ${mathOperator}
            isResult: ${isResult}
            operatorAssigned: ${operatorAssigned}
            isChaining: ${isChaining}`);
    };
    toToggleNegative();
};

equalsTo.addEventListener("click", handleEqualsToClick);

// Functions that handle decimal click

const decimal = document.querySelector(".decimal");

function handleDecimalClick() {
    if (displayValue && displayValue.toString().length >= 15) {
        console.log(`${logCounter}: Decimal cannot be appended if display length is 15 or greater
        Values
        display shows: ${decimalDisplay}    
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (displayValue === 0) {
        decimalDisplay = displayValue.toString() + ".";
        display.textContent = decimalDisplay;
        isResult = false;
        isChaining = false; 
        valueB = undefined;
        displayValue = undefined;
        console.log(`${logCounter}: DisplayValue is undefined, 0. decimal was created
        Values
        display shows: ${decimalDisplay}    
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else if (isResult) {
        decimalDisplay = "0.";
        displayValue = 0;
        display.textContent = decimalDisplay;
        isResult = false;
        isChaining = false; 
        valueB = undefined;
        console.log(`${logCounter}: Decimal button clicked after a result is reached, new value 0.x created
        Values
        display shows: ${decimalDisplay}    
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    
    } else if (decimalDisplay.toString().includes(".") || displayValue.toString().includes(".")) {
        // does nothing when display is already a float, decimal button negated
        console.log(`${logCounter}: Display already contains decimal point, nothing happened as a result
        Values
        display shows: ${decimalDisplay}    
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    
    } else if (!displayValue.toString().includes(".")) {
        decimalDisplay = displayValue.toString() + ".";
        display.textContent = decimalDisplay;
        isResult = false;
        isChaining = false; 
        valueB = undefined;
        displayValue = undefined; // Useful in case operator clicked prematurely
        console.log(`${logCounter}: Decimal point was appended
        Values
        display shows: ${decimalDisplay}    
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    };
    toToggleNegative();
};

decimal.addEventListener("click", handleDecimalClick);

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
    decimalDisplay = "";
    display.style.fontSize = "28px"; // restore font size if changed
    console.log(`${logCounter}: Calculator was cleared
    Values
    displayValue: ${displayValue} 
    valueA: ${valueA} 
    valueB: ${valueB}
    mathOperator: ${mathOperator}
    isResult: ${isResult}
    operatorAssigned: ${operatorAssigned}
    isChaining: ${isChaining}`);
    logCounter++;
    toToggleNegative();
};

const clear = document.querySelector(".clear");
clear.addEventListener("click", handleClearClick);

// Delete feature

function toHandleDelete() {
    if (isResult || isChaining || displayValue === 0) { // Clears calculator if result reached either using = or reached in process of chaining
        valueA = undefined;
        valueB = undefined;
        mathOperator = undefined;
        displayValue = 0;
        display.textContent = 0;
        isResult = false;
        operatorAssigned = false;
        isChaining = false;
        decimalDisplay = ""; 
        console.log(`${logCounter}: Delete was clicked when display is 0, when result reached, or when chaining operators, calculator cleared
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)
        logCounter++;

    } else if (isNaN(displayValue)) { // Helps delete if x. is displayed
        let deletedDisplay = decimalDisplay.slice(0, -1);
        displayValue = parseFloat(deletedDisplay);
        display.textContent = displayValue;
        decimalDisplay = "";
        isResult = false;
        console.log(`${logCounter}: Delete was clicked, last digit or decimal was deleted
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)
        logCounter++;

    } else if (displayValue.toString().length === 1) {
        displayValue = 0;
        display.textContent = displayValue;
        decimalDisplay = "";
        isResult = false;
        console.log(`${logCounter}: Delete was clicked, digit was deleted
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`)
        logCounter++;

    } else if (displayValue < 0 && displayValue.toString().length === 2) {
        displayValue = 0;
        display.textContent = 0;
        decimalDisplay = "";
        isResult = false;
        console.log(`${logCounter}: Delete was clicked while display value was a negative single digit, display value is now zero
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;

    } else {
        let deletedDisplay = displayValue.toString().slice(0, -1);
        displayValue = parseFloat(deletedDisplay);
        display.textContent = displayValue;
        isResult = false;
        console.log(`${logCounter}: Delete was clicked, last digit or decimal was deleted
        Values
        displayValue: ${displayValue} 
        valueA: ${valueA} 
        valueB: ${valueB}
        mathOperator: ${mathOperator}
        isResult: ${isResult}
        operatorAssigned: ${operatorAssigned}
        isChaining: ${isChaining}`);
        logCounter++;
    }
    toToggleNegative();
};

const toDelete = document.querySelector(".delete");
toDelete.addEventListener("click", toHandleDelete);

// Keyboard Support

document.addEventListener("keydown", (event) => {
    let button; // Variable to hold the corresponding button element
    const key = event.key; // Store the key pressed

    if (key === "0") {
        handleDigitClick(0);
        button = document.querySelector(".zero");
    }
    if (key === "1") {
        handleDigitClick(1);
        button = document.querySelector(".one");
    }
    if (key === "2") {
        handleDigitClick(2);
        button = document.querySelector(".two");
    }
    if (key === "3") {
        handleDigitClick(3);
        button = document.querySelector(".three");
    }
    if (key === "4") {
        handleDigitClick(4);
        button = document.querySelector(".four");
    }
    if (key === "5") {
        handleDigitClick(5);
        button = document.querySelector(".five");
    }
    if (key === "6") {
        handleDigitClick(6);
        button = document.querySelector(".six");
    }
    if (key === "7") {
        handleDigitClick(7);
        button = document.querySelector(".seven");
    }
    if (key === "8") {
        handleDigitClick(8);
        button = document.querySelector(".eight");
    }
    if (key === "9") {
        handleDigitClick(9);
        button = document.querySelector(".nine");
    }
    if (key === "n" || key === "N") {
        handleToggleNegative();
        button = document.querySelector(".toggle-negative");
    }
    if (key === "+") {
        handleOperatorClick("+");
        button = document.querySelector(".add");
    }
    if (key === "-") {
        handleOperatorClick("-");
        button = document.querySelector(".subtract");
    }
    if (key === "*" || key === "x" || key === "X") {
        handleOperatorClick("*");
        button = document.querySelector(".multiply");
    }
    if (key === "/") {
        handleOperatorClick("/");
        button = document.querySelector(".divide");
    }
    if (key === "=" || key === "Enter") {
        handleEqualsToClick();
        button = document.querySelector(".equals-to");
    }
    if (key === ".") {
        handleDecimalClick();
        button = document.querySelector(".decimal");
    }
    if (key === " ") {
        handleClearClick();
        event.preventDefault(); // Prevents scrolling when space is pressed
        button = document.querySelector(".clear");
    }
    if (key === "Backspace") {
        toHandleDelete();
        button = document.querySelector(".delete");
    }

    // Add active class if a corresponding button was found
    if (button) {
        button.classList.add("active");
    };
});

// Remove the active class when the key is released
document.addEventListener("keyup", (event) => {
    const key = event.key;
    let button;

    switch (key) {
        case "0": button = document.querySelector(".zero"); break;
        case "1": button = document.querySelector(".one"); break;
        case "2": button = document.querySelector(".two"); break;
        case "3": button = document.querySelector(".three"); break;
        case "4": button = document.querySelector(".four"); break;
        case "5": button = document.querySelector(".five"); break;
        case "6": button = document.querySelector(".six"); break;
        case "7": button = document.querySelector(".seven"); break;
        case "8": button = document.querySelector(".eight"); break;
        case "9": button = document.querySelector(".nine"); break;
        case "n":
        case "N": button = document.querySelector(".toggle-negative"); break;
        case "+": button = document.querySelector(".add"); break;
        case "-": button = document.querySelector(".subtract"); break;
        case "*":
        case "x":
        case "X": button = document.querySelector(".multiply"); break;
        case "/": button = document.querySelector(".divide"); break;
        case "=":
        case "Enter": button = document.querySelector(".equals-to"); break;
        case ".": button = document.querySelector(".decimal"); break;
        case " ": button = document.querySelector(".clear"); break;
        case "Backspace": button = document.querySelector(".delete"); break;
    }

    // Remove active class if a corresponding button was found
    if (button) {
        button.classList.remove("active");
    };
});