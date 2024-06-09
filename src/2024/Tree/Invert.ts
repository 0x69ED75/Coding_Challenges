//https://leetcode.com/problems/invert-binary-tree/description/
/*
Given the root of a binary tree, invert the tree, and return its root.
 */


import TreeNode from "./treeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root){
        return root
    }

    else{
        let temp = root.left
        root.left = root.right
        root.right = temp
    }

    invertTree(root.left)
    invertTree(root.right)
    return root
};
