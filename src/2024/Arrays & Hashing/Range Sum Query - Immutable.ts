//https://leetcode.com/problems/range-sum-query-immutable/description/

/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive
 (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 */

`class NumArray {
    numArray:number[] = []

    constructor(nums: number[]) {
        this.numArray = nums
    }

    sumRange(left: number, right: number): number {
        let sum = 0
        for(let i = left ; i < right+1; i++){
            sum += this.numArray[i]
        }
        return sum
    }
}
`