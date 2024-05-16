//https://leetcode.com/problems/range-sum-query-immutable/description/

/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive
 (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 */



class NumArray {
    prefixArr:number[] = []

    constructor(nums: number[]) {
        let sum = 0
        for(let i = 0; i < nums.length;i++){
            sum += nums[i]
            this.prefixArr[i] = sum
        }
    }

    sumRange(left: number, right: number): number {
        return this.prefixArr[right] - (this.prefixArr[left-1] || 0)

    }
}


