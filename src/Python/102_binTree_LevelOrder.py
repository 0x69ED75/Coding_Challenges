#https://leetcode.com/problems/binary-tree-level-order-traversal/description/
'''
Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).
'''
from idlelib.tree import TreeNode
from typing import List, Optional


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        x = []

        def dfs(node,level):
            if node is None:
                return
            if len(x) < level:
                x.append([node.val])
            else:
                x[level-1].append(node.val)
            dfs(node.left,level+1)
            dfs(node.right,level+1)

        dfs(root,1)
        return x