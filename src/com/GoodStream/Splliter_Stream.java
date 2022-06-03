package com.GoodStream;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Splliter_Stream {
    public static void main(String[] args) {
        String[] array = solution("abcde");
        for (String i : array) {
            System.out.println(i);
        }
    }

    public static String[] solution(String s) {
        return Stream.of(s.split("(?<=\\G.{2})"))
                .map(i -> i.length() % 2 == 0 ? i : i + "_")
                .toArray(String[]::new);
    }

    }
