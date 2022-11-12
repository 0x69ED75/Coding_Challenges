/*
https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/
Given a string s, return the length of the longest substring between two equal characters,
excluding the two characters. If there is no such substring return -1.
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map
    for(let i = 0; i < s.length;i ++){
        map.get(s[i])?.push(i) || map.set(s[i],[i])
    }
    let max = -1
    Array.from(map.keys()).forEach(q=>{
        let x = map.get(q);
        if(x[x.length-1]-x[0]-1 > max){
            max = x[x.length-1]-x[0]-1
        }
    })
    return max
};

console.log(maxLengthBetweenEqualCharacters("eae"))