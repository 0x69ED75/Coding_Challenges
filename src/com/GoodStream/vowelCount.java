package com.GoodStream;
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.*;

public class vowelCount {
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
