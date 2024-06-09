//https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest
leaf node.
 */
import TreeNode from "./treeNode";

function maxDepth_Recursive(root: TreeNode | null): number {
    if(!root){
        return 0
    }

    return 1 + Math.max(maxDepth_Recursive(root.left),maxDepth_Recursive(root.right))
};


function maxDepth_BFS(root: TreeNode | null): number {
    if(!root){return 0}
    let queue = [root]
    let count = 0
    while(queue.length){
        let levelSize = queue.length;
        for(let i = 0; i < levelSize;i++){
            let curr = queue.shift()
            if(curr?.left) queue.push(curr.left)
            if(curr?.right) queue.push(curr.right)
        }
        count++
    }
    return count
};

function maxDepth_DFS(root: TreeNode | null): number {
    if(!root){return 0}
    let stack:[TreeNode,number][] = [[root,1]]
    let max = 1
    while(stack.length){
        let [node,layer] = stack.shift()
        max = Math.max(max,layer)
        if(node?.left) stack.push([node.left,layer+1])
        if(node?.right) stack.push([node.right,layer+1])
    }
    return max
}
