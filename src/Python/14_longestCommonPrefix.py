class Solution(object):
    def longestCommonPrefix(self, strs):
        lcp = strs[0]
        if len(lcp) == 0:
            return ""
        for i in range (1,len(strs)):
            temp = ""
            for j in range(0,len(strs[i])):
                if j+1 > len(lcp):
                    break
                if strs[i][j] == lcp[j]:
                    temp += strs[i][j]
                else:
                    break
            if len(lcp) > len(temp):
                lcp = temp

        return lcp


sol = Solution()
print(sol.longestCommonPrefix(["dog","racecar","car"]))

# cool solution from answer page

# def longestCommonPrefix(self, strs):
#     if not strs:
#         return ""
#     shortest = min(strs,key=len)
#     for i, ch in enumerate(shortest):
#         for other in strs:
#             if other[i] != ch:
#                 return shortest[:i]
#     return shortest
