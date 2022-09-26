/*
https://leetcode.com/problems/jewels-and-stones/
given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
Each character in stones is a type of stone you have.
You want to know how many of the stones you have are also jewels.

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let map = new Map();
    stones.split("").forEach(stone => map.set(stone,map.get(stone)+1||1))
    jewels.split("").forEach(jewel => count += map.get(jewel)||0)
    return count || 0
};

console.log(numJewelsInStones("ebd","bbb"))