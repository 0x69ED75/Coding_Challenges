from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        x = 0
        left = 0
        right = len(height)-1
        while left != right:
            area = min(height[left], height[right]) * (right - left)
            if area > x:
                x = area
            if height[left] > height[right]:
                right -= 1
            else:
                left += 1
        return x

sol = Solution()
print(sol.maxArea([1,8,6,2,5,4,8,3,7]))