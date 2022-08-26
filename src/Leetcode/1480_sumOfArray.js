/*
https://leetcode.com/problems/running-sum-of-1d-array
Given an array nums,
 We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums. */

var runningSum = function(nums) {
    return nums.map((value, i, array) => {
        return array[i] += array[i-1] ? array[i-1] : 0
    })
};

console.log(runningSum([1,2,3,4]))