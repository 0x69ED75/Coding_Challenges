/*
https://leetcode.com/problems/power-of-three/
Given an integer n, return true if it is a power of three. Otherwise, return false.
 */
var isPowerOfThree = function(n) {
    while(n >= 1){
        if(n === 1){return true}
        n /= 3;
    }
    return false
};

console.log(isPowerOfThree(27))



/* Recursive solution
var isPowerOfThree = function(n) {
    if(n <= 0){return false}
    if(n % 3 === 0){return isPowerOfThree(n / 3)}
    return n === 1;
};
 */

