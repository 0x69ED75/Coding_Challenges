/*
https://leetcode.com/problems/thousand-separator
Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Input: n = 987
Output: "987"

Input: n = 1234
Output: "1.234"
 */

var thousandSeparator = function(n) {
    if(n.toString().length < 4){return n.toString()} // if the integer is less than 4 digits, we can just return it as a string
    let arr = n.toString().split("") // parsing int as array
    let count = 0;
    for(let i = arr.length; i > 0; i--){ // iterating over number backwards.
        if(count === 3){ // if we iterate 3 times, insert a '.'
            count = 0
            arr.splice(i,0,'.')
        }
        count++
    }
    return arr.join("") // return arr as string.
};

console.log(thousandSeparator(999999991))