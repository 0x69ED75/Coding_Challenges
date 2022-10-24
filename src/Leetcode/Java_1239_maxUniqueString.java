package Leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
/*
https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/
Given an array of strings arr
. A string s is formed by the concatenation of a subsequence of arr that has unique characters.

Return the maximum possible length of s.
 */

public class Java_1239_maxUniqueString {

    public static void main(String[] args) {
        System.out.println(maxLength(Arrays.asList("un","iq","ue")));
    }

    public static int maxLength(List<String> arr) {

        ArrayList<String> unique = new ArrayList<>();
        unique.add("");
        for(String str : arr){
            if(!isUnique(str)){
                continue;
            }
            ArrayList<String> uniqueConcatenation = new ArrayList<>();
            for(String uniqStr : unique){
                String combined = uniqStr + str;
                if(isUnique(combined)){
                    uniqueConcatenation.add(combined);
                }
            }
            unique.addAll(uniqueConcatenation);
        }

        int maxlength = 0;
        for(String uniq : unique){
            if(uniq.length() > maxlength){
                maxlength = uniq.length();
            }
        }
        return  maxlength;
    }

    public static Boolean isUnique(String s){
        char[] chars = s.toCharArray();
        if(s.length() > 26){return false;}
        boolean[] charList = new boolean[26];
        char[] stringArr = s.toCharArray();

        for(char c : stringArr){
            if(charList[c-'a']){
                return false;
            }
            else{
                charList[c-'a'] = true;
            }
        }
        return true;
    }
}
