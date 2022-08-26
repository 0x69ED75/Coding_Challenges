console.log(validParentheses(')'))

/*
https://www.codewars.com/kata/52774a314c2333f0a7000688
Given a sequence of parentheses, returns whether it is a valid parentheses pattern.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
 */

function validParentheses(parens) {
    let count = 0

    parens = parens.split("")
    parens.forEach(q =>{

        if (q === ')' && count === 0){
            count -=100;
        }
       else if(q === '('){
            count +=1 ;
        }
        else if(q === ')'){
            count-=1;
        }
    })

    return count === 0;
}