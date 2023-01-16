/*
https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/
Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s.
The returned letter should be in uppercase. If no such letter exists, return an empty string.

An English letter b is greater than another letter a if b appears after a in the English alphabet.
 */
function greatestLetter(s: string): string {
    let search:boolean[] = []
    let currentMax = -1;
    for(let i = 0; i < s.length; i++){
        if(search[s[i].charCodeAt(0)]){
            let compare:number = s[i].toUpperCase().charCodeAt(0)
            if(compare > currentMax){
                currentMax = compare
            }
        }
        if(s[i].toUpperCase() === s[i]){
            let index:number = s[i].charCodeAt(0) + 32
            search[index] = true;
        }
        else{
            let index:number = s[i].charCodeAt(0) - 32
            search[index] = true
        }
    }
    return currentMax === -1 ? "" : String.fromCharCode(currentMax).toUpperCase();
};
console.log(greatestLetter("arRAzFif"))