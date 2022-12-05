/*
https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/
Given an array nums of integers, return how many of them contain an even number of digits.
 */
var findNumbers = function(nums) {
    return nums.map(String).filter(q => q.length % 2 === 0).length
};

console.log(findNumbers([12,345,2,6,7896]))