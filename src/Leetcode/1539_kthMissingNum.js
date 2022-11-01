/*
https://leetcode.com/problems/kth-missing-positive-number/description/
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
 */

var findKthPositive = function(arr, k) {
    let pointer = 0;
    let x = []
    for(let i = 1 ; i < arr.length+k+1; i++){
        if(arr[pointer] === i){
            console.log(arr[pointer] + " " + i)
            pointer++
        }
        else{
            x.push(i)
        }
        if(x.length === k){
            break;
        }
    }
    return x[k-1]
};




console.log(findKthPositive([1,2,3,4],2))