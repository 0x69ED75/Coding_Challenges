'''
https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/description/

Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.
'''

class Solution:
    def minFlips(self, a: int, b: int, c: int) -> int:
        max_length = len(bin(max([a,b,c])))

        ab = format(a, '08b').zfill(max_length)
        bb = format(b, '08b').zfill(max_length)
        cb = format(c, '08b').zfill(max_length)
        orb = format(a | b, '08b').zfill(max_length)
        print(ab, bb, cb, orb)

        count = 0
        for i in range(len(orb)-1, 0, -1):
            if orb[i] != cb[i]:
                print(i,orb[i],cb[i])
                if cb[i] == '0':
                    if ab[i] == '1':
                        count += 1
                    if bb[i] == '1':
                        count += 1
                else:
                    count += 1
        return count

sol = Solution()
print(sol.minFlips(176, 543, 20))
