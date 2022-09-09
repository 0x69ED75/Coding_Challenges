/*
https://leetcode.com/problems/longest-harmonious-subsequence/
Given an array, return the longest harmonious subsequence.
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

This method for solving this problem requires putting the array into a map, and looking for the largest pair of harmonious subsequent values in this map.
Example:
Given the array: [1,2,1,3,0,0,2,2,1,3,3]
We can derive the map = { 1 => 3, 2 => 3, 3 => 3, 0 => 2 }

Now, loop through all the keys of this map until finding two keys which are one number apart, (such as 1 and 2, or 2 and 3)
These represent values where the difference between the maximum and minimum are 1 (a harmonious sequence)
Sum the values stored at these harmoniously sequenced keys, and if this value is more than currentMax, update currentMax.

After each harmoniously sequenced key is checked, currentMax will hold the length of the longest harmonious subsequence
 */


var findLHS = function(nums) { // 140 ms
    let valmap = new Map();
    nums.forEach(value => valmap.set(value,valmap.get(value)+1||1)) // puts each value in the array in a map, tracking the frequency of each value in the array.

    let currentMax = 0

    for(let key of valmap.keys()){ // Looping over each of the maps keys.
        if(valmap.has(key+1)){ // If the map contains the current key+1
            if(valmap.get(key) + valmap.get(key+1) > currentMax){currentMax = valmap.get(key) + valmap.get(key+1) } // adding together the value property of the current key and the key+1, if its more than currentMax,set currentMax.
        }
    }
    return currentMax
}

console.log(findLHS(
    [1,2,1,3,0,0,2,2,1,3,3]
))

/* naive solution, a lot slower (2000ms+) but works.

var findLHS = function(nums) {


    let countPos = 0;
    let countNeg = 0
    let currentMax = 0;

    for(let i = 0; i < nums.length; i++) {
        if(currentMax > nums.length - i){return currentMax}

        let flag = false;
        countPos = 1;
        countNeg = 1
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] - nums[j] === 1){
                flag = true
                countPos++
            }
            else if(nums[j] - nums[i] === 1){
                flag = true
                countNeg++
            }
            else if(nums[j] === nums[i]){
                countPos++;
                countNeg++;
            }
        }

        if(countPos > currentMax && flag){currentMax = countPos}
        if(countNeg > currentMax && flag){currentMax = countNeg}
    }
    return currentMax
}
 */