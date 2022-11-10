/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
You are given a string s consisting of lowercase English letters.
A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.
 It can be proven that the answer is unique.
 */
var removeDuplicates = function(s) {
    let strArr = s.split("")
    let stack = [[strArr[0],0]]

    for(let i = 1; i < s.length;i++){
        if(stack.length !== 0 && stack[stack.length-1][0] === strArr[i]){
            let x = stack.pop()
            strArr[i] = ""
            strArr[x[1]] = ""
        }
        else{
            stack.push([strArr[i],i])
        }
    }

    return strArr.join("");
};


console.log(removeDuplicates("abbaca"))