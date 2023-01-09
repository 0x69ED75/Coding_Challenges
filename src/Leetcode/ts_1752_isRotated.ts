/*
https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.
 */
function check(nums: number[]): boolean {
    let pivot:number = 0
    let slicedArr: number[] = []

    for(let i = 0; i < nums.length-1; i++){
        if(nums[i] > nums[i+1]){
            if(pivot !== 0){return false}
            pivot = i+1
            slicedArr = nums.slice(pivot)
            nums = nums.slice(0,pivot)
        }
    }
    let joined = [...slicedArr,...nums]
    for(let i = 0 ; i < joined.length ; i++){
        if(joined[i] > joined[i+1]){
            return false
        }
    }
    return true
}

console.log(check([2,1,3,4]))
