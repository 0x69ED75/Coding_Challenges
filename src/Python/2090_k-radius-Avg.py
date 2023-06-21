# https://leetcode.com/problems/k-radius-subarray-averages/description/

'''
You are given a 0-indexed array nums of n integers, and an integer k.

The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements
in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

The average of x elements is the sum of the x elements divided by x, using integer division. The integer division
 truncates toward zero, which means losing its fractional part.

For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, which truncates to 2.
'''

import math
from typing import List


class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        length = len(nums)
        if k > length:
            return [-1] * length
        if k == 0:
            return nums
        res = [-1] * length
        x = 0
        y = 0

        for i in range(0, length):
            x += nums[i]
            y += nums[i]
            if i > k:
                x -= nums[i - (k + 1)]
            if i >= k:
                y -= nums[i - k]
            if i-k >= k:
                res[i - k] = math.floor(((res[i - k] + y) / ((k * 2) + 1)))
            if k - 1 < i < length - k:
                res[i] = x

        return res


sol = Solution()
print(sol.getAverages([1,2,3,4,5,6,7]
                      , 2))

class Solution2:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        length = len(nums)
        dp = [-1] * length
        if k > length:
            return dp
        if k == 0:
            return nums
        res = []
        x = 0
        for i in range(0,length):
            x += nums[i]
            if i >= k:
                dp[i-k] = x - nums[i-k]
                x -= nums[i-k]


        print(dp)
        x = 0
        for j in range(0,length):
            x += nums[j]
            if j > k:
                x -= nums[j-(k+1)]
            if j < k or j+k > length-1:
                res.append(-1)
            else:
                res.append(math.floor((x + dp[j])/((k*2)+1)))
        return res