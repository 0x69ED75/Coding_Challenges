/*
https://leetcode.com/problems/reverse-words-in-a-string/description/
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

You must account for strings that include multiple spaces between words.
 */
var reverseWords = function(s) {
    return s.split(" ").reverse().filter(word => /./g.test(word)).join(" ")
};

console.log(reverseWords("the sky is   blue"))