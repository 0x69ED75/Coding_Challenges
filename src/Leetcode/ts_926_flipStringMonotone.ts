/*
https://leetcode.com/problems/flip-string-to-monotone-increasing/description/
A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

Return the minimum number of flips to make s monotone increasing.
 */
function minFlipsMonoIncr(s: string): number {

    let zeroes:number = 0
    let ones:number = 0
    let flips:number = Number.MAX_VALUE

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === "0"){
            zeroes++
        }
    }

    for(let i = 0; i < s.length; i++){
        flips = Math.min(flips, ones + zeroes);
        if(s[i] === "1"){ones++}
        else{zeroes--}
    }
    return Math.min(flips, ones + zeroes);
}

console.log(minFlipsMonoIncr("11011"))