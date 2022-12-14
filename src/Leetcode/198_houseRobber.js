/*
https://leetcode.com/problems/house-robber/
Given an integer array nums representing the amount of money of each house
 return the maximum amount of money you can rob tonight without alerting the police.

  it will automatically contact the police if two adjacent houses were broken into on the same night.
 */

var rob = function(nums) {
    let i = 0
    let j = 0
    for(let k = 0; k < nums.length; k++){
        let temp = i
        i = Math.max(j + nums[k], i)
        j = temp
    }
    return i
};
console.log(rob([2,7,9,3,1]))