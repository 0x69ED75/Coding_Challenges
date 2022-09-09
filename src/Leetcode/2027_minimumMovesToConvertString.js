/*
https://leetcode.com/problems/minimum-moves-to-convert-string
You are given a string s consisting of n characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of s are converted to 'O'.
 */

var minimumMoves = function(s) {
    let count = 0;
    let arr = s.split("")

    for(let i = 0 ; i < arr.length; i++ ){
        if(arr[i] === "X"){ // if an X is found in an array,
            count++ // increase count, since a move is required.
            i+=2 // It doesn't matter what next 2 values are; count is the same regardless, so just skip it.
        }
    }
    return count
};

console.log(minimumMoves("OOOO"))