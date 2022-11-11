/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. #
The relative order of the elements should be kept the same.

Return the length of this array.
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let flag = false;
        while(nums[i] === nums[i+1]){
            if(flag)nums.splice(i,1)
            else{i++}
            flag = true;
        }
    }
    return nums.length
};