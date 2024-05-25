//https://leetcode.com/problems/valid-palindrome/
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
 */
function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    let left = 0
    let right = s.length-1

    while(left !== right && left < right){
        let leftChar = s[left]
        let rightChar = s[right]
        let lCode = s.charCodeAt(left)
        let rCode = s.charCodeAt(right)

        if(!(lCode > 96 && lCode < 123) && !(lCode > 47 && lCode < 58)){
            left++
            continue
        }
        if(!(rCode > 96 && rCode < 123) && !(rCode > 47 && rCode < 58)){
            right--
            continue
        }

        if(leftChar !== rightChar){
            return false
        }
        left++
        right--
    }
    return true
};

console.log(isPalindrome("0p"))