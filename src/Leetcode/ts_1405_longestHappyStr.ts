/*
https://leetcode.com/problems/longest-happy-string/description/
A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.
 */
function longestDiverseString(a: number, b: number, c: number): string {
    let total:number = a+b+c
    let currA = 0, currB = 0, currC = 0
    let res:string = ""

    for(let i = 0; i < total;i++){
        if(((a>=b && a>=c) || (currB === 2 || currC === 2)) && currA !== 2 && a !== 0){
            res += 'a'
            a--
            currA++
            currB = 0
            currC = 0
        }
        if(((b>=a && b>=c) || (currC === 2 || currA === 2) )&& currB !== 2 && b !== 0){
            res += 'b'
            b--
            currB++
            currA=0
            currC = 0
        }
        if(((c>=a && c>=b) || (currA === 2 || currB === 2)) && currC !== 2 && c !== 0){
            res += 'c'
            c--
            currC++
            currA = 0
            currB =0
        }
    }
    return res
}
console.log(longestDiverseString(1,1,7))