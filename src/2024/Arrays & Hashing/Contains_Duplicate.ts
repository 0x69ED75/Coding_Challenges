// https://leetcode.com/problems/contains-duplicate/
/*Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct. */

function containsDuplicate(nums: number[]): boolean {
    let x = []
    for(let i = 0; i < nums.length;i++){
        let curr = nums[i]
        if(!x[curr]){
            x[curr] = 1
        }
        else{
            return true
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]))