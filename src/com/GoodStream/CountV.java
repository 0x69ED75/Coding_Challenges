package com.GoodStream;

import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.*;

public class CountV {
    public static void main(String[] args) {
        System.out.println(getCount("abracadabra"));
    }
    public static long getCount(String str) {
        return  str.chars()
                .mapToObj(c -> (char) c)
                .filter(y -> y == 'a' || y == 'i' || y == 'e' || y == 'o' || y == 'u')
                .count();
    }

}
