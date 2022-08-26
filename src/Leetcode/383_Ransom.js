/*
https://leetcode.com/problems/ransom-note/
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote
 */


var canConstruct = function(ransomNote, magazine) { // solution 2: 99ms
    let arr = magazine.split("")

    for(const letter of ransomNote){
        if(!arr.includes(letter)){return false}
        arr.splice(arr.indexOf(letter),1)
    }
    return true
};

// var canConstruct = function(ransomNote, magazine) { // solution 1: 143 ms
//     let hashmap = new Map();
//     magazine.split("").forEach(letter => hashmap.set(letter,hashmap.get(letter)+1 || 1))
//
//     for(const letter of ransomNote){
//         if(hashmap.get(letter) === undefined || hashmap.get(letter) === 0) return false
//         hashmap.set(letter,hashmap.get(letter)-1)
//     }
//
//     return true
// };

console.log(canConstruct("ab","ab"))