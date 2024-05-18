//https://leetcode.com/problems/find-pivot-index/
/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.


 */
function pivotIndex(nums: number[]): number {
    let total = nums.reduce((a,b) => a+b)
    let Lsum = 0
    for(let i = 0; i < nums.length;i++){
        if((total -Lsum - nums[i]) === Lsum) return i
        else Lsum += nums[i]
    }
    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))