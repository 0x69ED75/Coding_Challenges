package StreamExamples;
//https://www.codewars.com/kata/54ba84be607a92aa900000f1
/*
Returns whether a string is an Isogram
An CodeWars_Java.isogram is a word that has no repeating letters
 */
public class isogramImproved_reallyClever {
    public static void main(String[] args) {
        System.out.println(isIsogram("oiredfh"));
    }
    public static boolean  isIsogram(String str) {
        return str.length() == str.toLowerCase().chars().distinct().count();
    }
}
