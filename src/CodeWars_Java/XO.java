package CodeWars_Java;

//https://www.codewars.com/kata/55908aad6620c066bc00002a
// Given a string, return true if the string contains the CodeWars_Java.same number of case-insentive X's and O's
public class XO {
    public static void main(String[] args) {
        System.out.println(getXO("ooxXm"));

    }

    public static boolean getXO (String str) {
        return str.toLowerCase().chars().filter(q -> q == 'x').count() == str.toLowerCase().chars().filter(q -> q == 'o').count();
    }
}
