# https://leetcode.com/problems/equal-row-and-column-pairs/
'''
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
'''
from typing import List


class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        count = 0
        row = {}
        for i in range (0, len(grid)):
            currRow = ""
            for j in range (0, len(grid)):
                currRow += str(grid[i][j]) + " "
            if row.get(currRow):
                row[currRow] = row[currRow] + 1
            else:
                row[currRow] = 1
        for i in range (0,len(grid)):
            curr = ""
            for j in range(0 , len(grid)):
                curr += str(grid[j][i]) + " "
            x = row.get(curr)
            if x:
                count += x - 1 if x % 2 == 2 else x
        return count




sol = Solution()
print(sol.equalPairs([[3,2,1],[1,7,6],[2,7,7]]))