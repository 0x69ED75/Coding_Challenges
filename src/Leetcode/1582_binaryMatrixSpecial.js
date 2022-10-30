/*
https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/
Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1
and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 */

/*
My method of solving this problem requires:

first creating a map of all valid columns (columns which have a single 1)
This map will be in the form: (colNumber:true/false)

Then, iterate over each row.
Store the column index of the first 1 under the var 'index'
If we run into another 1 after this, continue to the next iteration, this is not a valid row.
If we don't run into another 1, this row is valid, check the column map, using the index variable created earlier to see if column is valid.

If both are valid, increment number of 'special' positions.

This method uses only two for loops, but time complexity is affected by map lookups.
 */

var numSpecial = function(mat) {
    let colMap = new Map();
    let special = 0;

    col:
        for(let i = 0; i < mat[0].length; i++){
            let flag = false;
            for(let k = 0 ; k < mat.length; k++){
                if(mat[k][i] === 1){
                    if(flag){
                        continue col
                    }
                    flag = true;
                }
            }
            flag ? colMap.set(i,true) : colMap.set(i,false)
        }


    outer:
    for(let i = 0; i < mat.length; i++){
        let flag = false
        let index = 0
        for(let j = 0; j < mat[i].length; j++){
            if(mat[i][j] === 1){
                if(flag){
                    continue outer;
                }
                index = j
                flag = true
            }
        }
        if(flag){
            if(colMap.get(index)){
                special++
            }
        }
    }

    return special;
}

console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]))
//console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]))
//console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]))
//console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]))