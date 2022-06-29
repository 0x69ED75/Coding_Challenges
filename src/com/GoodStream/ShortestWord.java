package com.GoodStream;

import java.util.stream.Stream;
/*
Given a string of words, return the length of the shortest word.
 */
public class ShortestWord {
    public static void main(String[] args) {
        System.out.println(findShort("bitcoin take over the world maybe who knows perhaps"));
    }

    // using streams here was completely unnecessary but was a fun challenge to practice on
    public static int findShort(String s) {
        return Stream.of(s.split(" "))
                .map (q -> new String(q).length())
                .mapToInt(q -> q)
                .min()
                .getAsInt();
    }

}
