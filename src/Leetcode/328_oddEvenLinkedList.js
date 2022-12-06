/*
https://leetcode.com/problems/odd-even-linked-list/description/
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.
 */
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

    let odd = head
    let even = head.next
    let evenHead = head.next
    while(odd.next && odd.next.next){
        odd.next = odd.next.next
        even.next = even.next.next

        odd = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
};