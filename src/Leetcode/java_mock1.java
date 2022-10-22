package Leetcode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/*
Mock interview taken on LeetCode
 */

public class java_mock1 {

    // Given an integer array of size n, find all elements that appear more than n/3 times.
    public static List<Integer> majorityElement(int[] nums) {
        HashMap<Integer,Integer> x = new HashMap<>();
        int n = nums.length/3;

        for(int i = 0; i < nums.length; i++){
            x.put(nums[i],x.getOrDefault(nums[i],0)+1);
        }

        ArrayList<Integer> y = new ArrayList<>();
        Integer[] z = x.keySet().toArray(new Integer[0]);
        for(int i = 0; i < z.length;i++){
            if(x.get(z[i]) > n){
                y.add(z[i]);
            }
        }
        return y;
    }

    /*
     Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
     A shift on s consists of moving the leftmost character of s to the rightmost position.
     For example, if s = "abcde", then it will be "bcdea" after one shift.*/
    public static boolean rotateString(String s, String goal) {
        StringBuilder x = new StringBuilder(s);

        // brute force approach, deleting char at start, appending it to end n times.
        // if at any point it matches goal, return true;
        // this algorithm falls short on long strings, but is a neat solution in a timed environment
        for(int i = 0; i < x.length(); i++){
            char first = x.charAt(0);
            x.delete(0,1);
            x.append(first);
            if (x.toString().equals(goal)){return true;}
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(rotateString("abcde","cdeab"));
    }

}
