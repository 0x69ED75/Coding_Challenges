class Solution(object):
    def isPalindrome(self, x):
        x = str(x)
        z = ""
        for y in range(len(x)-1, -1, -1):
            z += x[y]

        return x == z


solution = Solution()
print(solution.isPalindrome(121))
