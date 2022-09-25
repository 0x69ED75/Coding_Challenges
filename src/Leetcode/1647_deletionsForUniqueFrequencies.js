/* Medium
https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
Given a string, return the minimum number of characters you need to delete so that
The frequency of each character in the string is unique

Example:
Input: s = "aaabbbcc"
Output: 2
You can remove two b's resulting in unique string "aaabcc"
 */

var minDeletions = function(s) {
    // mapping string frequencies, then creating an array of the keys.
    let freqMap = new Map();
    s = s.split("")
    s.forEach(char => freqMap.set(char,freqMap.get(char)+1||1))
    let keyArr = Array.from(freqMap.keys())
    let count = 0;

    // Storing the frequency of each value in an array. While a value already exists in the array, subtract 1 from it. If this value reaches 0, stop subtracting as it has been removed completely.
    // Each time 1 is subtracted, increment count, since a char has been deleted.
    // such that string "aaabbbcc" represented in map form:{ 'a' => 3, 'b' => 3, 'c' => 2 } becomes: { 'a' => 3, 'b' => 2, 'c' => 1 }
    let freq = []
    for(let i = 0; i < keyArr.length; i++){
        if(freq.includes(freqMap.get(keyArr[i]))){
            while(freq.includes(freqMap.get(keyArr[i])) && freqMap.get(keyArr[i]) !== 0){
                count++
                freqMap.set(keyArr[i],freqMap.get(keyArr[i])-1)
            }
        }
        freq.push(freqMap.get(keyArr[i]))
    }

    return count
};

console.log(minDeletions("ceabaacb"))

