/*https://leetcode.com/problems/smallest-even-multiple/description/
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.*/
function smallestEvenMultiple(n: number): number {
   return  n % 2 === 0 ? n : n * 2;
};