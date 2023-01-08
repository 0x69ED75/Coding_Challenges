/*
https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/
here is an m x n matrix that is initialized to all 0's.
There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

 Example:
 m = 2, n = 3, indices = [[0,1],[1,1]]

 0,0,0    => 1,2,1  =>  1,3,1
 0,0,0    => 0,1,0  =>  1,3,1

 Which gives 6 odds.
 */

function oddCells(m: number, n: number, indices: number[][]): number {
    let grid:number[][] = [...Array(m)].map(e => Array(n).fill(0))
    let count:number = 0

    for(let i = 0; i < indices.length;i++){
        let row:[number[][], number] = incrementRow(indices[i][0],grid)
        let col:[number[][], number] = incrementCol(indices[i][1],grid)
        grid = row[0]
        grid = col[0]
        count += row[1]
        count += col[1]
    }
    return count
};

function incrementRow(row:number,grid:number[][]):[number[][], number]{
    let count:number = 0
    for(let i = 0; i < grid[row].length;i++){
        grid[row][i] = grid[row][i]+1
        if(grid[row][i] % 2 === 1){count++}
        else{count--}
    }
    return [grid,count]
}

function incrementCol(col:number,grid:number[][]):[number[][], number]{
    let count:number = 0
    for(let i = 0; i < grid.length;i++){
        grid[i][col] = grid[i][col]+1
        if(grid[i][col] % 2 === 1){count++}
        else{count--}
    }
    return [grid,count]
}


console.log(oddCells(2,3,[[0,1],[1,1]]))