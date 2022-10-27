/*
https://leetcode.com/problems/find-the-middle-index-in-array/description/
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
 */


var findMiddleIndex = function(nums) {

    for(let i = 0; i < nums.length; i++){
        let a = 0;
        let b = 0;
        for(let j = 0; j < i; j++){
            a += nums[j]
        }
        for(let k = i+1; k < nums.length; k++){
            b += nums[k]
        }
        console.log(a + " " + b)
        if(a === b){return i}
    }
    return -1
};


console.log(findMiddleIndex([1,-1,4]))