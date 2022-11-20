/*
https://leetcode.com/problems/relative-sort-array/description/
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
 Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
 */
var relativeSortArray = function(arr1, arr2) {
    let map = new Map
    let arr = []
    arr1.forEach(val => arr2.includes(val) ? (map.set(val,map.get(val)+1||1)) : arr.push(val))
    arr.sort((a,b) => a-b)
    for(let i = arr2.length-1 ; i >= 0 ;i--){
        for(let j = 0; j < map.get(arr2[i]); j++){
            arr.unshift(arr2[i])
        }
    }
    return arr
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))