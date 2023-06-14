# https://leetcode.com/problems/binary-tree-tilt/description/
'''
Given the root of a binary tree, return the sum of every tree node's tilt.

The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree
node values. If a node does not have a left child, then the sum of the left subtree node values is treated as 0.
The rule is similar if the node does not have a right child.
'''

from idlelib.tree import TreeNode
from typing import Optional


class Solution:
    def findTilt(self, root: Optional[TreeNode]) -> int:
        total = 0

        def dfs(node):
            nonlocal total
            if node is None:
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            total += abs(left-right)
            return left + right + node.val

        dfs(root)

        return abs(total)