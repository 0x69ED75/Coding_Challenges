//https://leetcode.com/problems/3sum/description/
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a,b) => a-b)
    let resSet = new Set

    let res = []
    for(let i = 0; i < nums.length-1;i++){
        let target = -nums[i]
        let left = i+1
        let right = nums.length
        while (left < right){
            let sum = nums[left] + nums[right]
            if(sum === target){
                let str = JSON.stringify([nums[i],nums[left],nums[right]])
                if(!resSet.has(str)){
                    resSet.add(str)
                    res.push([nums[i],nums[left],nums[right]])
                }
                while(left < right && nums[left] === nums[left+1]){left++;}
                while(left < right && nums[right] === nums[right-1]){right--;}
                left++
                right++
            }
            else if(sum < target){left++}
            else (right--)
        }
    }
    return res
};


console.log(threeSum([-1,0,1,2,-1,-4]))