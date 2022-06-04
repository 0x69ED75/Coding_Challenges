package com.GoodStream;
//https://www.codewars.com/kata/526571aae218b8ee490006f4
public class bitCount {
    public static void main(String[] args) {

    }

    public static long countBits(int n){
       String x = Integer.toBinaryString(n);
        return x.chars()
                .filter(q -> q == '1')
                .count();
    }

    }
