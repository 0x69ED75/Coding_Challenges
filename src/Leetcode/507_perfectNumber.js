/*
https://leetcode.com/problems/perfect-number/description/
A perfect number is a positive integer that is equal to the sum of its positive divisors,
excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
 */


/*
This solution follows the mathematical logic that the divisors of a number (excluding 1 and the number itself) can be found by
finding the square root (sqrt) of the number, then attempting whole division of the number from 2 up to the floor value of sqrt (i).
If the division has no remainder, then both i and the result of the whole division are divisors.
This is much faster than iterating via brute force to find remainders, as we only iterate up to the sqrt of n
 */
var checkPerfectNumber = function(num) {
    let divisors = [1]
    let sqrt = Math.floor(Math.sqrt(num))
    for(let i = 2 ; i <= sqrt; i++){
        if(num % i === 0){
            divisors.push(i)
            divisors.push(num / i)
        }
    }
    return divisors.reduce((a,b) => a+b) === num && num !== 1
};

console.log(checkPerfectNumber(1))