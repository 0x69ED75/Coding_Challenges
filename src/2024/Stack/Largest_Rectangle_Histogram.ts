//https://leetcode.com/problems/largest-rectangle-in-histogram/description/
/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
return the area of the largest rectangle in the histogram.
 */

function largestRectangleArea(heights: number[]): number {
    let histogramLength = heights.length
    let maximum = 0
    let stack:number[][] = [[0,heights.shift()]] //[index,height]
    let idx = 0
    while(heights.length){
        idx++
        let curr = heights.shift()

        stack.push([idx,curr])
        console.log(stack,curr,stack.at(-2)[1],maximum)

        if(stack.length > 1 && (curr < stack.at(-2)[1])){
            console.log("ran")
            let currIdx = idx
            stack.pop()
            while(stack.length && (curr < stack.at(-1)[1])){
                console.log("inside ",stack)
                let curr = stack.pop()
                let area = curr[1] * (idx - curr[0])
                console.log(area,maximum,curr,idx, (curr[1] * (idx - curr[0])))
                maximum = Math.max(maximum,area)
                currIdx = curr[0]
            }
            stack.push([currIdx,curr])
            console.log("after:" ,stack)
        }
    }
    // anything left in stack can be extended to end of histogram
    while(stack.length){
        let curr = stack.pop()
        maximum = Math.max(maximum,curr[1] * (histogramLength-curr[0]))
    }
    return maximum
};

console.log(largestRectangleArea([3,6,5,7,4,8,1,0]
))