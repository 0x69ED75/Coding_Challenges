/*
https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.
 */

var findLucky = function(arr) {
    let map = new Map
    arr.forEach(val => map.set(val,map.get(val)+1||1))
    let vals =  Array.from(map.keys())
    let max = -1
    for(let i = 0; i < vals.length;i++){
        if(vals[i] > max && vals[i] === map.get(vals[i])){
            max = vals[i]
        }
    }
    return max
};

console.log(findLucky([7,7,7,7,7,7,7]))