import java.util.ArrayList;

/*
https://www.codewars.com/kata/55d8aa568dec9fb9e200004a
Create a function sel_number(), that will return the size of the array containing integers that fulfill the following constraints when given two integers, n(maximum) and d(minimum):

The numbers should have 2 digits at least.

They should have their respective digits in increasing order from left to right. Examples: 789, 479, 12678, have these feature. But 617, 89927 are not of this type.
In general, if d1, d2, d3.... are the digits of a certain number i Example: ( i = d1d2d3d4d5) so, d1 < d2 < d3 < d4 < d5

They cannot have digits that occur twice or more. Example: 8991 should be discarded.

The difference between neighbouring pairs of digits cannot exceed the value of parameter n

so, if n was 2: 1345, 23568 and 234578 pass this test.

 */

public class HowManyNumbers {

    public static void main(String[] args) {

       System.out.println(selNumber(1000,1));

    }

    public static int selNumber(int n, int d) {
        ArrayList<Integer> values = new ArrayList<Integer>();
        outerLoop:
        for(int i = d; i < n ; i++){ // looping all numbers from d to n
            int[] digits = Integer.toString(i).chars().map(c -> c-'0').toArray(); // breaking integer i into an array of its digits
            if(digits.length == 1){ continue;} // if digits length is 1, it will meet the conditions below despite not meant to.
            for(int j = 0; j < digits.length-1; j++){ // looping through all digits of number.
                if(!((digits[j+1] - digits[j]) <= d && (digits[j+1] - digits[j]) > 0)){ // if the digit at j+1 subtract the digit at j is not <= d or is less than 0, return to the labelled outer loop
                    continue outerLoop;
                }
            }
            values.add(i); // this will only ever be reached if the above if condition is never met, meaning this number meets all criteria.
        }
        return values.size();
    }
}