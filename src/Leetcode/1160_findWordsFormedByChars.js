/*https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
given an array of strings "words" and a string "chars".

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
 */

var countCharacters = function(words, chars) {

    let count = 0
    let charsMap = new Map()
    chars.split("").forEach(char => charsMap.set(char,charsMap.get(char)+1 || 1)) // converts the chars into a map where each char is the key, and the count is the value.

    outer: // this tag will allow me to use a continue statement to continue this for loop, and not the closest parent for loop
    for(let i = 0; i < words.length; i++){
        let wordMap = new Map()
        words[i].split("").forEach(char => wordMap.set(char,wordMap.get(char)+1 || 1)) // On each iteration, converts the current word in the array into a map representation of the character and its count.

        let keys = Array.from(wordMap.keys()) // An array containing the keys from the wordMap.

        for(let j = 0; j < keys.length; j++){ // iterating over each key.
            if(wordMap.get(keys[j]) > charsMap.get(keys[j]) || charsMap.get(keys[j]) === undefined){ // if the character appears in the currently iterated word more than in the charsMap, or doesn't appear in the charsMap at all:
                continue outer; // Return back to the "outer" for loop and continue to the next word.
            }
        }
        count += words[i].length // if the above for loop iterates successfully, then it meets the conditions so increment count.
    }
    return count
};

console.log(countCharacters(["cat","bt","hat","tree"],"atach"))