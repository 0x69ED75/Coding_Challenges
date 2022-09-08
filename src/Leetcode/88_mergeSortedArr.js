/*
https://leetcode.com/problems/merge-sorted-array
Given two sorted arrays, merge these arrays into a singular, sorted array in-place.

The method I chose for this solution works in the following way:
Since the nums1 array passed as parameter will have extra zeroes, as it needs to be sorted in place,
This problem can be solved backwards by looking into both arrays, finding the largest value and placing this at the end of array 1.

So, given the arrays [1,2,3,0,0,0] and [2,5,6],
The largest number between them is 6, therefore, the array becomes [ 1, 2, 3, 0, 0, 6 ]
Then, the next largest is 5, so the array becomes [ 1, 2, 3, 0, 5, 6 ]
This is repeated until all values in array 2 have been placed in array 1.
 */


var merge = function(nums1, m, nums2, n) {

    // all pointers have 1 subtracted from them to appropriately represent arrays
    let pointer = (m+n)-1 // this pointer is initialised to the size of both arrays
    let nums1Pointer = m-1 // this pointer is initialised to the size of arr 1
    let nums2Pointer = n-1 // this pointer is initialised to the size of arr 2

    while(nums2Pointer >= 0){

        if(nums1[nums1Pointer] > nums2[nums2Pointer]){ // if the current indexed value in arr1 > the indexed number in arr 2
            nums1[pointer] = nums1[nums1Pointer] // set the value at pointer to equal the current index arr1 value.
            nums1Pointer--; // decrement num1 pointer.
        }

        else{
            nums1[pointer] = nums2[nums2Pointer] // set value at pointer to equal value at current index of arr2
            nums2Pointer--; // decrement num2 pointer
        }

        pointer-- ; // decrement pointer to move to the next value.
    }
};

merge([1,3,5,7], m = 3, nums2 = [2,4,6], n = 3)
