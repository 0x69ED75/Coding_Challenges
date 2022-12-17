/*
https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.


 */

var evalRPN = function(tokens) {
    let stack = []
    for(let i of tokens){
       stack.push();
       if(i !== '+' && i !== '*' &&i !== '-' &&i !== '/'){
           stack.push(i)
       }
       else{
           let operand2 = stack.pop()
           let operand = stack.pop()
           stack.push(solve(operand,operand2,i))
       }
    }
    return stack
};

let solve = (operand1,operand2,operator) =>{
    switch(operator){
        case '+':
            return Number.parseInt(operand1) + Number.parseInt(operand2)
        case '-':
            return Number.parseInt(operand1) - Number.parseInt(operand2)
        case '/':
            return ~~(Number.parseInt(operand1) / Number.parseInt(operand2))
        case '*':
            return Number.parseInt(operand1) * Number.parseInt(operand2)
    }
}

console.log(evalRPN(["4","13","5","/","+"]))