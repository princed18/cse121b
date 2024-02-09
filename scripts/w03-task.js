/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {

    return number1 + number2;

}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector('#sum').value= add(addNumber1, addNumber2);

}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1,number2){
    return number1- number2;
}

function subtractNumbers() {
    let subtractNumbe1 = Number(document.querySelector("#subtract1").value);
    let subtractNumbe2 = Number(document.querySelector("#subtract2").value);
    document.querySelector('#difference').value = subtract(subtractNumbe1, subtractNumbe2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (x,y) => x * y;

const  multiplyNumbers =() => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = multiply(factor1,factor2);
    document.getElementById("product").value=product;
};
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x,y) => x/y;

const divideNumbers = ()=>{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value= quotient;

};
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
// innitializing total
function getTotal(){
let total =0;
//input 
let subtotal =parseFloat(document.getElementById("subtotal").value);

// proccessing
if (document.getElementById("member").checked){
total= subtotal*0.80//adding a discount
}else {
    total=subtotal

}

//output
document.getElementById("total").textContent=total.toFixed(2);
}

document.getElementById("getTotal").addEventListener("click", getTotal);



/* ARRAY METHODS - Functional Programming */
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let arrayVariable = document.getElementById("array");

arrayVariable.textContent = numberArray.join(", ");

/* Output Source Array */
arrayVariable.textContent = numberArray.join(", ");

/* Output Odds Only Array */
function oddNumber(number) {
    return number % 2 !== 0; 
}

let oddNumbers = numberArray.filter(oddNumber);

//getting html 
let oddsVariable = document.getElementById("odds");

// inserting odd numbers to arrays
oddsVariable.textContent = oddNumbers.join(", ");



/* Output Evens Only Array */
function evenNumber(number) {
    return number % 2=== 0; 
}

let evenNumbers = numberArray.filter(evenNumber);

//getting html 
let evenVariable = document.getElementById("evens");

// inserting evens numbers to arrays
evenVariable.textContent = evenNumbers.join(", ");


/* Output Sum of Org. Array */
let sumOfArray = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let sumOfArrayElement = document.getElementById("sumOfArray");


sumOfArrayElement.textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let multiplied = numberArray.map(number => number * 2);


let multipliedElement = document.getElementById("multiplied");


multipliedElement.textContent = multiplied.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numberArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let sumOfMultipliedElement = document.getElementById("sumOfMultiplied");

    l
sumOfMultipliedElement.textContent = sumOfMultiplie.join(", ");