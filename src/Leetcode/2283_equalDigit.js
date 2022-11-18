/*
https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/submissions/845895056/
You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.
 */
var digitCount = function(num) {
    let map = new Map
    let arr = num.toString().split("").map(Number)
    arr.forEach(q => map.set(q,map.get(q)+1||1))


    for(let i = 0 ; i < num.length; i++){
        if(arr[i] !== map.get(i) && !(arr[i] === 0 && map.get(i) === undefined)){
            return false
        }
    }
    return true;
};

console.log(digitCount("8"))