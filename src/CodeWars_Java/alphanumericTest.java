package CodeWars_Java;

// https://www.codewars.com/kata/526dbd6c8c0eb53254000110
/*
given a string, check if this string only contains alphanumeric characters.
 */
public class alphanumericTest {
    public static void main(String[] args) {
        System.out.println(alphanumeric("abcdefghijklmnopq."));
    }
    public static boolean alphanumeric(String s){
        if(s.length() == 0){ return false;}
        String x = s.replaceAll("[^a-zA-Z0-9]", " ");
        return x.equals(s.trim());
    }
}
