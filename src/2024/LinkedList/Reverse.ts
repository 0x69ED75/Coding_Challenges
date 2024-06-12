//https://leetcode.com/problems/reverse-linked-list/
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
    let curr = head
    let prev = null

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};