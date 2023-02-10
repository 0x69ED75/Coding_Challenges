/*
https://leetcode.com/problems/as-far-from-land-as-possible/
Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance.
If no land or water exists in the grid, return -1.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 */
function maxDistance(grid: number[][]): number {
    let result:number = -1;
    let arr:number[][][] = [[],[]];

    for(let i = 0; i < grid.length;i++){// populate array where index 0 is water elements and index 1 land elements
        for(let j = 0; j < grid[i].length;j++){
            arr[grid[i][j]].push([i,j])
        }
    }
    if(arr[0].length === 0 || arr[1].length === 0){
        return result
    }

    for(let i = 0 ; i < arr[0].length;i++){ // iterate over water elements
        let min:number = Number.MAX_VALUE
        for(let j = 0; j < arr[1].length;j++){ // iterate over land elements
            let distance:number = (Math.abs(arr[0][i][0] - arr[1][j][0]) + Math.abs(arr[0][i][1] - arr[1][j][1])) // finding distance between each water cell and each land cell. Use absolute value so that going backwards in the matrix has no negative affect
            if(distance < min){min = distance}
        }
        if(min > result){result = min} // take the largest distance found
    }
    return result;
}


console.log(maxDistance(
    [
        [1,0,1],
        [0,0,0],
        [1,0,1]
    ]))
