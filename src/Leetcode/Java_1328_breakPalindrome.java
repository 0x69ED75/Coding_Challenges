package Leetcode;
/*
https://leetcode.com/problems/break-a-palindrome/description/
Given a palindromic string of lowercase letters, replace exactly one character so that the resulting string is not a palindrome
Ensure the resulting string is the lexicographically smallest possible.
Return an empty string if no character can be replaced to make the string not a palindrome.
 */
public class Java_1328_breakPalindrome {
    public static String breakPalindrome(String palindrome) {
        if(palindrome.length() == 1){return "";}
        char[] x = palindrome.toCharArray();

        // check each char in string up to half, if any char is not 'a', make it 'a'
        for (int i = 0; i < x.length / 2; i++) { // only need to check half the string, since its palindromic. also avoids the odd palindromic problem (aba -> aaa) is still palindromic
            if (x[i] != 'a') {
                x[i] = 'a';
                return String.valueOf(x);
            }
        }
        x[x.length - 1] = 'b'; // if all chars are 'a', then turn the end char to b.
        return String.valueOf(x);

    }

    public static void main(String[] args) {
        System.out.println(breakPalindrome("bbb"));
    }
}
