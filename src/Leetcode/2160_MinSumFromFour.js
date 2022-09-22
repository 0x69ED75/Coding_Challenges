/*
https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
You are given a positive integer num consisting of exactly four digits.
Split num into two new integers new1 and new2 by using the digits found in num.

 Example:
Input: num = 2932
Output: 52
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
 */
var minimumSum = function(num) {
    let x = num.toString().split("").sort((a,b) => a-b)
    let a = [x[0]+x[2]].map(Number)
    let b = [x[1]+x[3]].map(Number)
    return a[0] + b[0]
};

console.log(minimumSum(4009))