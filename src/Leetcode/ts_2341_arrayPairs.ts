/*
https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/
given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed
 and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
 */
function numberOfPairs(nums: number[]): number[] {
    let result:number[] = [0,0]
    let map = new Map<number,number>()

    for(let i = 0; i < nums.length;i++){
        map.set(nums[i],map.get(nums[i])+1||1)
    }
    let keys:number[] = Array.from(map.keys())

    for(let i = 0; i < keys.length;i++){
        let mapRes = map.get(keys[i])
        result[0] += Math.floor(mapRes/2)
        result[1] += Math.floor(mapRes % 2)
    }

    return result
}


console.log(numberOfPairs([1,1]))