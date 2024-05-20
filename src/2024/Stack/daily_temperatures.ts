//https://leetcode.com/problems/daily-temperatures/description/
/*
Given an array of integers temperatures represents the daily temperatures,
return an array answer such that answer[i] is the number of days you have to wait
 after the ith day to get a warmer temperature. If there is no future day for which this is possible,
 keep answer[i] == 0 instead.
 */

function dailyTemperatures(temperatures: number[]): number[] {
    let hold = []
    let res = []

    for(let i = 0; i < temperatures.length;i++){
        let curr = temperatures[i]

        while(hold.length && curr > hold[hold.length-1][0]){
            let prev = hold.pop()
            let idx = prev[1]
            res[idx] = i-idx
        }
        res[i] = 0
        hold.push([curr,i])
    }
    return res
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))