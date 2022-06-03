package com.GoodStream;

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
