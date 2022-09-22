/*
https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
 */

var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0
    for(let i = 0; i < startTime.length; i++){
        if(endTime[i] >= queryTime && startTime[i] <= queryTime){count++}
    }
    return count
};

console.log(busyStudent([9,8,7,6,5,4,3,2,1],[10,10,10,10,10,10,10,10,10],5))