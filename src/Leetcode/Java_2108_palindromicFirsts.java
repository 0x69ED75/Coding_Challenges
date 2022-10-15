package Leetcode;

/*
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
Given an array of strings words, return the first palindromic string in the array.
 If there is no such string, return an empty string "".
 */

public class Java_2108_palindromicFirsts {
    public static String firstPalindrome(String[] words) {
        for(int i = 0; i < words.length; i++){
            if(words[i].charAt(0) != words[i].charAt(words[i].length()-1)){continue;} // saving a bit of time by only reversing potential palindromes
            StringBuilder reverse = new StringBuilder(words[i]).reverse();
            if(reverse.toString().equals(words[i])){return words[i];}
        }
        return "";
    }

    public static void main(String[] args) {
        System.out.println(firstPalindrome(new String[]{"abc","car","ada","racecar","cool"}));
    }
}
