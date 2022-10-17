/*
https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/
Given a string sentence containing only lowercase English letters,
return true if sentence is a pangram, or false otherwise.
 */
var checkIfPangram = function(sentence) {
    return Array.from(new Set(sentence).values()).length === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))