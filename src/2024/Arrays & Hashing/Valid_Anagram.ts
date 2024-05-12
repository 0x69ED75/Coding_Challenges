// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length){
        return false
    }

    let x = s.split("").sort()
    let y = t.split("").sort()

    for(let i = 0; i < x.length; i++){
        if(x[i] !== y[i]){
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram","anagram"))