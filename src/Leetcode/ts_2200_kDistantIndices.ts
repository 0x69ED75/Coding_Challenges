/*
https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/
given a 0-indexed integer array nums and two integers key and k.
 A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.

Return a list of all k-distant indices sorted in increasing order.
 */

// Brute force approach which could potentially be improved with a two-pointer approach
function findKDistantIndices(nums: number[], key: number, k: number): number[] {

    let kIndexes:number[] = []
    let res:number[] = []

    for(let i = 0; i < nums.length;i++){
        if(nums[i] === key){
            kIndexes.push(i)
        }
    }

    for(let i = 0; i < nums.length;i++){
        for(let j = 0 ; j < kIndexes.length; j++){
            if(Math.abs(i - kIndexes[j]) <= k){
                res.push(i)
                break
            }
        }
    }

    return res
};

console.log(findKDistantIndices([3,4,9,1,3,9,5],9,1))