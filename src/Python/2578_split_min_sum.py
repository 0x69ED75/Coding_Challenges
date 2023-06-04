class Solution:
    def splitNum(self, num: int) -> int:
        l = list(str(num))
        size = len(l)
        l.sort()
        x = l[0]
        y = l[1]
        for i in range(2, size):
            if int(x) > int(y):
                y += l[i]
            else:
                x += l[i]
        return int(x) + int(y)


sol = Solution()
print(sol.splitNum(100001))
