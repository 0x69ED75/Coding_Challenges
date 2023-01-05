/*
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:
x if x >= 0.
-x if x < 0.
 */
function countKDifference(nums: number[], k: number): number {
    let count:number = 0

    for(let i = 0; i < nums.length;i++){
        for(let j = i+1; j < nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) === k || Math.abs(nums[j] - nums[i]) === k){
                count++
            }
        }
    }
    return count
}


console.log(countKDifference([1,2,2,1],1))