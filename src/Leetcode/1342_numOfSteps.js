/*
https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
given an integer num, return  how many steps it would take to reduce then number to 0 if:
    When the number is even, the number is halved.
    when the number is odd, the number is subtracted by 1.
 */

var numberOfSteps = function(num) {
    let count = 0;

    while(num > 0){
        if (num % 2 === 0){num /= 2}
        else {num -= 1}
        count++;
    }
    return count

};

console.log(numberOfSteps(14))