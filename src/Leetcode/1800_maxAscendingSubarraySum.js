/*
https://leetcode.com/problems/maximum-ascending-subarray-sum/
Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where
 l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.
 */

var maxAscendingSum = function(nums) {
    let currentMax = 0;
    for(let i = 0; i < nums.length; i++){
        let count = 0
        for(let j = i; j < nums.length; j++){
            if(j !== i && nums[j] <= nums[j-1]){
                break;
            }
            count += nums[j]
        }
        if(count > currentMax){currentMax = count}
    }
    return currentMax
};

console.log(maxAscendingSum([3,6,10,1,8,9,9,8,9]))