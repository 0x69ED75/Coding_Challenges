/*
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer
Given a linked list where each node represents a binary number (1 or 0) return the entire linked list as integer
 */

/*
Language-Agnostic explanation:
when looking at non-binary integers, starting at the first digit, we do not know whether this first digit represents just one, or 1 million (i.e. in the number 110 it represents a hundred, but in 15 it represents 10)
But, what we do know is that if there is another digit following this digit, its value has to go up 10x
So if we take a 1, we assume its value is just one, but, if then we encounter a 2 following this digit, the value of the first digit goes up 10x.

This same rule applies to binary, except instead, the value increases 2x as we see each digit.
Lets take the binary integer 101:
      - First digit just represents 1, total = 1
      - There exists a second digit, this doubles the value of the first digit, total = 2. This value is 0,so total = 2+0 = 2
      - there exists a third digit, doubling the value of previous digits, 2*2 = 4. The value in the third digit is 1, so 4+1 = 5
      - There doesn't exist a 4th digit, return 5.
 */
var getDecimalValue = function(head) {
    let current = head
    let sum = 0

    while(head !== null){
        sum *=2
        sum += head.val;
        head = head.next
    }
    return sum
};

console.log("101")

/* Solution dependent on JS conversion to decimal
var getDecimalValue = function(head) {
    let current = head
    let binary = ""

    while(head !== null){
        console.log(head.val)
        binary += head.val
        head = head.next
    }
    return parseInt(binary,2)
};
 */