/*
Given a string, return the length of the last word in this string.
A word is defined as a maximal substring consisting of non-space characters only.
 */

var lengthOfLastWord = function(s) {
    let wordArray = s.split(" ") // making the string an array of words.

    for(let i = wordArray.length-1; i >= 0; i--){ // Iterating backwards, we're looking for the last word.
        if(wordArray[i].match(/([A-Z])+/i)){ // if the current word contains a letter, we can safely presume this matches the given definition of the word.
            return wordArray[i].length // we can then return its length.
        }
    }
    return 0;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))