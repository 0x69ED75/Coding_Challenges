/*
https://leetcode.com/problems/remove-element
Given an array, remove a given element in the array in-place.
 */

// solution 1: Javascript-Dependent
// var removeElement = function(nums, val) {  // 90 ms solution
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             nums.splice(i,1)
//             i--;
//         }
//     }
//     return nums
// };

/* Language agnostic solution which doesn't rely on in-built methods.
   returns the array in-place where the filtered elements are stored up to index `k`
   This allows the sorting of elements in languages where the length of arrays can't be changed.
 */
var removeElement = function(nums, val) { // 110ms solution
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

console.log(removeElement([5,3,6,3,7],3))
/*
Example of execution for array [5,3,6,3,7]
// nums[i] = 5
[5,3,6,3,7]
k = 0

// nums[i] = 3
[5,3,6,3,7]
k = 1

// nums[i] = 6
[5,6,6,3,7]
k = 2

// nums[i] = 3
[5,6,6,3,7]
k = 2

// nums[i] = 7
[5,6,7,3,7]
k = 3

Final Values:
nums = [5,6,7,3,7]
k = 3

 */