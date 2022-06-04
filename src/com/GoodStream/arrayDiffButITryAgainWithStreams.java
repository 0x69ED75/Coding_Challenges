package com.GoodStream;
//https://www.codewars.com/kata/523f5d21c841566fde000009
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class arrayDiffButITryAgainWithStreams {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(arrayDiff(new int[]{1, 2}, new int[]{1})));
    }
    public static int[] arrayDiff(int[] a, int[] b) {
        return IntStream.of(a).filter(x -> IntStream.of(b).noneMatch(y -> y == x)).toArray();

    }

    }
