/*
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
 */
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(q => q.split(" ").length))
};

/*
var mostWordsFound = function(sentences) {
    let currentMax = 0;
    for(let i = 0; i < sentences.length; i++){
        if(sentences[i].split(" ").length > currentMax){
            currentMax = sentences[i].split(" ").length
        }
    }
    return currentMax
};

 */
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))