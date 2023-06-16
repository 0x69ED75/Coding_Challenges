# https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
'''
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of
all the values of the nodes in the tree.
'''

from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:

        self.k = k
        self.res = 0

        def dfs(node):
            if node is None:
                return
            dfs(node.left)
            self.k -= 1
            if self.k == 0:
                self.res = node.val
                return
            dfs(node.right)

        dfs(root)
        return self.res