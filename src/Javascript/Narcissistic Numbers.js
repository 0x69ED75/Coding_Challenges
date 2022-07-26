console.log(narcissistic( 371 ));
/*
https://www.codewars.com/kata/5287e858c6b5a9678200083c
Return whether a given number is Narcissistic (https://en.wikipedia.org/wiki/Narcissistic_number)
 */

function narcissistic(value) {
    return value.toString().split("").map(q => Math.pow(q, value.toString().length)).reduce((a, b) => Number.parseInt(a) + Number.parseInt(b)) === value;
}
