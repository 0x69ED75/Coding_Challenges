/*
https://leetcode.com/problems/count-integers-with-even-digit-sum/
Given a positive integer num, return the number of positive integers less than
or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.
 */
var balancedStringSplit = function(s) {
    let substrings = []
    let sub = ""
    let lCount = 0
    let rCount = 0
    for(let i = 0; i < s.length; i++){
        sub += s.charAt(i)
        s.charAt(i) === 'L' ? lCount++ : rCount++
        if(lCount !== 0 && rCount === lCount){
            substrings.push(sub)
            sub = ""
            lCount = 0
            rCount = 0
        }
    }
    return substrings.length
};

console.log(balancedStringSplit("RLRRLLRLRL"))