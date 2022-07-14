import java.util.ArrayList;
import java.util.List;
/*
https://www.codewars.com/kata/52756e5ad454534f220001ef
Finds the largest common subsequence of two strings.

My method does this by storing all possible subsequences of both strings, and then searching both subsequences to find the biggest common subsequences.

Therefore, this solution has quite bad time complexity, as finding all substrings of a string becomes increasingly time-consuming as string size increases
 */
public class longestCommonSubsequence {
    public static void main(String[] args) {

        System.out.println(lcs("abcdef", "acf"));
    }

    public static String lcs(String x, String y) {
        // getting subsequences of both strings
        List<String> xSubsequences = getCs(x);
        List<String> ySubsequences = getCs(y);
        System.out.println(xSubsequences);

        String currentBiggestSubstring = "";
        for(int i = 0; i < xSubsequences.size(); i++){ // finding the common biggest substring of both subsequences
            if(ySubsequences.contains(xSubsequences.get(i)) && xSubsequences.get(i).length() > currentBiggestSubstring.length()){
                currentBiggestSubstring = xSubsequences.get(i);
            }
        }
        return currentBiggestSubstring;
    }

    /* Non-recursive Solution to get subsequence of a given string with time complexity O(2ⁿ*n)
    Explanation: https://www.youtube.com/watch?v=b7AYbpM5YrE
    Uses the fact we know there will be exactly (2^word.length-1) subsequences of any given string.
    the bit representation on every number 0 to (2^word.length-1) is used
    You can then use the current bits which are set to 1 to work out which character of the string to be included in each subsequence
     */
    public static List<String> getCs(String word){
        ArrayList<String>subsequences=new ArrayList<>();
        for (int num = 0; num < (Math.pow(2,word.length())); num++) {
            String subsequence = "";
            for (int i = 0; i < word.length(); i++) {
                if ((num & (1 << i))!=0) {
                    subsequence += word.charAt(i);
                }
            }
            if (subsequence.length() > 0) {
                subsequences.add(subsequence);
            }
        }
        return subsequences;
    }

}