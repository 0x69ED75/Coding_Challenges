/*
https://leetcode.com/problems/valid-parentheses
Return true if the string of parentheses are valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */


var isValid = function(s) { // 94 ms solution
    let expectedClosure = []
    let arr = s.split("")

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '['){
            expectedClosure.push(']');
        }
        if(arr[i] === '('){
            expectedClosure.push(')');
        }
        if(arr[i] === '{'){
            expectedClosure.push('}');
        }

     if(arr[i] === ']' || arr[i] === ')' || arr[i] === '}'){
            if (arr[i] !== expectedClosure.pop()){
                return false
            }
        }
    }
    return expectedClosure == false
}

console.log(isValid("()[]{}"))