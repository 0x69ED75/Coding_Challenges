/*
https://leetcode.com/problems/binary-search/
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 */

var search = function(nums, target) {
    let low = 0
    let high = nums.length-1

    while(low <= high ){
        let mid = Math.floor((low + high) / 2)
        let x = nums[mid]
        if(x === target){
            return mid;
        }
        if(x < target){
            low = mid + 1
        }
        else{
            high = mid-1;
            console.log(high)
            console.log(low)
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12],9))