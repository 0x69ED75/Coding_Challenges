class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        l = 0
        r = 1
        flag = 0
        count = 0
        while r < len(s):
            if s[r] == s[r-1]:
                if flag != 0:
                    l = flag
                flag = r
            count = max(count, len(s[l:r+1]))
            r += 1
        return count if count != 0 else len(s)

sol = Solution()
print(sol.longestSemiRepetitiveSubstring("52233"))
