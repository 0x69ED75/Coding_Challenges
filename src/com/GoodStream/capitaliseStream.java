package com.GoodStream;

import java.util.Arrays;
import java.util.stream.Collectors;

public class capitaliseStream {
    public static void main(String[] args) {
        System.out.println(toJadenCase("test one two three"));
    }
    public static String toJadenCase(String phrase) {
        if (null == phrase || phrase.length() == 0) {
            return null;
        }

        return Arrays.stream(phrase.split(" "))
                .map(i -> i.substring(0, 1).toUpperCase() + i.substring(1, i.length()))
                .collect(Collectors.joining(" "));
    }

}