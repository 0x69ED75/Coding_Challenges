/*
https://leetcode.com/problems/rearrange-spaces-between-words/description/
given a string text of words that are placed among some number of spaces.
Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized.
If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

Return the string after rearranging the spaces.
 */
package Leetcode;

public class Java_1592_RearrangeWordSpaces {

    public static String reorderSpaces(String text) {
        String[] wordArr = text.trim().split("\\s+");
        int spaces = (int) text.chars().filter(q -> q == ' ').count();
        int numOfWords = wordArr.length;
        int gapsPerWord = numOfWords <= 0 ? 0 : spaces / (numOfWords-1);
        String x = "";

        for(int i = 0; i < numOfWords-1; i++){ // looping to numOfWords -1. adding spaces between each word.
            x += wordArr[i];
            for(int j = 0; j < gapsPerWord; j++){
                x += " ";
            }
        }
        x += wordArr[wordArr.length-1]; // adding the last word to x

        while(x.length() < text.length()){ // While x.length is less than text.length, we know we must be missing some spaces on the end of the word.
            x += " ";
        }

        return x;
    }

    public static void main(String[] args) {
        System.out.println(reorderSpaces(" practice   makes   perfect"));
    }
}
