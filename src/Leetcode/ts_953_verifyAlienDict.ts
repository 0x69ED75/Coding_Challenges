/*
https://leetcode.com/problems/verifying-an-alien-dictionary/description/
In an alien language, surprisingly, they also use English lowercase letters,
 but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet,
 return true if and only if the given words are sorted lexicographically in this alien language.
 */

function isAlienSorted(words: string[], order: string): boolean {

    for(let i = 0; i < words.length;i++){
        for(let j = i+1 ; j < words.length;j++){
            for(let k = 0; k < words[i].length;k++){
                if(order.indexOf(words[i][k]) > order.indexOf(words[j][k])){
                    return false
                }
                else if(order.indexOf(words[i][k]) < order.indexOf(words[j][k])){
                    break
                }
            }
        }
    }
    return true
}

console.log(isAlienSorted(["apple","app"],"abcdefghijklmnopqrstuvwxyz"))