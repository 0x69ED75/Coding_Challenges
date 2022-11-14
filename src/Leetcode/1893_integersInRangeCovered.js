/*
https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/description/
You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between start i and end i.

Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise

Example:
Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
Output: true
Explanation: Every integer between 2 and 5 is covered:
- 2 is covered by the first range.
- 3 and 4 are covered by the second range.
- 5 is covered by the third range
 */

/*
This function initialises an array "rangeLook" of size "Right", filling all values with X.
Then I loop through all values "left" to right" initialising these with their actual values, instead of being 'X'
I initialise N, a variable holding the number of non-X values in rangeLook,
Then look through each range of values, starting at min, and ending at max of each range, and looking at the index in the array for this number.
If it isn't undefined and the value at this index isn't X, N is reduced by 1, and this value is changed to 'X' in the array.

By the end of these steps, if the condition is met, N should be 0 and the array should only contain 'X'

 */

var isCovered = function(ranges, left, right) {
    let rangeLook = new Array(right).fill('X')
    for(let i = left; i <= right; i++){
        rangeLook[i] = i
    }

    let n = right - left +1

    for(let i = 0; i < ranges.length; i++){
        for(let j = ranges[i][0]; j <= ranges[i][1]; j++){
            if(rangeLook[j] !== 'X' && rangeLook[j] !== undefined){
                n--;
                rangeLook[j] = 'X'
            }
        }
    }

    return n === 0;
};

// slightly improved version; removed .fill, now rangelook[i] is undefined unless it is a value between left or right, at which case it is set to 1
var isCoveredImproved = function(ranges, left, right) {
    let rangeLook = new Array(right)
    for(let i = left; i <= right; i++){
        rangeLook[i] = 0
    }

    let n = right - left +1


    for(let i = 0; i < ranges.length; i++){
        for(let j = ranges[i][0]; j <= ranges[i][1]; j++){
            if(n === 0){return true}
            if(rangeLook[j] === 0){
                n--;
                rangeLook[j] = '1'
            }
        }
    }

    return n === 0;
};


console.log(isCoveredImproved([[1,2],[3,4],[5,6]],2,5))