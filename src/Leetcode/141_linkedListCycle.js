/*
https://leetcode.com/problems/linked-list-cycle/
Given a linked list, determine whether it is a cycle.
There is a cycle in a linked list if there is some node in the list that
can be reached again by continuously following the next pointer
 */

/* solution uses a fast pointer which moves faster than the slow pointer, if at any point fast === slow, we
   know the linked list has a cycle. */
var hasCycle = function(head) {

    let fast = head
    let slow = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast){return true}
    }
    return false

};


/* Slow Solution With high space complexity
var hasCycle = function(head) {

    let current = head
    let arr = []

    while(current !== null){
        if(arr.includes(current)){return true}
        arr.push(current)
        current = current.next
    }
    return false
};
 */