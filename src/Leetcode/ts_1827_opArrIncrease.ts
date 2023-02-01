/*
https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/submissions/889690569/
You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

 Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1.
 An array of length 1 is trivially strictly increasing.
 */
function minOperations(nums: number[]): number {
    let count:number = 0;

    for(let i = 1; i < nums.length;i++){
        if(nums[i] <= nums[i-1]){
            let diff = (nums[i-1] - nums[i])+1
            count += diff
            nums[i] = nums[i] + diff
        }
    }

    return count
};

console.log(minOperations([1,1,1]))