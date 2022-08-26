package StreamExamples;
//https://www.codewars.com/kata/523f5d21c841566fde000009
/*
This application subtracts one array from another, removing the values in array B from Array A.
Kata.arrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2}) returns new int[] {1, 3}
 */

import java.util.Arrays;
import java.util.stream.IntStream;

public class arrayDiff_Stream {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(arrayDiff(new int[]{1, 2}, new int[]{1})));
    }
    public static int[] arrayDiff(int[] a, int[] b) {
        return IntStream.of(a).filter(x -> IntStream.of(b).noneMatch(y -> y == x)).toArray();

    }

    }
