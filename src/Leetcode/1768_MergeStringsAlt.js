/*
https://leetcode.com/problems/merge-strings-alternately
Given two strings word1 and word2
Merge the strings by adding letters in alternating order.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
 */

var mergeAlternately = function(word1, word2) { // non array solution 90ms
    let resultingString =""
    let finalIndex = 0;

    // loops over word1, adding character at index i to resultingString
    for(let i = 0; i < word1.length; i++){
        resultingString += word1[i] || ""
        resultingString += word2[i] || ""
        finalIndex = i; // stores the final index of the for loop
    }
    // return resulting string, and whatever is leftover from word2, which we can tell by splitting the word after the final index of the for loop.
    return resultingString + word2.substring(finalIndex+1)

};

console.log(mergeAlternately("ace","bdfg"))

/* Array Solution
var mergeAlternately = function(word1, word2) {
    let resultingString =""
    // making both strings an array of characters.
    word1 =word1.split("")
    word2= word2.split("")

    // looping over word1, adding the character at index to the resulting string.
    for(let i = 0; i < word1.length; i++){
        resultingString += word1.shift() || ""
        resultingString += word2.shift() || "" // if word2 is undefined, it doesn't add anything to the string.
        i-- // since we shifted a value from word1, decrement i by 1.
    }
    // returning resultingString, alongside anything that remains in word2 array.
    return resultingString + word2.join("")

};
 */