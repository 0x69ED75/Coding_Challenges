/*
https://leetcode.com/problems/kth-missing-positive-number/description/
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
 */

var findKthPositive1 = function(arr, k) {
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

/*
O(N) solution which follows the logic:
     - if every element in the array > k , the answer would be k.
     - for every element <= k , you need to increment k.
Since the array is increasing order, return k when i > k

Best understood through examples:

- if the array starts with 8, and we want to find the 5th missing element, we return 5.
      - this is because the missing nums are [1,2,3,4,5,6,7], and the kth missing element is 5.

 - If the array is [2,3,8] and k = 6, missing nums are [1,4,5,6,7,9]
    - when arr[i] = 2, increment k. k = 7
    - when arr[i] = 3 increment k. k = 8.
    - when arr[i] = 8, k = 9.
We reached end of list, return 9.

keep incrementing K unless all elements in array are less than K,
with this K shifts by one for each element <= K found in the list.
 */
var findKthPositive = function(arr, k) {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= k){k++}
        else{break}
    }
    return k
};

console.log(findKthPositive([2,3,4,7,11],5))