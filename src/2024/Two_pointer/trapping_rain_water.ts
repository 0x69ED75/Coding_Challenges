// https://leetcode.com/problems/trapping-rain-water/
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
function trap(height: number[]): number {
    let maxL = height[0]
    let maxR = height[height.length-1]
    let L = 0
    let R = height.length-1
    let total = 0

    while(L !== R){
        if(maxL > maxR){
            R--
            let rightVal = height[R]
            console.log(L,R,maxL,maxR,rightVal)
            let sum = Math.min(maxL,maxR) - rightVal
            console.log(sum)
            if (sum > 0 ) total += sum
            maxR = Math.max(rightVal,maxR)
        }
        else{
            L++
            let leftVal = height[L]
            console.log(L,R,maxL,maxR,leftVal)
            let sum = Math.min(maxL,maxR) - leftVal
            console.log(sum)
            if (sum > 0 ) total += sum
            maxL = Math.max(leftVal,maxL)
        }

    }
    return total
};
console.log(trap([4,2,0,3,2,5]))