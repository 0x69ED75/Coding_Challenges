/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/
Write a program that can calculate the answer to a sum, written exclusively with function calls
e.g. seven(times(five())) returns 35
 */

/* each function will either return a digit, or, if it has a parameter it will run eval on the value passed as param.
the value passed as a param is a string containing the equation so far.
 e.g. for the equation seven(times(five))), by the time we get to seven, value will be : "*5"
 simply, I just append 7 to the beginning, then run eval against that string.*/
console.log(seven(times(five())))

function zero(value) {
    return value === undefined ? 0 : Math.floor(eval(0 + value));
}
function one(value) {
    return value === undefined ? 1 : Math.floor(eval(1 + value));
}
function two(value) {
    return value === undefined ? 2 : Math.floor(eval(2 + value));
}
function three(value) {
    return value === undefined ? 3 : Math.floor(eval(3 + value));
}
function four(value) {
    return value === undefined ? 4 : Math.floor(eval(4 + value));
}
function five(value) {
    return value === undefined ? 5 : Math.floor(eval(5 + value));
}
function six(value) {
    return value === undefined ? 6 : Math.floor(eval(6 + value));
}
function seven(value) {
    return value === undefined ? 7 : Math.floor(eval(7 + value));
}
function eight(value) {
    return value === undefined ? 8 : Math.floor(eval(8 + value));
}
function nine(value) {
    return value === undefined ? 9 : Math.floor(eval(9 + value));
}
// the value passed as param here is the final digit of the equation, I am just appending the correct operator to the start of it.
function plus(value) {
    return "+" + value;
}
function minus(value) {
    return "-" + value;
}
function times(value) {
    return "*" + value;
}
function dividedBy(value) {
    return "/" + value;
}

/*
Despite my solution working as intended, a solution using functional programming techniques should be used, such as the one below:

explanation of how below code works:
seven(times(five())) returns 35
five() returns 5 (since nothing is passed, operation is false)
times(5) is a function which returns the function (other_number) => other_number * 5;
seven( (other_number) => other_number * 5 ) executes 7 * 5 and returns 35

code:


const zero = (operation) => !operation ? 0 : operation(0);
const one = (operation) => !operation ? 1 : operation(1);
const two = (operation) => !operation ? 2 : operation(2);
const three = (operation) => !operation ? 3 : operation(3);
const four = (operation) => !operation ? 4 : operation(4);
const five = (operation) => !operation ? 5 : operation(5);
const six = (operation) => !operation ? 6 : operation(6);
const seven = (operation) => !operation ? 7 : operation(7);
const eight = (operation) => !operation ? 8 : operation(8);
const nine = (operation) => !operation ? 9 : operation(9);

const plus = (number) => (other_number) => other_number + number;
const minus = (number) => (other_number) => other_number - number;
const times = (number) => (other_number) => other_number * number;
const dividedBy = (number) => (other_number) => other_number / number;

console.log(seven(times(five())))

 */