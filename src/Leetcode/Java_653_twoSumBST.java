package Leetcode;
/*
Given the root of a Binary Search Tree and a target number k,
return true if there exist two elements in the BST such that their sum is equal to the given target.
 */

public class Java_653_twoSumBST {

//    public static void main(String[] args) {
//        TreeNode head = root;
//        HashSet<Integer> x = new HashSet<Integer>();
//        ArrayList<TreeNode> nodes = new ArrayList<TreeNode>();
//
//        while(nodes.size() > 0 || head != null){ // inorder traversal, adding (k-head.val) to a hashset, then each pass checks whether the hashmap contains current head value
//            if(head != null){
//                if(x.contains(head.val)){
//                    return true;
//                }
//                x.add(k - head.val);
//            }
//            if(head != null){
//                nodes.add(head);
//                head = head.left;
//            }
//            else{
//                head = nodes.remove(nodes.size() -1);
//                head = head.right;
//            }
//        }
//
//
//
//        return false;
//    }
}
