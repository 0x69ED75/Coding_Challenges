/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array
Given a sorted array, filter out duplicate values in-place
 */

var removeDuplicates = function(nums) {
    let curr = Infinity;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === curr){
            nums.splice(i,1)
            i--
        }
        else{
            curr = nums[i]
        }
    }
    return nums
};

// O(1) memory solution
var removeDuplicatesO1Mem = function(nums) {
    for(let i = 0; i < nums.length; i++){
        while(nums[i] === nums[i+1]){
            nums.splice(i,1)
        }
    }
    return nums.length
};

console.log(removeDuplicates([-1,0,0,0,0,3,3]))