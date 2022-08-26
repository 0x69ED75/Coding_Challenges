package CodeWars_Java;

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Given a string, remove the first and last character.
public class removeFirstLastChar {

    public static void main(String[] args) {
        System.out.println(remove("Test"));
    }

    public static String remove(String str) {
        StringBuilder string = new StringBuilder(str);
        string.deleteCharAt((str.length())-1);
        string.deleteCharAt(0);
        return string.toString();
    }
}
