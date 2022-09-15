/*
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
Given an integer array nums and an integer k, return the number of pairs (i, j)
where i < j such that |nums[i] - nums[j]| == k.
 */

var countKDifference = function(nums, k) {
    // putting each value into a map, stored in pairs of key:count
    let numsMap = new Map()
    nums.forEach(number => numsMap.set(number,numsMap.get(number)+1 || 1))

    let count = 0;

    for(let i = 0; i < nums.length; i++){ // iterate over nums
        if(numsMap.has(nums[i]-k)){ // If the map has nums-k, it must also have nums+k, don't need to check for both.
            count += numsMap.get(nums[i]-k) // increment count by number of values at key nums[i]-k, this is the number of pairs of this match.
        }
    }
    return count
};

console.log(countKDifference([3,5,5,7,1,3],2))
