// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique
element appears at most twice. The relative order of the elements should be kept the same.

Return k after placing the final result in the first k slots of nums.


 */
function removeDuplicates(nums: number[]): number {
    for(let i = 2; i < nums.length;i++){
        if(nums[i] === nums[i-1]){
            if(nums[i] === nums[i-2]){
               let right = i+1;
               while(nums[right] === nums[i]){
                   right++
               }
               nums.splice(i,(right-i))
            }
        }
    }
    return nums.length
};
//console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))