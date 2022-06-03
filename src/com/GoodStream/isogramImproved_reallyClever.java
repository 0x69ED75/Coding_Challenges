package com.GoodStream;

public class isogramImproved_reallyClever {
    public static void main(String[] args) {
        System.out.println(isIsogram("oiredfh"));
    }
    public static boolean  isIsogram(String str) {
        return str.length() == str.toLowerCase().chars().distinct().count();
    }
}
