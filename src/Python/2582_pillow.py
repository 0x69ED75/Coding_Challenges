import math


class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        if time < n:
            return time+1
        x = math.floor((time / (n-1)))
        if x % 2 == 0:
            return 1 + (time - (n-1) * x)
        else:
            y = (time - ((n-1)*x))
            return n - y

sol = Solution()
print(sol.passThePillow(1000,1000))