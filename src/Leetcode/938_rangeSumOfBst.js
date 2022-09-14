/*
https://leetcode.com/problems/range-sum-of-bst/
Given the root of a binary search tree, sum the values between a given range.
 */

var rangeSumBST = function(root, low, high) { // uses inorder traversal to sum values.
    let sum = 0

    let recursiveTraverse = function(node){
        if(node === null){return} // if the node is null return.
        if(node.left){recursiveTraverse(node.left)} // if there exists a node left, call this function on it.
        if(node.val >= low && node.val <= high){sum += node.val}
        if(node.right){recursiveTraverse(node.right)} // if there exists a node right, call this function on it.
    }

    recursiveTraverse(root)
    return sum

};












var inorderTraversal = function(root) { // recursive solution
    let ordered = []
    let recursiveTraverse = function(node){
        if(node === null){return} // if the node is null return.
        if(node.left){recursiveTraverse(node.left)} // if there exists a node left, call this function on it.
        ordered.push(node.val) // push this value onto the resulting array
        if(node.right){recursiveTraverse(node.right)} // if there exists a node right, call this function on it.
    }
    recursiveTraverse(root)
    return ordered

};