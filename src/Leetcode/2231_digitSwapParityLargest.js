/*
https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/submissions/
 */

var largestInteger = function(num) {
    let nums = num.toString().split("") // split num into array of digits.

    for(let i = 0; i < nums.length; i++){ // loop over every digit.
        let currentMax = nums[i]
        let even = nums[i] % 2 === 0 // true if num is even
        for(let j = i+1; j < nums.length ; j++){ // loop over every digit after i
            if(nums[j] > currentMax && (nums[j] % 2 === 0) === even){ // if num is more than currentMax and is the same parity as num[i] swap their positions.
                currentMax = nums[j]
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }

    }
    return nums.join("")

};

console.log(largestInteger(4173))