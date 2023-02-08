/*
https://leetcode.com/problems/jump-game-ii/submissions/894359240/
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i.
 In other words, if you are at nums[i], you can jump to any nums[i + j] where:
0 <= j <= nums[i] and
i + j < n

Return the minimum number of jumps to reach nums[n - 1].  */
function jump(nums: number[]): number {
    let count:number = 0
    let furthest:number = 0
    let pointer:number = 0

    for(let i = 0; i < nums.length-1;i++){
        furthest = Math.max(furthest,i + nums[i])
        if(i === pointer){
            pointer = furthest
            count++
        }
    }

    return count
}

console.log(jump([1,1,1,1]))