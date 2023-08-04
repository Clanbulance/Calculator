/// some variables
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let displayValue = '0';
let firstValue = null;
let secondValue = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let input;

//update display
function updateDisplay(){
    display.textContent = displayValue;
    console.table(`displayvalue:   ${displayValue}
firstValue:     ${firstValue}
firstOperator:  ${firstOperator}
secondValue:    ${firstValue}`)
};
updateDisplay();

//lets fix the reset button for easiness
function reset(){
        displayValue = '0';
        firstValue = null;
        secondValue = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
        input;
        updateDisplay();
};

//addeventlistener on buttons?
// Numbers -> OK
// Operator -> To Do
// Clear -> OK
//

buttons.forEach(button => button.addEventListener("click", function(e){
    
    if (button.classList.contains("number")){
        if (displayValue == "0"){
            input = e.target.textContent;
            changeFirstValue(input)
        } else if (!displayValue == "0" && firstOperator == null){
            input = e.target.textContent;
            appendFirstValue(input);
        } else if (displayValue != null && firstOperator != null && secondValue != "1"){
            input = e.target.textContent;
            changeSecondValue(input);
        } else if (secondValue == "1" && firstOperator != null){
            input = e.target.textContent;
            appendSecondValue(input);
        }
    } else if (button.classList.contains("operator")){
        
            input = (e.target.textContent);
            setFirstOperator(input);
        
    } else if (button.value.includes("clear")){
        reset();
        console.log("Let's clear everything");
    } else if (button.classList.contains("equal")){
        input = (e.target.textContent);
        equalFunction();
    } else if (button.classList.contains("comma")){
        input = (e.target.textContent);
        comma(input);
    } else if (button.value.includes("return")){
            displayValue = displayValue.slice(0,-1);
            updateDisplay();
            
    }


}))


function comma(number){
    displayValue += number;
    updateDisplay();

}

//changefirstvalue because 0
function changeFirstValue(number){
    displayValue = number;
    updateDisplay();
}

//Append first value if not null or 0
function appendFirstValue(number){
    displayValue += number;
    updateDisplay();
}


//change secondvalue if display is not a number and it's secval is still null
function changeSecondValue(number){
    displayValue = number;
    secondValue = "1";
    updateDisplay();
}


//appends secondvalue to display if secondv = 1 and firstop is filled in.
function appendSecondValue(number){
    displayValue += number;
    updateDisplay();
}

//Function to set the first Operator
// set currentdisplayvalue as firstvalue
// set operator as currentdisplayvalue
// make sure that if we click numbers after the operator, the valu will 
// stored in SecondValue

function setFirstOperator(operator){
    if (firstOperator == null){
    firstValue = displayValue;
    displayValue = operator;
    updateDisplay();
    firstOperator = operator;}
}


//function to call the math and set dp to equal
function equalFunction(){
    if (secondValue == null){
    } else {
    secondValue = displayValue;
    displayValue = quickMaths(firstValue,secondValue,firstOperator);
    updateDisplay();
    secondValue = null;
    firstValue = displayValue;
    firstOperator = null;
}}




//function to do the maths
function quickMaths(num1,num2,oper){
    if (oper == "+"){
        return parseInt(num1) + parseInt(num2);
    } if (oper == "-"){
        return num1 - num2;
    } if (oper == "*"){
        return num1 * num2;
    } if (oper == "/"){
        return num1 / num2;
    }
}


///we would want the numbers to fill in FirsValue,
// firstvalue : change when input is 0 : append if not 0?
//operand 
//second value
//equals
// first value becomes solution? 