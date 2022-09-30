/*
https://leetcode.com/problems/number-of-ways-to-split-array/description/
   given a 0-indexed integer array nums of length n:
   return how many times the array can be split and meet the following conditions:
       - Sum of the first i+1 elements is greater than or equal to the sum of the last n-i-1 elements
       - There is at least one element to thr right of i, suh that 0 <= i < n - 1
 */

var waysToSplitArray = function(nums) {

    let count = 0;
    let sum2nd = nums.reduce((prev,current) => prev + current);
    let sum1st = 0;
    for(let i = 0; i < nums.length-1; i++){
        sum1st += nums[i];
        sum2nd -= nums[i];
        if(sum1st >= sum2nd){count++}
    }
    return count
};

console.log(waysToSplitArray([2,3,1,0]))