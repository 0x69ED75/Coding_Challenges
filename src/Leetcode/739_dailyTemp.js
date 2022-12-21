/*
https://leetcode.com/problems/daily-temperatures/description/
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i]
is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let result = new Array(temperatures.length).fill(0)

    for(let i = 0; i < temperatures.length;i++){
        while(stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]){ // .at(-1) checks end of arr (top of stack)
            let temp = stack.pop()
            result[temp] = i-temp
        }
        stack.push(i)
    }
    return result
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))