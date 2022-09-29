/*
https://leetcode.com/problems/find-good-days-to-rob-the-bank
Given a 0-indexed array "security", and integer time, find the indices which meet this condition:
security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time]
 */

var goodDaysToRobBank = function(security, time) { // Low space complexity, but high tiem complexity
    let days = []
    outer:
    for(let i = time; i < security.length-time; i++){
        let current;
        for(let j = i-time; j <= i; j++){
            if(security[j] > current){continue outer}
            current = security[j]
        }
        let currentHigh;
        for(let k = i+time; k >= i; k--){
            if(security[k] > currentHigh){
                continue outer
            }
            currentHigh = security[k]
        }
        days.push(i)
    }
    return days
};

console.log(goodDaysToRobBank([1,2,3,4],1))