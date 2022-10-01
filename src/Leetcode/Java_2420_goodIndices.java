package Leetcode;

/*
https://leetcode.com/problems/find-all-good-indices/description/
You are given a 0-indexed integer array nums of size n and a positive integer k.

We call an index i in the range k <= i < n - k good if the following conditions are satisfied:
      The k elements that are just before the index i are in non-increasing order.
      The k elements that are just after the index i are in non-decreasing order.

Return an array of all good indices sorted in increasing order.
 */
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

public class Java_2420_goodIndices {
    public static List<Integer> goodIndices(int[] nums, int k) {
        HashSet<Integer> set = new HashSet<Integer>();
        List<Integer> goodIndices = new ArrayList<Integer>();

        for(int i = 0; i < nums.length; i++){
            set.add(nums[i]);
            if(i>=k && i<nums.length-k){
                goodIndices.add(i);
            }
        }

        if(set.size() == 1){return goodIndices;}

        goodIndices.clear();

        outer:
        for(int i = k ; i < nums.length-k; i++){
            int x = 2147483647;
            for(int j = i-k ; j < i ; j++){
                if(nums[j] > x){continue outer;}
                x = nums[j];
            }
            x = 0;
            for(int m = i+1 ; m <= i+k; m++){
                if(nums[m] < x){continue outer;}
                x = nums[m];
            }
            goodIndices.add(i);
        }
        return goodIndices;
    }

    public static void main(String[] args) {
        System.out.println(goodIndices(new int[]{2, 1, 1, 1, 3, 4, 1},2));
    }
}
