/*https://leetcode.com/problems/root-equals-sum-of-children/
Given a binary tree, return true if the children of the tree is equal to the root.
 */
var checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};