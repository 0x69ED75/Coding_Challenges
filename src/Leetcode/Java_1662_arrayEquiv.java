package Leetcode;

public class Java_1662_arrayEquiv {

    public static void main(String[] args) {

    }
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        return String.join("",word1).equals(String.join("",word2));
    }
}

