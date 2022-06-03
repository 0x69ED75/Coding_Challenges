package com.GoodStream;

import java.util.Comparator;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class OrderNum {
    public static void main(String[] args) {
        System.out.println(sortDesc(293));
    }

    public static int sortDesc(final int num) {
        return Integer.parseInt(String.valueOf(num)
                .chars()
                .map(i -> Integer.parseInt(String.valueOf((char) i)))
                .mapToObj(String::valueOf)
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.joining("")));
    }
}
