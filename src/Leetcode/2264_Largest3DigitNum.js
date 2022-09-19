/*
https://leetcode.com/problems/largest-3-same-digit-number-in-string
Given an integer, return the largest 3 digit number inside of this integer.
"6777133339" -> "777"
"2300019" -> "000"
 */
var largestGoodInteger = function(num) {
    let arr = num.toString().split("")
    let maxnum = "" // stores the highest digit that appears 3 times

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1] && arr[i] === arr[i+2]){
            if(num[i] > maxnum){
                maxnum = arr[i]
            }
            i+=2
        }
    }

    return maxnum + maxnum + maxnum // returns the max digit 3 times.
};

console.log(largestGoodInteger("6777133339"))