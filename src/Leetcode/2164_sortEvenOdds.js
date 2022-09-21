/*
https://leetcode.com/problems/sort-even-and-odd-indices-independently
given a 0-indexed integer array "nums". Rearrange the values of nums according to the following rules:
1) Sort the values at odd indices of nums in non-increasing order.
2) Sort the values at even indices of nums in non-decreasing order.
 */
var sortEvenOdd = function(nums) {
    let even = []
    let odd = []

    for(let i = 0 ; i < nums.length; i++){
        if(i % 2 === 0){even.push(nums[i])}
        else{odd.push(nums[i])}
    }
    even = even.sort( (a,b) => a-b)
    odd = odd.sort((a,b) => b-a)
    nums = []
    for(let i = 0; i < even.length; i++){
        even[i] !== undefined ? nums.push(even[i]) : nums.push()
        odd[i] !== undefined ? nums.push(odd[i]) :nums.push()
    }
    return nums
};

console.log(sortEvenOdd([5,39,33,5,12,27,20,45,14,25,32,33,30,30,9,14,44,15,21,999]))