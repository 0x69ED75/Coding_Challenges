/*
https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.
 */

var countElements = function(nums) {
    nums.sort((a,b) => b-a)
    let min = nums[0]
    let max = nums[nums.length-1]
    nums = nums.slice(nums.lastIndexOf(min)+1,nums.indexOf(max))
    return nums.length
};

console.log(countElements([11,7,2,15]))