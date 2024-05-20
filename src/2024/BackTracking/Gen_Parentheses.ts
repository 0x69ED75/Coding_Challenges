//https://leetcode.com/problems/generate-parentheses/description/
/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

/*
Explanation
Given N, we know we need N opening and N closing brackets
Given a single open bracket, we can take N-1 more opening brackets at most
Given K open brackets, we can have up to K closing brackets

Thus, we can define for any arbitrary string of brackets:
 - If the number of open brackets and closing brackets is equal to N, we have a complete string.
 - If the number of open brackets is less than N, we can add an open bracket.
 - If the number of closed brackets is less than the number of open brackets, we can add a closed bracket.

 The only other thing needed is an array to store complete solutions

 From this logic we can define a simple recursive function:
 */

function generateParenthesis(n: number): string[] {
    let res = []

    function backtrack(numOpen:number,numClosed:number,path:string){
        if((numOpen === n) && (numClosed === n)){
            res.push(path)
            return
        }

        // Logic for adding an open bracket '('
        if(numOpen < n){
            // Recursive call with numopen+1 as we have now added a '('
            backtrack(numOpen+1,numClosed,path+'(')
        }

        if(numClosed < numOpen){
            // Recursive call with numclosed+1 as we have now added a ')'
            backtrack(numOpen,numClosed+1,path + ")")
        }
    }
    backtrack(0,0,"")
    return res
};

console.log(generateParenthesis(3))