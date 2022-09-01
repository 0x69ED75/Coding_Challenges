/*
https://leetcode.com/problems/palindrome-number/submissions/
Given a number, return whether this number is a palindrome
 */

let isPalindrome = function(x) { // 274 ms solution.
    return x < 0 ? false : x === reverse(x)
};

let reverse = (x) =>{
    let digit, reversed = 0
    while(x){
        digit = x % 10 // removing taking last digit in x
        reversed = (reversed * 10) + digit // adding this digit to the current reverse digits.:  Ex. 123 → 1230 + 4 → 1234
        x = x/10|0 // removes right-most digit of x.
    }
    return reversed
}

console.log(isPalindrome(-121))