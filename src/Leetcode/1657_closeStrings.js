/*
https://leetcode.com/problems/determine-if-two-strings-are-close/
Two strings are considered close if you can attain one from the other using the following operations
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb

Operation 2: Transform every occurrence of one existing character into another existing character
and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)

You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 */

var closeStrings = function(word1, word2) {
    let flag1 = true
    let flag2 = true
    word1 = word1.split("")
    word2 = word2.split("")

    if(word1.length !== word2.length){return false}
    let map1 = new Map
    word1.forEach(letter => map1.set(letter,map1.get(letter)+1||1))
    let map2 = new Map
    word2.forEach(letter => map2.set(letter,map2.get(letter)+1||1))
    if(map1.size !== map2.size){return false}

    let mapKeys = Array.from(map1.keys())

    for(let i = 0; i < mapKeys.length; i++){
        if(map2.get(mapKeys[i]) === undefined){return false}
        if(map2.get(mapKeys[i]) !== map1.get(mapKeys[i])){
            flag1 = false;
        }
    }
    let map1Values = Array.from(map1.values())
    let map2Values = Array.from(map2.values())

    if(map1Values.sort().join(',') !== map2Values.sort().join(',')){
        flag2 = false
    }

    return flag1 || flag2

};

console.log(closeStrings("uau","ssx"))