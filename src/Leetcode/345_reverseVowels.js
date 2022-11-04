/*
https://leetcode.com/problems/reverse-vowels-of-a-string/description/
Given a string s, reverse only all the vowels in the string and return it.
They may be lowercase or uppercase
 */

/*
My approach is slightly over-engineered but works as such:

split string into char array "sArr"

Each vowel is placed in a map, index is the key and vowel is the value.
Create an array containing the index of each vowel.

Iterate this array n/2 times. Since we are swapping vowels, we only need to go up to n/2.

For each vowel in the list, swap the values at  sArr[sVowels[i]] and sArr[sVowels[sVowels.length-i-1]]

Example:
"leetcode" gives the map = { 1 => 'e', 2 => 'e', 5 => 'o', 7 => 'e' }
such that sVowels = [ 1, 2, 5, 7 ]

We can now iterate n/2 times such that:
 - sVowels[i] = 1 and Therefore map.get(sVowels[i]) = 'e',  sVowels[sVowels.length - i-1] = 7. Therefore, map.get(sVowels[sVowels.length - i-1]) = e
   We can therefore set the value at sArr[1] = e
   And the value at sArr[7] = e

 - sVowels[i] = 2 and Therefore map.get(sVowels[i]) = 'e',  sVowels[sVowels.length - i-1] = 5. Therefore, map.get(sVowels[sVowels.length - i-1]) = o
   We can therefore set the value at sArr[2] = o
   And the value at sArr[5] = e
 */


var reverseVowels = function(s) {
    let sArr = s.split("")
    let map = new Map
    let vowels = ['a','i','e','o','u']

    // putting each vowel into a map, where the index of the vowel is the key, and the value is the vowel.
    for(let i = 0 ; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            map.set(i,s[i])
        }
    }
    // putting index of each vowel in an array called sVowels
    let sVowels = Array.from(map.keys())
    console.log(sVowels)

    // iterating each vowel up to n/2, since we are swapping vowels, we only need to iterate up to half way.
    // for each vowel:
    //    - set the char at the index of the vowel to be equal to the value at the end of svowels-i
    //      such that we are swapping the first value in Svowels with the last value, then the 1st vowel with the vowel at n-1 etc...
    //    - Set each vowel at Svowel[n-i] to be equal to the vowel at sVowel[i]
    //      such that we are swapping the value at the end of the list, with the vowel at the start at the list, then the value at 1 and the value at n-1...

    for(let i = 0; i < sVowels.length /2; i++){
        sArr[sVowels[i]] = map.get(sVowels[sVowels.length - i-1])
        sArr[sVowels[sVowels.length-i-1]] = map.get(sVowels[i])
    }

    return sArr.join("");
};

console.log(reverseVowels("leetcode"))