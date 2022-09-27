//package Leetcode;
/*
https://leetcode.com/problems/palindrome-linked-list/
Given the head of a singly linked list,
return true if it is a palindrome or false otherwise.
 */
//import java.util.ArrayList;
//
//class Solution {
//    public boolean isPalindrome(ListNode head) {
//        ArrayList<Integer> vals = new ArrayList<Integer>();
//        ListNode current = head;
//
//        while(current != null){
//            vals.add(current.val);
//            current = current.next;
//        }
//
//        for(int i = (vals.size())-1; i >= 0 ; i--){
//            if(head.val != vals.get(i)){return false;}
//            head = head.next;
//        }
//
//
//        return true;
//    }
//}