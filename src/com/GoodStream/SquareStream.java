package com.GoodStream;
//https://www.codewars.com/kata/546e2562b03326a88e000020
import java.util.stream.Collectors;

public class SquareStream {
    public static void main(String[] args) {
        System.out.println(squareDigits(9119));
    }
    public static int squareDigits(int n) {
        return Integer.parseInt(String.valueOf(n) // returning an integer value of the string value of n
                .chars() // getting the chars
                .map(i -> Integer.parseInt(String.valueOf((char) i))) // parsing the chars to integer
                .map(i -> i * i) // squaring
                .mapToObj(String::valueOf) // mapping back to string value of
                .collect(Collectors.joining(""))); // joining chars
    }
}
