/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014
Given an array of integers, return the sum of the two smallest integers.
 */
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
function sumTwoSmallestNumbers(numbers) {
    const x = Math.min(...numbers)
    numbers.splice(numbers.indexOf(x),1)
    const y = Math.min(...numbers)
    return x+y;
}