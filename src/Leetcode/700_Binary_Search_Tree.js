/*
https://leetcode.com/problems/search-in-a-binary-search-tree
Given a binary search tree, find a given value.
 */

var searchBST = function(root, val) {
    let current = root

    while(current !== null && current.val !== val){
        if(current.val > val){
            current = current.left
        }
        else{
            current = current.right
        }
    }
    return current
};

console.log(searchBST([4,2,7,1,3],5))