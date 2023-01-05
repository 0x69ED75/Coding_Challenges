/*
https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
There are some spherical balloons taped onto a flat wall that represents the XY-plane.
The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis.
 A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend.
 There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
 */
function findMinArrowShots(points: number[][]): number {
    points = points.sort((a,b) => a[0] - b[0]) // sort array by xstart incrementing
    let arrows:number = 1 // must fire at least one arrow

    // greedy search
    let curr:number[] = [points[0][0],points[0][1]] // this contains the current lower / upper bounds we can accept.
    for(let i = 1; i < points.length;i++){
        let x:number[] = points[i]

        if(x[0] > curr[1]){ // if the current lower bound is higher than what we can accept, we cannot accept it, increment arrows by 1.
            arrows++
            curr = [x[0],x[1]] // reset our current accept params
            continue
        }
        if(x[1] < curr[1]){ // if the Xend we have accepted is less than what we currently accept, move max accept param down
            curr[1] = x[1]
        }
    }

    return arrows
};

console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]))