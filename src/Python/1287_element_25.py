# https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
'''
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than
25% of the time, return that integer.
'''

from typing import List


class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        if len(arr) == 1:
            return arr[0]
        x = len(arr) / 4
        dic = {}
        for item in arr:
            if item not in dic:
                dic[item] = 1
            else:
                y = dic[item]
                dic[item] = y+1
                if y+1 > x:
                    return item

sol = Solution()
print(sol.findSpecialInteger([1,1]))