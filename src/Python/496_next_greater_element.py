from typing import List


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic = {}
        for i in range(0, len(nums2)-1):
            curr = nums2[i]
            for j in range(i, len(nums2)):
                if nums2[j] > curr:
                    dic[curr] = nums2[j]
                    break
        res = []
        for i in range(0,len(nums1)):
            x = dic.get(nums1[i])
            res.append(x if x is not None else -1)
        return res


sol = Solution()
print(sol.nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))