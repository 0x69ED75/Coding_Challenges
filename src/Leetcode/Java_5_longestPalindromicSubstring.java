/*
https://leetcode.com/problems/longest-palindromic-substring
Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

(Must run efficiently, as very long Strings are given.)
 */
package Leetcode;

public class Java_5_longestPalindromicSubstring {

    public static String longestPalindrome(String s) {
        int count = 0;

        if(s.length() < 2){return s;}
        int low = 0;
        int max = 0;

        for (int i = 0; i < s.length()-1; i++) {
            int[] x = getPalindrome(s, i, i, low, max);
            low = x[0];max =x[1];
            x = getPalindrome(s, i, i+1,low,max);
            low = x[0];max =x[1];
        }
        return s.substring(low, low + max);
    }

    public static int[] getPalindrome(String s, int left, int right, int low, int max){
        int len = s.length();
        while(left >= 0 && right < len && s.charAt(left) == s.charAt(right)){
            left--;
            right++;
        }

        if (max < right - left - 1) {
            low = left + 1;
            max = right - left - 1;
        }
        return new int[]{low, max};
    }



    public static void main(String[] args) {
        System.out.println(longestPalindrome("bb"));
    }
}
