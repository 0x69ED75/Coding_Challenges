/*
https://leetcode.com/problems/find-pivot-index
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers
 strictly to the left of the index is equal to the sum of all
 the numbers strictly to the index's right.
 */

var pivotIndex = function(nums) {
    let half1 = []
    let half2 = [...nums]

    for(let i = 0; i < nums.length; i++){
        let current = half2.shift()

        let sumOne = half1.reduce((prev, current) => prev + current,0)
        let sumTwo = half2.reduce((prev, current) => prev + current,0)


        half1.push(current)

        if(sumOne === sumTwo){return i}
    }

    return -1
};

console.log(pivotIndex([1,7,3,6,5,6]))

/*
var pivotIndex = function(nums) {

    for(let i = 0; i < nums.length; i++){
        let firstHalf = nums.slice(0,i)
        let secondHalf = nums.slice(i+1)

        let sumOne = firstHalf.reduce((prev, current) => prev + current,0)
        let sumTwo = secondHalf.reduce((prev, current) => prev + current,0)

        if(sumOne === sumTwo){return i}
    }

    return -1
};
 */
