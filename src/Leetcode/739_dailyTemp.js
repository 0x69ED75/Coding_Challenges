/*
https://leetcode.com/problems/daily-temperatures/description/
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i]
is the number of days you have to wait after the ith day to get a warmer temperature.
If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

var dailyTemperatures = function(temperatures) {
    let temps = []
    let vals = new Array(temperatures.length).fill(0)
    for(let i = 0; i < temperatures.length;i++){
        for(let j = 0; j < temps.length; j++){
            if(temperatures[i] > temps[j][0]){
                vals[temps[j][1]] = i - [temps[j][1]]
                temps.splice(j,1)
                j--
            }
        }
        temps.push([temperatures[i],i])
    }
    return vals
};