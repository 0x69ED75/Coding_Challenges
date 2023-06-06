# https://leetcode.com/problems/defuse-the-bomb/description/

"""You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code
of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
    As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
"""

from typing import List


class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        length = len(code)
        if k == 0:
            x = []
            for i in range(0, length):
                x.append(0)
            return x
        if k > 0:
            x = []
            for i in range(0, length):
                x.append(0)
                index = i + 1
                for j in range(0, k):
                    if index > length - 1:
                        index = 0
                    x[i] += code[index]
                    index += 1
            return x
        if k < 0:
            x = []
            for i in range(0, length):
                x.append(0)
                index = 0
                if i - 1 < 0:
                    index = length - 1
                else:
                    index = i - 1
                for j in range(0, abs(k)):
                    if index < 0:
                        index = length - 1
                    x[i] += code[index]
                    index -= 1
            return x


sol = Solution()
print(sol.decrypt([2, 4, 9, 3], -2))
