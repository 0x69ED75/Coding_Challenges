/*
https://leetcode.com/problems/majority-element/description/
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.
 */
function majorityElement(nums: number[]): number {
    let n:number = nums.length/2
    let map = new Map()
    for(let i = 0; i < nums.length;i++){
        let x:number = map.get(nums[i])||0;
        if(x+1 >= n){return nums[i]}
        map.set(nums[i],x+1)
    }
};

console.log(majorityElement([6,5,5]))