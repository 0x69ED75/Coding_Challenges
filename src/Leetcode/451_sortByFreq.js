/*
https://leetcode.com/problems/sort-characters-by-frequency/description/
Given a string s, sort it in decreasing order based on the frequency of the characters.
The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
 */

var frequencySort = function(s) {
    let arr =  s.split("")
    let map = new Map
    arr.forEach(letter => map.set(letter,map.get(letter)+1||1))

    let x = ""
    let freq = Array.from(map.keys()).sort((a,b) => map.get(b) - map.get(a))


    for(let i = 0; i < freq.length;i++){
        x+=freq[i].repeat(map.get(freq[i]))
    }
    return x
};



console.log(frequencySort("eaaaaaaaaee"))