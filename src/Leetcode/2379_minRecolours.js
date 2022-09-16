/*
https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/submissions/
given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B',
representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black,respectively.

You are also given an integer k, which is the desired number of consecutive black blocks.

In one operation, you can recolor a white block such that it becomes a black block.

Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

Input: blocks = "WBBWWBBWBW", k = 7
Output: 3

 */

var minimumRecolors = function(blocks, k) { // 74 ms solution O(n*k) time complexity
    let arr = blocks.split("")
    let min = Infinity

    for(let i = 0; i <= arr.length-k; i++){ // only need to run at blocks.length - k operations.
        let count = 0
        for(let j = i; j < i+k ; j++ ){ // checks index from i to i+k
            if(blocks[j] === 'W'){count++}
        }
        if(count < min){min = count}
    }
    return min
};

console.log(minimumRecolors("WBBWWBBWBW",7))

