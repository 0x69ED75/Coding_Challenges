/*
https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array
that occurs more than 25% of the time, return that integer.
 */

var findSpecialInteger = function(arr) {
    let quarter = Math.floor(arr.length / 4)
    let arrMap = new Map()

    arr.forEach(value => arrMap.set(value,arrMap.get(value)+1||1))
    let keyMap = Array.from(arrMap.keys())

    for(let i = 0; i < keyMap.length; i++){
        if(arrMap.get(keyMap[i]) > quarter){return keyMap[i]}
    }

};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))

/*

 */