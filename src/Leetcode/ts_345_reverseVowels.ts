/*
https://leetcode.com/problems/reverse-vowels-of-a-string/
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */
function reverseVowels(s: string): string {
    let vowels: string[] = ["a","e","i","o","u","A","E","I","O","U"]
    let vowelsInString: string[] = []
    let sArr: string[] = s.split("")

    for(let i = 0; i < sArr.length;i++){
        if(vowels.includes(sArr[i])){
            vowelsInString.push(sArr[i])
        }
    }

    for(let i = 0; i < sArr.length;i++){
        if(vowels.includes(sArr[i])){
            sArr[i] = vowelsInString.pop()
        }
    }

    return sArr.join("")
}

console.log(reverseVowels("aA"))