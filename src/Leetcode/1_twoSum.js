/*
https://leetcode.com/problems/two-sum/
Given an array of integers and an integer "target" return indices of the two numbers such that
they add up to target.

Assume each array has one solution.
 */

var twoSum = function(nums, target) { // 96 ms solution
    for(let i = 0; i < nums.length; i++){
        let x = target - nums[i];
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] === x){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([3,3],6))