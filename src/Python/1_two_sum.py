class Solution(object):
    def twoSum(self, nums, target):
        for x in range(0,len(nums)):
            t = target - nums[x]
            for y in range(x+1, len(nums)):
                if t == nums[y]:
                    return [y, x]

solution = Solution()
nums = [2,7,11,5]
target = 9
result = solution.twoSum(nums,target)
print(result)