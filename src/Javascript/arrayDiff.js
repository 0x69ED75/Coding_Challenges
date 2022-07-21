console.log(arrayDiff([1,2], [1]));
/*
https://www.codewars.com/kata/523f5d21c841566fde000009/
Given 2 arrays, remove all values in array A which are also in array B
 */
function arrayDiff(a, b) {
    return a.filter(q => !b.includes(q));
}