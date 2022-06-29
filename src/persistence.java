//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
/*
Return the multiplicative persistence of a given number.
multiplicative persistence is the number of times you must multiply the digits in num until you reach a single digit.
 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
 */
public class persistence {
    public static void main(String[] args) {
        System.out.println(persist(39));
    }

    public static long persist(long n) {
        int count = 0;
        while (String.valueOf(n).length() > 1 ) {
            int product = 1;
            int[] y = String.valueOf(n).chars().map(Character::getNumericValue).toArray(); // getting the string equivalent of n to turn into chars which turn into their integer equivalents, stored in an array
            for (int j : y) {
                product = product * j;
            }
            n = product;
            count++;
        }
        return count;
    }
}
