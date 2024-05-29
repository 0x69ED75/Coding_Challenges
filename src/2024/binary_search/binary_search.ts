//https://leetcode.com/problems/binary-search/description/
/*
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 */

function search(nums: number[], target: number): number {
    let min = 0
    let max = nums.length-1

    while(min <= max){
        let mid = Math.floor(((max+min) / 2))
        let curr = nums[mid]
        console.log(min,max,mid,curr)
        if(curr > target){
            max = mid-1
        }
        else if(curr < target){
            min = mid+1
        }
        else if(curr === target){
            return mid
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12]
    ,13))