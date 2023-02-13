/*
https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 */
function countOdds(low: number, high: number): number {
    return (low % 2 === 1|| high % 2 === 1) ? ((high-low)>>1)+1 : (high-low)>>1
};

console.log(countOdds(14,17))