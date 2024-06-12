//https://leetcode.com/problems/merge-two-sorted-lists/description/
/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list.
 The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

import ListNode from "./ListNode";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3 = new ListNode()
    let tail = list3

    while(list1 && list2){
        if(list2.val > list1.val){
            tail.next = list1
            list1 = list1.next
        }
        else{
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    if(list1) tail.next = list1
    else if (list2) tail.next = list2
    return list3.next
};

console.log(mergeTwoLists())