/*
https://leetcode.com/problems/valid-palindrome/
return if sentence is a valid palindrome.
ignore any non-alphanumeric characters
 */

var isPalindrome = function(s) {
    let x = s.toLowerCase().split("").filter(char => char.match(/^[a-z\d]+$/))
    return x.join("") === x.reverse().join("")
};

console.log(isPalindrome("0P"))