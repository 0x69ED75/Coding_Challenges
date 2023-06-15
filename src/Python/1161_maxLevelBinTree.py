from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        x = [0]

        def dfs(node, level):
            if node is None:
                return
            if len(x) < level:
                x.append(node.val)
            else:
                y = x[level - 1]
                x[level - 1] = y + node.val
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)

        dfs(root, 1)
        max = [0,-2147483648]
        for i in range(0, len(x)):
            if x[i] > max[1]:
                max[0] = i
                max[1] = x[i]

        return max[0]+1
