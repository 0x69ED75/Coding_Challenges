/*
https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/description/
Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than
the sum of the non-included elements in such subsequence.

If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions,
 return the subsequence with the maximum total sum of all its elements.

Input: nums = [4,3,10,9,8]
Output: [10,9]
 */

var minSubsequence = function(nums) {
    nums.sort((a,b) => b-a)
    let sum = nums.reduce((a,b) => a+b)
    let additiveSum = 0;
    for(let i = 0; i < nums.length; i++){
        sum -= nums[i]
        additiveSum += nums[i]
        if(additiveSum > sum){
            return nums.slice(0,i+1)
        }
    }

};

console.log(minSubsequence([4,4,7,6,7]))