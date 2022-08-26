package CodeWars_Java;

//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
/*
For each character in a string, repeat this character the CodeWars_Java.same number of times as its index.
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */
public class Mumble {
    public static void main(String[] args) {
        System.out.println(accum("ZpglnRxqenU"));

    }
    public static String accum(String s) { // a quick, imperfect solution
        System.out.println(s);
        String returnal = "";
        for (int i = 0; i < s.length(); i++) {
            returnal += s.toUpperCase().charAt(i) ;
            for(int j = 0; j <= i-1; j++){
                returnal += s.toLowerCase().charAt(i);
            }
            returnal += '-';
        }
        return returnal.substring(0,returnal.length()-1); // removing the extra underscore
    }
}

