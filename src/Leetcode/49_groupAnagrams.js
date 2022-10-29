/*
https://leetcode.com/problems/group-anagrams
Given an array of strings strs, group the anagrams together.

example
Input: ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/*
This function works by sorting each string is sorted into its alphanumerical equivalent, and then initialising an empty object. This object is filled by these conditions:

 - If this sorted string doesn't exist in the object, set the sorted string as the key.
           - After this, initialise the object key by creating an array, where the first value is the UNSORTED string.
 - If this sorted string DOES exist in the object as a key, push the unsorted string into the array found at the key.

such that the strings ["eat","tea","tan","ate","nat","bat"]

can be represented in the object under 3 keys:
     - aet
     - ant
     - abt

With permutations:
{ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }

These permutations can then be returned.

 */
var groupAnagrams = function(strs) {
    let sorted = {} // create an object.

    for(let i = 0; i < strs.length; i++){ // for each string...
        let sortedString = strs[i].split("").sort().join("") // sort each words characters, then join it into a word again.
        if(sorted.hasOwnProperty(sortedString)){ // if the object contains this sorted word,
            sorted[sortedString].push(strs[i]) // push the unsorted word into the array where this sorted word is.
        }
        else{
            sorted[sortedString] = [strs[i]] // otherwise, add the unsorted word into the object, where the key is the sorted string.
        }
    }
    return Object.values(sorted)

}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))