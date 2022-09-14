/*
https://leetcode.com/problems/binary-tree-inorder-traversal/
Given the root of a binary tree return the inorder traversal of its nodes.
 */

/*
The below example uses recursion.
Walk through example on this tree: https://cdn.upload.systems/uploads/kiykNpkj.png
node 1 -> node.left = 2
2 -> node.left = 3
3 -> push(3)
2 -> push(2)
2 -> node.right = 4
4 -> push(4)
1 -> push(1)
1 -> node.Right = 5
5 -> node.left = 6
6 -> push(6)
5 -> push(5)
5 -> node.right = 7
7 -> push(7)
1 -> end */

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

/* Non-Recursive
var inorderTraversal = function(root) {
    let stack = []
    let ordered = []

    while(stack.length || root){ // while stack or root is not null or empty.
        if(root){ // if root isn't null, push this root onto the stack, and set root to the root to the left.
            stack.push(root)
            root = root.left
        }
        else{ // if the current root is null, we iterated as far down as possible of the left side.
            root = stack.pop() // therefore the new root is the top of the stack.
            ordered.push(root) // push this value
            root = root.right
        }
    }
 */