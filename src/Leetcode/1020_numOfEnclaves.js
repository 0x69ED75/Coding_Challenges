/*
https://leetcode.com/problems/number-of-enclaves/description/
given a m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
 */

/*
My approach to this problem is to iterate once over the list, adding all possible "exits" (land cells on the edge of the grid) into an array, once visited these cells can be set to 0.
Any land cells not an 'exit' increases a counter by 1.

Now, a queue is created containing all exits.
Loop over each exit, and for each exit look for any neighbouring land cells.
if there exists a neighbouring land cell, decrease counter by 1 and enqueue it into possible 'exits' as we can now exit via this land cell (also set the value at this index in the grid to 0, so we never count it twice.)

Eventually all possible exit paths out the grid will be checked and the only land cells remaining in the counter are those not connected to any exit paths.

This approach can be likened to a Breadth-First Search
 */

var numEnclaves = function(grid) {
    let count = 0;
    let exits = []
    for(let i = 0; i < grid.length;i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1){
                if(i === 0 || i === grid.length-1 || j === 0 || j === grid[i].length-1){
                    exits.push([i,j])
                    grid[i][j] = 0
                }
                else{
                    count++
                }
            }
        }
    }

    let queue = [...exits]
    while(queue.length > 0){
        let curr = queue.shift()
        let row = curr[0]
        let col = curr[1]
        grid[row][col] = 0
        if(row-1 > 0 && grid[row-1][col] === 1){
            count--
            queue.push([row-1,col])
            grid[row-1][col] = 0
        }
        if(row+1 < grid.length-1 && grid[row+1][col] === 1){
            count--
            queue.push([row+1,col])
            grid[row+1][col] = 0
        }
        if(col-1 > 0 && grid[row][col-1] === 1){
            count--
            grid[row][col-1] = 0
            queue.push([row,col-1])
        }
        if(col+1 < grid[0].length-1 && grid[row][col+1] === 1){
            count--
            grid[row][col+1] = 0
            queue.push([row,col+1])
        }
    }
    return count
};

console.log(numEnclaves([[0,0,0,1,1,1,0,1,0,0],[1,1,0,0,0,1,0,1,1,1],[0,0,0,1,1,1,0,1,0,0],[0,1,1,0,0,0,1,0,1,0],[0,1,1,1,1,1,0,0,1,0],[0,0,1,0,1,1,1,1,0,1],[0,1,1,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,1,0,1],[1,0,1,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,1]]))
//console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]))