package com.GoodStream;
//https://www.codewars.com/kata/54da5a58ea159efa38000836
/*
Given an array of integers, find the integer that appears an odd number of times.
 */

import java.util.Arrays;
public class odd {
    public static void main(String[] args) {
        System.out.println(findIt(new int[]{20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5}));
    }
    public static int findIt(int[] a) {
        return Arrays.stream(a).reduce(0, (x, y) -> x ^ y);
    }
}
