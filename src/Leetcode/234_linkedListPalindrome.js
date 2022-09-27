/*
https://leetcode.com/problems/palindrome-linked-list/
Given the head of a singly linked list,
return true if it is a palindrome or false otherwise.
 */

var isPalindrome = function(head) {
    let nodes = []

    while(head !== null){
        nodes.push(head.val)
        head = head.next
    }
    return nodes.reverse().toString() === nodes.toString()

};