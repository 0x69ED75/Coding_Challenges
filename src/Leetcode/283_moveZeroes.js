/*
https://leetcode.com/problems/move-zeroes/submissions/850891125/
Given an integer array nums, move all 0's to the end of it while maintaining the relative order
of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
 */
var moveZeroes = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length;i++){
        if(nums[i] === 0){
            count++
            nums.splice(i,1)
            i--
        }
    }
    for(let i = 0; i < count;i++){nums.push(0)}
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]))