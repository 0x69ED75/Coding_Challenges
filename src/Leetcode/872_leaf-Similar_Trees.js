/*
https://leetcode.com/problems/leaf-similar-trees
Given two trees, return whether both trees form the same leaf value sequence.
The leaf value sequence are the leaves of the tree from left to right.
 */


var leafSimilar = function(root1, root2) {

    let returnLeaves = function(root){
        if (!root) return 0;

        let queue = [];
        let leaves = [];
        queue.push(root);

        while (queue.length > 0) {
            const node = queue.pop(); // setting the node being looked at to be the item at the end of the queue.
            // if there is a node to the right, this is pushed to the queue first. Node to the left is pushed to queue at a lower priority, to get the leaves ordered left to right.
            if(node.right !== null){queue.push(node.right)}
            if(node.left !== null){queue.push(node.left)}
            else if(node.left === null && node.right === null){leaves.push(node.val)} // if the found element has no children, push to array.
        }
        return leaves;
    }
    return returnLeaves(root1).toString() === returnLeaves(root2).toString()

};