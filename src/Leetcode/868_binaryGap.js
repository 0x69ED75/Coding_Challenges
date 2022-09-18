/*
https://leetcode.com/problems/binary-gap/
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n.
If there are no two adjacent 1's, return 0.
Two 1's are adjacent if there are only 0's separating them
 */
var binaryGap = function(n) {
    let binaryArr = n.toString(2).split("")
    let max = 0;
    let count = 0;
    let flag = false;

    for(let i = 0 ; i < binaryArr.length; i++){
        if(binaryArr[i] === '1'){
            if(count > max){max = count}
            count = 1
        }
        else if(binaryArr[i] === '0'){count++}
        console.log(`${binaryArr[i]} | ${flag} | ${count} `)
    }
    return max
};

console.log(binaryGap(6))