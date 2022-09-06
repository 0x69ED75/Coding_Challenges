/*
https://leetcode.com/problems/design-linked-list
Design a Linked List data structure.
The following features need to be included:
    - Getting a value at an index
    - Add to front of list (head)
    - Add to end of list (tail)
    - Add to list at a specified index
    - Delete at specified index

 */
var Node = function(val){ // each node has a value and a pointer to the next node. by default this is null.
    this.val = val
    this.next = null;
}

var MyLinkedList = function() { // initialising linked list.
    this.head = null
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if(index > this.size -1){return -1} // if the given index is more than the size of the list, return -1.

    let current = this.head // storing the node at the head as var current.

    for(let i = 0; i < index; i++){ // looping through each node until we find the node at given index.
        current = current.next;
    }

    return current.val; // returning value of node at given index
};

MyLinkedList.prototype.addAtHead = function(val) { // adds a new node at the start of the list
    let newNode = new Node(val) // creating a new Node with value from props.

    if(this.head === null){ // if there is no current head node, set the head node to the new node.
        this.head = newNode
    }

    else{ // If there is an existing head node, set the "next" value of the new node to the current head, then replace the current head with the new node.
        newNode.next = this.head
        this.head = newNode
    }
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    if (this.size === 0){this.addAtHead(val); return;} // if the size of the list is 0, just add the value at head.

    let newNode = new Node(val)

    if(this.head === null){ // if there is no head, set head to be the new node being created.
        this.head = newNode
    }

    let current = this.head

    while(current.next !== null){ // iterate through the list until the next item in the list is null. This will mean current is the last item in the list.
        current = current.next // by the end of this while loop, current will be the last item in the list.
    }

    current.next = newNode // Now just add the newNode to the next property of the last value in the list found previously. newNode will now be the last item in the list

    this.size++
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.size){return;}
    if(index === 0){this.addAtHead(val); return;} // if index is 0, we're adding at head so, use that function instead
    else if(index-1 === this.size){this.addAtTail(val); return;} // if index-1 is the same as the size, we're adding at tail. call that instead.

    let newNode = new Node(val)

    if(this.head === null){
        this.head = newNode
    }

    let current = this.head

    for(let i = 0; i < index-1; i++){ // Iterating the list until we reach the node before the desired index.
        current = current.next;
    }

    let prev = current.next // storing the value of the current node at the index we wish to insert it as prev.
    current.next = newNode // setting the value of the current node at the index we wish to insert to newNode (which is the value the user wishes to insert)
    newNode.next = prev; // setting the value after the index we inserted at to be equal to previous.

    /* example: if We have the linked list: 1 -> 2 -> 4 -> 5   and we want to insert the value 3 at index 2
       The for loop will iterate up to index 1 (value 2)
       prev would equal the node at index 2 (value 4)
       We will then set the node at index 2 to have the value 3, giving us (1->2->3->5)
       We will then set the next property of the node at index 2 to equal prev.
       Since prev stores still has its next property, the rest of the list goes uninterrupted, giving us (1->2->3->4->5)
     */

    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index > this.size -1){return }

    this.size--

    if(index === 0){ // if the head is being removed, simply set the head to equal the next value after head.
        this.head = this.head.next
        return;
    }

    // initialising variables
    let ahead = this.head
    let prev = this.head

    for(let i = 0; i <= index; i++ ){ // iterating up to index we wish to delete.

        if(i === index-1){  // if we are currently at the value before the value we wish to remove, store this value in variable "prev"
            prev = ahead
        }

        ahead = ahead.next // the value of ahead will be the node after the index to be removed when the for loop ends.
    }

    prev.next = ahead // removing the element from the list by simply setting the value of prev.next to the node after the index we wish to remove.

    /*
    Example: remove node at index 2 from list: (1,2,3,4)
    prev = node at index 1 (value 2)
    ahead = node at index 3 (value 4)
    Set the node at index 1 to point to the node at index 3 by setting its next value.
    Result: (1,2,4)
    */
};


let x = new MyLinkedList()
x.addAtHead(7)
x.addAtHead(2)
x.addAtHead(1)
x.addAtIndex(3,0)
x.deleteAtIndex(2)
x.addAtHead(6)
x.addAtTail(4)
console.log(x.get(4))
x.addAtTail(4)
x.addAtHead(4)
x.addAtIndex(5,0)
x.addAtHead(6)
