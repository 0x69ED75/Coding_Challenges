/*
https://leetcode.com/problems/largest-number-at-least-twice-of-others/
Return true if the largest number in the array is at least twice as large as any other number.
 */

var dominantIndex = function(nums) { // fast and concise solution.
    let sorted = [...nums].sort(function (a, b) {  return a - b;  });
    return (sorted[sorted.length-1] / 2) >= sorted[sorted.length-2] ? nums.indexOf(sorted[sorted.length-1]) : -1
};

console.log(dominantIndex([1,2,16,35,44,100,27,0]))

/* JS dependent solution: 100ms
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max)
    nums.splice(maxIndex,1)
    let max2 = Math.max(...nums)
    return (max / 2) >= max2 ? maxIndex : -1
};
 */