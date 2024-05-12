// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
function twoSum(nums: number[], target: number): number[] {
    nums.filter(q => q > target)

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

// Less Naive approach
function twoSum_2(nums: number[], target: number): number[] {
    let map = []

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(map[diff] !== undefined && i !== map[diff]){
            return [i,map[diff]]
        }
        else{
            let val = nums[i]
            map[val] = i
        }
    }

};

console.log(twoSum_2([3,2,4],6))