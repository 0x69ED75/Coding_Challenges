/*
https://leetcode.com/problems/rearrange-spaces-between-words/description/
You are given a string text of words that are placed among some number of spaces.
 Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.
 */
function reorderSpaces(text: string): string {

    let spaces:number = 0
    let words:number = 0
    for(let i = 0; i < text.length;i++){
        if(text[i] === " "){
            spaces++
            if(text[i-1] !== " " && i-1 > 0){
                words++
            }
        }
    }
    let spacesPerWord = words <= 1 ? 0 : spaces / (words-1)
    let result:string[] = []
    let split:string[] = text.split(" ")

    for(let i = 0; i < split.length;i++){
        if(split[i] !== ""){
            result.push(split[i])
            for(let j = 0; j < spacesPerWord;j++){
                result.push(" ")
            }
        }
    }

    while(result.length < text.length){
        result.push(" ")
    }

    return result.join("")
};

console.log(reorderSpaces("  this   is  a sentence "))