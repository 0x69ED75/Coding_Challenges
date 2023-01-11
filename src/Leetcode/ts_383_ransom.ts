/*
https://leetcode.com/problems/ransom-note/submissions/876431493/
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    let map = new Map<string,number>()
    magazine.split("").forEach(q => map.set(q,map.get(q)+1||1))
    for(let i = 0; i < ransomNote.length;i++){
        let curr:number = map.get(ransomNote[i])
        if(!curr || curr === 0){
            return false
        }
        map.set(ransomNote[i],curr-1)
    }

    return true
}

console.log(canConstruct("a","b"))