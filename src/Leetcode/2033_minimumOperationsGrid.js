/*
https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/
Given a 2D integer grid of size m x n and an integer x.
In one operation, you can add x to or subtract x from any element in the grid.

A uni-value grid is a grid where all the elements of it are equal.

Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.
 */
// this solution works by translating the grid into a 1d array, sorting and finding the difference between all values and median
var minOperations = function(grid, x) {
    let grid1D = [].concat(...grid).sort((a,b) => a-b)
    if(grid1D.length === 1){return 0}
    let n = grid1D.length;
    let medianIndex = Number.parseInt(n/2) // rounding median index
    let median = grid1D[medianIndex]

    let count = 0;
    for(let i = 0; i < n; i++){ // for each number in the grid
        let xNum = Math.abs(grid1D[i] - median) // find the difference between the number and the median.
        if(xNum % x !== 0){return -1} // if the difference isn't divisible by x, return -1
        count += (xNum / x)
    }

    return count;
};

console.log(minOperations([[52,302,202,52,252,452],[702,52,452,102,52,852],[302,202,752,702,702,402],[502,52,52,302,452,152],[452,252,2,502,702,452],[402,652,702,402,752,452]]
    ,741))