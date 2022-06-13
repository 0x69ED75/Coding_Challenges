package com.GoodStream;

import java.util.Locale;
import java.util.Objects;
import java.util.stream.Collectors;

public class detectPangram {
    public static void main(String[] args) {
        System.out.println(check("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
    }
    public static boolean check(String sentence){
        sentence = sentence.replaceAll("\\s+",""); // removing all whitespace
        sentence = sentence.replaceAll("\\d+",""); // removing all numbers
        sentence = sentence.toLowerCase();
        int x = (int)sentence.chars() // turning sentence into a stream of chars
                .mapToObj(c -> (char) c) // mapping to char equivalents
                .filter(q -> q != '.' && q != ',') // filtering out the punctuation
                .distinct() // Removing all repeat values in stream
                .count(); // counting what remains.
        return x == 26; // This value should be 26 (letters in alphabet)
    }
}
