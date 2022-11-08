/*
https://leetcode.com/problems/make-the-string-great/description/
Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa

 To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

 */
var makeGood = function(s) {
    let x = s.split("")

    let flag = true;
    while(flag){
        flag = false;
        for(let i = 0; i < x.length-1; i++){
            if(Math.abs(x[i].charCodeAt(0) - x[i+1].charCodeAt(0)) === 32){
                x.splice(i,1)
                x.splice(i,1)
                flag = true;
            }
        }
    }

    return x.join("")
};

console.log(makeGood("Pp"))