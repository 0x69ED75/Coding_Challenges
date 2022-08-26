package StreamExamples;
//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/java
/*
This Kata converts the hex value of a colour to its RGB equivalent.
 */
import java.util.Arrays;

public class hexToRgb {
    public static void main(String[] args) {
        System.out.println((Arrays.toString(hexStringToRGB("#FF9933"))));
    }

   /*
   This one line solution begins by deleting the character at index 0, to remove the pound symbol.
   Next, this value is converted to string so that it can then be split into an array of strings consisting of two characters each.
   Next, each value in the array is mapped to its integer equivalent, but, Integer.parseInt allows us to pass a Radix parameter which is the base you wish to convert into.
   For example you could convert into base 2 for binary, so I chose to convert into base 16 for hex.
   // Finally, so that it doesn't return an object array, the values are converted into integers, before being returned as an array.
    */
    public static int[] hexStringToRGB(String hex) {
        return Arrays.stream(new StringBuilder(hex).deleteCharAt(0).toString().split("(?<=\\G.{2})")).map(q -> (Integer.parseInt(q, 16))).mapToInt(i->i).toArray();
    }
}
