//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
//calculate the number of trailing zeros in a factorial of a given number.
public class TrailingZeroFactorial {
    public static int trailingZeroes(int n) {
        int count = 0;
        while (n > 0) {
            count += n / 5;
            n /= 5;
        }
        return count;
    }
}
