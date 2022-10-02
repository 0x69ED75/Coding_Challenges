/*
https://leetcode.com/problems/remove-letter-to-equalize-frequency/description/
Given a 0-indexed string consisting of lower case letters:
You must select one character to remove from word, so that the frequency of each char in word is equal.

Return true if it is possible to remove a single character, so that the frequency of all letters in word are equal.
 */
package Leetcode;
import java.util.HashMap;
public class Java_2423_letterToEqualize {
    public static boolean equalFrequency(String word) {

        outer:
        for(int i = 0; i < word.length(); i++){
            HashMap<Character, Integer> freq = new HashMap<Character, Integer>();
            StringBuilder sb = new StringBuilder(word);
            sb.deleteCharAt(i);
            for(int j = 0; j < sb.length(); j++){
                freq.put(sb.charAt(j),freq.getOrDefault(sb.charAt(j),0)+1);
            }
            Integer[] vals = freq.values().toArray(new Integer[0]);
            int x = vals[0];
            for(int k = 1; k < vals.length; k++){
                if(vals[k] != x){continue outer;}
            }
            return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(equalFrequency("aazz"));
    }
}
