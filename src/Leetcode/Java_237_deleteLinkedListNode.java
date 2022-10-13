package Leetcode;

/*
https://leetcode.com/problems/delete-node-in-a-linked-list/description/
There is a singly-linked list head and we want to delete a node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.
 */

/* this solution is easy, all we do is set the val of the node to be equal to the value of the next node
 then just delete the next node in the list
 such that the linked list [4,5,1,9] where we delete 5
 becomes : [4,1,1,9]
 then:     [4,1,9]

public class Java_237_deleteLinkedListNode {

    public void deleteNode(ListNode node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }

 }
 */
