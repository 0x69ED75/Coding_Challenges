/*
https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
 */

var findGCD = function(nums) {
    let low = Number.MAX_SAFE_INTEGER
    let high = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > high){
            high = nums[i]
        }
        if(nums[i] < low){
            low = nums[i]
        }
    }
    let gcd = 1;

    for(let j = 2; j <= low; j++){
        if(low % j === 0 && high % j === 0){
            gcd = j;
        }
    }

    return gcd
};

console.log(findGCD([3,3]))