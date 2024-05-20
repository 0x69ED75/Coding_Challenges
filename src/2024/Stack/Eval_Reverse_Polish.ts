//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/*
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression.
 */
function evalRPN(tokens: string[]): number {
    let history = []
    while (tokens.length > 0){
        let curr = tokens.shift()
        let prev_1 = 0;
        let prev_2 = 0;
        switch (curr){
            case '+':
                prev_1 = history.shift()
                prev_2 = history.shift()
                let sum = prev_2 + prev_1
                history.unshift(sum)
                break
            case '-':
                prev_1 = history.shift()
                prev_2 = history.shift()
                let difference = prev_2 - prev_1
                history.unshift(difference)
                break
            case '*':
                prev_1 = history.shift()
                prev_2 = history.shift()
                let product = prev_1 * prev_2
                history.unshift(product)
                break
            case '/':
                prev_1 = history.shift()
                prev_2 = history.shift()
                let quotient = prev_2 / prev_1 < 0 ? Math.ceil(prev_2 / prev_1) : Math.floor(prev_2 / prev_1)
                history.unshift(quotient)
                break
            default:
                history.unshift(Number.parseInt(curr))
        }
    }
    return history[0]
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))