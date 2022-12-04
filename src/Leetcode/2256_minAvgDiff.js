/*
https://leetcode.com/problems/minimum-average-difference/description/
You are given a 0-indexed integer array nums of length n.

The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums
and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.
 */

var minimumAverageDifference = function(nums) {

    let min = Infinity
    let minIndex = 0
    let arrAvg = 0
    let avgIndex = 0
    let diff = 0
    let left = 0;
    let right = nums.reduce((a,b) => a + b,0)

    for(let i = 0; i < nums.length; i++){

        left += nums[i]
        right -= nums[i]

        if(i+1 !== nums.length) {
            arrAvg = Math.floor( right / (nums.length - (i + 1)))
            avgIndex = Math.floor(left / (i + 1))
            diff = Math.abs(avgIndex - arrAvg)
        }
        else{
            diff = (nums.reduce((a,b) => a + b,0) / nums.length)
        }

        if(diff < min){min = diff;minIndex=i}
    }
    return minIndex
};


console.log(minimumAverageDifference([0,1,0,1,0,1]))