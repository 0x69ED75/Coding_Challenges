/*
https://www.codewars.com/kata/526571aae218b8ee490006f4
Convert a given integer to its binary representation and sum the number of '1' that appear in this binary number.
 */

const countBits = function (n) {
    return Number.parseInt(n.toString(2).split("").reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)));
};

console.log(countBits(5))