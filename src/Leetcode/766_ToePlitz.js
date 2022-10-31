/*
https://leetcode.com/problems/toeplitz-matrix/
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
 */
var isToeplitzMatrix = function(matrix) {
    for(let i = 1; i < matrix.length;i++){
        for(let j = 1; j < matrix[i].length;j++){
            if(matrix[i][j] !== matrix[i-1][j-1]){
                return false
            }
        }
    }
    return true;
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
