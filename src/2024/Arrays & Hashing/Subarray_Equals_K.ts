//https://leetcode.com/problems/subarray-sum-equals-k/
/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array
 */

function subarraySum(nums: number[], k: number): number {
    let subs = 0

    for(let i = 0; i < nums.length;i++){
        let sum = nums[i]
        if (sum === k) subs += 1

        for(let j = i-1; j >= 0; j--){
            sum += nums[j]
            if (sum === k) subs += 1
        }
    }

    return subs
};

console.log(subarraySum([1,2,3],3))