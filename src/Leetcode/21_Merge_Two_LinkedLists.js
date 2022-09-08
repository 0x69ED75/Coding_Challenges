/*
https://leetcode.com/problems/merge-two-sorted-lists/
Given two sorted linked lists, merge them into a singular linked list
 */

var mergeTwoLists = function(list1, list2) {
    /* entry params:
       list1: head of list1
       list2: head of list2
     */

    let mergeList = { val : 0, next : null } // initialising an empty head node
    let ref = mergeList // creating a reference to this empty node, such that I can iterate head without affecting list

    while(list1 && list2){ // while neither list1 or list2 is null

        if(list1.val > list2.val){  // if value of the list2 node is more than the list 1 node
            ref.next = list2  // set the next value of the new list to be equal to list 2's head.
            list2 = list2.next // increment list 2
        }
        else{ // if value of the list1 node is more than the list 2 node
            ref.next = list1 // the next value of the new list to be equal to list 1's head/
            list1 = list1.next // increment list 1.
        }
        ref = ref.next // move onto the next value.
    }

    ref.next = list1 || list2; // if one list is null, point ref to the rest of the list which isn't null.
                               // if both are null, ref.next also points to null


    // Returning the list directly, instead of by a reference, as the reference is currently pointed at the end of the list
    return mergeList.next // since the list was initialised with an initial value of 0, return the second value of mergeList.
};



console.log(mergeTwoLists(list1.head,list2.head))
