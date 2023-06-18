from typing import List


class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        arr2 = sorted(arr2)
        count = 0
        length = len(arr1)
        for i in range(0, len(arr1)):
            curr = arr1[i]
            if (i is not length-1 and curr > arr1[i + 1]) or (curr <= arr1[i - 1] and i is not 0):
                for j in range(0, len(arr2)):
                    if i == 0:
                        count += 1
                        arr1[i] = arr2[0]
                        break
                    if arr2[j] > arr1[i - 1]:
                        arr1[i] = arr2[j]
                        count += 1
                        break
        print(arr1)
        for i in range(0, len(arr1)-1):
            if arr1[i] >= arr1[i + 1]:
                return -1
        return count

sol = Solution()
print(sol.makeArrayIncreasing([5,16,19,2,1,12,7,14,5,16], [6,17,4,3,6,13,4,3,18,17,16,7,14,1,16]))  # 5
