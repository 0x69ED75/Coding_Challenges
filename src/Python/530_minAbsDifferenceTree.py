# https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
'''
Given the root of a Binary Search Tree (BST), return the minimum absolute difference
between the values of any two different nodes in the tree.
'''
from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        x = []

        def dfs(node):
            if node is None:
                return
            x.append(node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        x.sort()
        lowest = 2 ** 63 - 1  # max safe
        for i in range (0, len(x)-1):
            curr = x[i+1] - x[i]
            if curr < lowest:
                lowest = curr

        return lowest
