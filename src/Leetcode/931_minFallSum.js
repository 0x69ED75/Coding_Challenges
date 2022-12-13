/*
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly
below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Example:
[2,1,3]
[6,5,4]
[7,8,9]
= 13 (path 1,5,7 or 1,4,8)
 */

/* follows the logic that if for each element from the second row onwards, we take the minimum of up to 3 values above it, and add it to the element,
When we have solved this for all values, the min value on the bottom row is the best possible route*/
var minFallingPathSum = function(matrix) {
    for(let i = 1; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = matrix[i][j] + arrayMin([matrix[i-1][j-1],matrix[i-1][j],matrix[i-1][j+1]])
        }
    }
    return Math.min(...matrix[matrix.length-1])
};

function arrayMin(arr){ // writing own Math.min which will exclude NaN values
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length;i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    return min
}

console.log(minFallingPathSum([[1,2,3,4,9,8],[1,2,3,4,9,8],[1,2,3,4,9,8],[1,2,3,4,9,8],[1,2,3,4,9,8],[9,9,8,7,6,1]]))