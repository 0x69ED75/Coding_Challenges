package com.GoodStream;
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

/*
Given a Stirng array, split the string into two pairs of two characters, if the string length is odd, put an underscore to make it even
'abc' =>  ['ab', 'c_']
 */

import java.util.stream.Stream;

public class Splliter_Stream {
    public static void main(String[] args) {
        String[] array = solution("abcde");

    }

    public static String[] solution(String s) {
        return Stream.of(s.split("(?<=\\G.{2})"))
                .map(i -> i.length() % 2 == 0 ? i : i + "_")
                .toArray(String[]::new);
    }

    }
