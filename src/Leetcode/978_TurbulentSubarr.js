/*
https://leetcode.com/problems/longest-turbulent-subarray/description/

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.

Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.
 */
var maxTurbulenceSize = function(arr) {
    let flag = arr[0] > arr[1];
    let max = 0
    let count = 1

    for(let i = 0; i < arr.length-1; i++){
        if(!flag){
            if(arr[i] > arr[i+1]){
                count++
                flag = true
            }
            else if(arr[i] === arr[i+1]){
                count = 0
            }
            else{
                count = 1;
            }
        }
        else if(flag){
            if(arr[i] < arr[i+1]){
                count++
                flag = false
            }
            else if(arr[i] === arr[i+1]){
                count = 0
            }
            else{
                count = 1
            }
        }

    if(count > max){max = count}
    }
    return max+1
};

console.log(maxTurbulenceSize([0,1,1,0,1,0,1,1,0,0]))