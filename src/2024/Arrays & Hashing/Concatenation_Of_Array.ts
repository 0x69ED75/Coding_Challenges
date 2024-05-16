//https://leetcode.com/problems/concatenation-of-array/description/
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i]
// and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

function getConcatenation(nums: number[]): number[] {
    let ans = []
    let length = nums.length
    for(let i = 0; i < nums.length;i++){
        ans[i] = nums[i]
        ans[i+length] = nums[i]
    }
    return ans
};

console.log(getConcatenation([1,3,2,1]))