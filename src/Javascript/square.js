/*
https://www.codewars.com/kata/54c27a33fb7da0db0100040e
Given a number, determine if it is a square number
 */
const isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
};

console.log(isSquare(25))