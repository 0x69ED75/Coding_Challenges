/*
https://leetcode.com/problems/sum-of-digits-in-base-k/
Given an integer n (in base 10) and a base k,
 return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number,
 and the sum should be returned in base 10.
 */
var sumBase = function(n, k) {
    let arr = []

    while(n >= 1){
        arr.unshift(Math.floor(n % k))
        Math.floor(n /= k)
    }

    return arr.reduce((prev, current) => prev + current,0)
};

console.log(sumBase(34,6))