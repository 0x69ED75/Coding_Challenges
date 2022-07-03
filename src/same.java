//https://www.codewars.com/kata/550498447451fbbd7600041c
/*
Given two arrays, A and B, return whether the values in array B is the equivalent of all values in array A squared.
The two arrays are not guaranteed to be in the same order, i.e. index 0 of B is not necessarily the squared equivalent of index 0 of A

Valid:
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 */
import java.util.Arrays;

public class same {
    public static void main(String[] args) {
        int[] a = new int[]{0, -14, 191, 161, 19, 144, 195, 1};
        int[] b = new int[]{1, 0, 196, 36481, 25921, 361, 20736, 38025};
        System.out.println(comp(a,b));
    }
    /*
    This solution works by mapping each value in array b to its square root equivalent, sorting the stream, then converting it back into an array.
    Similarly, array a is converted to its absolute value equivalent, then sorted and converted back into an array.
    Now, both arrays are compared using Arrays.equals.

    The solution has a pretty bad time complexity due to .sort having a time complexity of O(nlog(n)), however, this solution is clear and short.
     */
    public static boolean comp(int[] a, int[] b) {
        return (b != null) && Arrays.equals(Arrays.stream(b).map(q -> (int) Math.sqrt(q)).sorted().toArray(), Arrays.stream(a).map(Math::abs).sorted().toArray());
    }

}
