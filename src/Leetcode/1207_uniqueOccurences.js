/*
https://leetcode.com/problems/unique-number-of-occurrences/description/
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique,or false otherwise.

Input: arr = [1,2,2,1,1,3]
Output: true
Input: arr = [1,2]
Output: false
 */

var uniqueOccurrences = function(arr) {
    let map = new Map
    arr.forEach(val => map.set(val,map.get(val)+1||1))
    let vals = Array.from(map.values())
    return vals.length === vals.filter((value,index) => vals.indexOf(value) === index).length
};



console.log(uniqueOccurrences([1,2,2,1,1,3]))