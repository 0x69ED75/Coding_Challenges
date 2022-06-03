package com.GoodStream;

import java.util.Objects;
import java.util.stream.Collectors;

public class disemvowel {
    public static void main(String[] args) {
        System.out.println(disemvowel("This website is for losers LOL"));

    }
    public static String disemvowel(String str) {
        return str.chars()
                .mapToObj(c -> (char) c)
                .filter(q -> Character.toLowerCase(q) != 'a' ^ Character.toLowerCase(q) == 'e' ^ Character.toLowerCase(q) == 'i' ^ Character.toLowerCase(q) == 'o' ^ Character.toLowerCase(q) == 'u')
                .map(Objects::toString)
                .collect(Collectors.joining(""));
    }

    }
