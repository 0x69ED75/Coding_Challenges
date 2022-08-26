package CodeWars_Java;

//https://www.codewars.com/kata/5842df8ccbd22792a4000245
/*
Given an integer, give its expanded form (https://www.mathsisfun.com/definitions/expanded-notation.html) equivalent.
 */
public class expandedform {
    public static void main(String[] args) {
        System.out.println(expandedForm(70304));
    }
    /*
    This algorithm works by looping over every digit in the number.
    If the character isn't a zero, zeroes are added to this number, with the number of zeroes added being equivalent to its position in the string -1
    This gives us the expanded form of a number, using a less mathematical algorithm.
     */
    public static String expandedForm(int num) {
        StringBuilder s = new StringBuilder();
        int x = (int) Math.log10(num) + 1; // This stores the length of the integer as x in an efficient manner.
        for(int i = 0; i < (int) Math.log10(num)+1 ;i++){
            x--;
            if(String.valueOf(num).charAt(i) != '0'){
                s.append(String.valueOf(num).charAt(i));
                for(int j = 0; j < x; j++){
                    s.append('0');
                }
                s.append(" + ");
            }
        }
        return s.deleteCharAt(s.length()-2).toString().trim(); // the algorithm will add one too many "+" so its removed.
    }
}
