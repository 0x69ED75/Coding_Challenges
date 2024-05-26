//https://leetcode.com/problems/container-with-most-water/
/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
 */
function maxArea(height: number[]): number {
    let left = 0
    let right = height.length-1
    let max = 0

    while(left < right ){
        let L = height[left]
        let R = height[right]
        let min = Math.min(L,R)
        max = Math.max(max,(min*(right-left)))

            // Can we increase our area by moving the left or right pointer??
            // Move the one pointing at a smaller rectangle in an attempt to maximise area
            if(L < R){
                left++
            }
            else{
                right--
            }

    }
    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))