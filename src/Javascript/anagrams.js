/*
https://www.codewars.com/kata/523a86aa4230ebb5420001e1

Given a word, and an array of strings, find each anagram of the given word in the array.
 I solved this by simply sorting the word and then simply sorting each String in the array, then check if they match.
 */
function anagrams(word, words) {
    let sortedArr = [];
    const sorted = word.split("").sort().join();
    words.forEach(q => {
        if(q.split("").sort().join() === sorted){
            sortedArr.push(q);
        }
    })
    return sortedArr;
}