package Leetcode;
/*
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
 */

public class Java_2095_deleteMiddleLLValue {
    // one pass approach
/*    public ListNode deleteMiddle(ListNode head) {
        if(head.next == null){return null;}
        ListNode fastPtr = head,slowPtr=head,prev=null;
        while(fastPtr != null && fastPtr.next != null){
            fastPtr = fastPtr.next.next;
            prev = slowPtr;
            slowPtr = slowPtr.next;
        }
        prev.next = prev.next.next;
        return head;
    }*/


    // two pass approach, one to find length, one to remove middle value.
    /*
        public ListNode deleteMiddle(ListNode head) {
        ListNode marker = head;
        int count = 0;

        while(marker != null){
            marker = marker.next;
            count++;
        }
        if(count == 1){return null;}
        ListNode halfMarker = head;
        int half = Math.floorDiv(count,2);

        for(int i = 0; i < half-1; i++){
            halfMarker = halfMarker.next;
        }

        if(halfMarker.next != null && halfMarker.next.next != null){
            halfMarker = halfMarker.next;
            halfMarker.val = halfMarker.next.val;
            halfMarker.next = halfMarker.next.next;
        }
        else{
            halfMarker.next = null;
        }


        return head;
    }

     */
}
