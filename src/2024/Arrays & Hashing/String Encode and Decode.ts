//https://neetcode.io/problems/string-encode-and-decode
/*
Design an algorithm to encode a list of strings to a single string.
The encoded string is then decoded back to the original list of strings.
Please implement encode and decode
 */

class Solution {

    encode(strs) {
        if(!strs.length){return undefined}
        let encoded = strs[0]
        for(let i = 1; i < strs.length;i++){
            encoded += ";"
            encoded += strs[i]
        }
        return encoded
    }

    decode(str) {
        if(str?.length === undefined){return []}
        let strs = []
        let string = ""
        for(let i = 0; i < str?.length;i++){
            if(str[i] === ";"){
                strs.push(string)
                string = ""
            }
            else{
                string += str[i]
            }
        }
        strs.push(string)
        return strs
    }
}

let x = new Solution()
console.log(x.decode(x.encode([])))
console.log(x.decode(x.encode([""])))
