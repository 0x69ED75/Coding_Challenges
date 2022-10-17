package Leetcode;
/*
https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/
Given a string sentence containing only lowercase English letters,
return true if sentence is a pangram, or false otherwise.
 */
public class Java_1832_CheckPangram {
    public static boolean checkIfPangram(String sentence) {
        if(sentence.length() < 26){return false;}
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        for(int i = 0; i < alphabet.length(); i++){
            if(sentence.indexOf(alphabet.charAt(i)) == -1){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
    }
}
