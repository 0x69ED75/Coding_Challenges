/*
https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/

Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:

Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
Pick a non-empty suffix from the string s where all the characters in this suffix are equal.

The prefix and the suffix should not intersect at any index.
The characters from the prefix and suffix must be the same.

Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times)
 */

var minimumLength = function(s) {
    let Lpointer = 0
    let Rpointer = s.length-1


    while(s.charAt(0) === s.charAt(s.length-1) && Rpointer > Lpointer){
        let suffix = s.charAt(0)
        let prefix = s.charAt(s.length-1)
        Lpointer = 0
        Rpointer = s.length-1

        for(let i = 0; i < s.length;i++){
            if(s.charAt(Lpointer) === suffix){
                Lpointer++
            }
            else{break}
        }
        for(let i = s.length-1; i >= Lpointer; i--){
            if(s.charAt(Rpointer) === prefix){
                Rpointer--
            }
            else{
                break
            }
        }
        s = s.substring(Lpointer,Rpointer+1)
    }
    return s.length
};

console.log(minimumLength("cabaabac"))