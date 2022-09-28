/*
https://leetcode.com/problems/optimal-partition-of-string/
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique.
Return the minimum number of substrings in such a partition.
 */

var partitionString = function(s) {
    let arr = s.split("")
    let count = 0

    for(let i = 0; i < arr.length;){
        let chars = []
        while(!chars.includes(arr[i])){
            chars.push(arr[i])
            i++
        }
        console.log(chars)
        count++
    }
    return count
};

console.log(partitionString("ssssss"))