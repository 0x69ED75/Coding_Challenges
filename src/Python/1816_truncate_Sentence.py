class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        words = k
        flag = False
        for i in range(0, len(s)):
            if words == 0:
                return s[0:i-1]
            if s[i] == " ":
                if not flag:
                    words -= 1
                flag = True
            else:
                flag = False
        return s

sol = Solution()
print(sol.truncateSentence("Hello how are you Contestant", 4))
