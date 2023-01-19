/*
https://leetcode.com/problems/subarray-sums-divisible-by-k/
Given an integer array nums and an integer k, return the number of non-empty sub arrays that have a sum divisible by k.

A subarray is a contiguous part of an array.
 */
function subarraysDivByK(nums: number[], k: number): number {

    let map:number[] = new Array(k).fill(0)
    map[0] = 1

    let cumulativeSum:number= 0
    let count=0

    for(let i = 0; i < nums.length;i++){
        cumulativeSum += nums[i]
        let remainder:number = cumulativeSum%k
        if(remainder < 0){remainder+=k}
        count+=map[remainder]
        map[remainder]++
    }

    return count
};

console.log(subarraysDivByK([4,5,0,-2,-3,1],5))