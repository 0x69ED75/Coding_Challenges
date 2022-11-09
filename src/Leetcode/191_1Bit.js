/*
https://leetcode.com/problems/number-of-1-bits/description/
Write a function that takes an unsigned integer and returns the number of
'1' bits it has (also known as the Hamming weight).
 */

/*
?. returns undefined instead of throwing an error if an object is null or undefined.
?? handles undefined calls by running things on
 */

var hammingWeight = function(n) {
    return n.toString(2).match(/1/g)?.length ?? 0
};
// ?. operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
console.log(hammingWeight(11111111111111111111111111111101))