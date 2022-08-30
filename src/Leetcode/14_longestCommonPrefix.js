/*
https://leetcode.com/problems/longest-common-prefix/
find the common longest prefix between an array of strings.

Input: strs = ["flower","flow","flight"]
Output: "fl"
Input: strs = ["dog","racecar","car"]
Output: ""
 */

var longestCommonPrefix = function(strs) { // 72 ms	solution
    let first = strs[0]
    let count = 0;

    outer:
        for(let i = 0; i < first.length; i++){
            for(let j = 1; j < strs.length; j++){
                if(strs[j].charAt(i) !== first.charAt(i)){
                    break outer
                }
            }
            count++;
        }
    return first.substring(0,count)
};

console.log(longestCommonPrefix(["flower","flower","flower","floweer"]))