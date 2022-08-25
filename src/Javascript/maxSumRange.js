console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))
/*
https://www.codewars.com/kata/583d10c03f02f41462000137
Given an array of integers (positive, negative or 0) and an array containing arrays of ranges, i.e. [[start1,end1],[start2,end2],...]
where start and end and index of the arr, calculate the sum value of each range, returning the maximum sum value.
 */

function maxSum(arr,range){
    let largestSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0 ; i < range.length; i++){
        let currentSum = 0;
        for(let j = range[i][0];  j <= range[i][1]; j++){
            currentSum += arr[j];
        }
        if(currentSum > largestSum){ largestSum = currentSum}
    }
    return largestSum
}