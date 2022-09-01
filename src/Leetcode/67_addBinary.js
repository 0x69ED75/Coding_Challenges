/*
https://leetcode.com/problems/add-binary
Given two binary numbers, add them.
Input: a = "1010", b = "1011"
Output: "10101"

 */

var addBinary = function(a, b) { //86 ms solution
    let x = []
    let y = []
    if(a.length > b.length){
        x = a.split("").map(Number);
        y = b.split("").map(Number);
    }
    else{
        x = b.split("").map(Number)
        y = a.split("").map(Number)
    }

    while(y.length !== x.length){y.unshift(0)}

    let arr = []

    let carry = 0;

    for(let i = (x.length-1); i >= 0; i--){
        if(x[i] === 1){
            if(carry === 1){
                if (y[i] === 0) {arr.unshift(0)}
                else{arr.unshift(1)}
            }
            else {
                if (y[i] === 0) {
                    arr.unshift(1)
                }
                else if (y[i] === 1) {
                    arr.unshift(0)
                    carry = 1
                }
            }

        }

        else if(x[i] === 0){
            if(carry === 1){
                if (y[i] === 0) {
                    arr.unshift(1)
                    carry = 0
                }
                else{
                    arr.unshift(0)
                }
            }
            else {
                if (y[i] === 1) {
                    arr.unshift(1)
                }
                else {
                    arr.unshift(0)
                }
            }
        }

    }
    if(carry !== 0){arr.unshift(1)}
    return arr.join("");
};


console.log(addBinary("100","110010"));