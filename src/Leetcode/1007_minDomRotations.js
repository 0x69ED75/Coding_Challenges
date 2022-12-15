/*
https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/description/
In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino.

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same,
or all the values in bottoms are the same.

If it cannot be done, return -1.
 */

var minDominoRotations = function(tops, bottoms) {
    let topMap = [0,0,0,0,0,0,0]
    let botMap = [0,0,0,0,0,0,0]
    let same = [0,0,0,0,0,0,0]
    let minAmount = tops.length

    for(let i = 0; i < tops.length;i++){
        if(tops[i] !== bottoms[i]){
            topMap[tops[i]] = topMap[tops[i]]+1
            botMap[bottoms[i]] = botMap[bottoms[i]]+1
        }
        else{
            same[tops[i]] = same[tops[i]]+1
        }
    }

    for(let i = 1; i <= topMap.length;i++){
        if(topMap[i] + botMap[i] + same[i] === minAmount){
            return Math.min(topMap[i],botMap[i])
        }
    }
    return -1
};

console.log(minDominoRotations([1,2,1,1,1,2,2,2],[2,1,2,2,2,2,2,2]))