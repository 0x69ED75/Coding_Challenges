package Leetcode;

import java.util.HashMap;

/*
https://leetcode.com/problems/contains-duplicate-ii/description/
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array
such that nums[i] == nums[j] and abs(i - j) <= k.
 */

public class Java_219_containsDuplicateII {

    public static boolean containsNearbyDuplicate(int[] nums, int k) {
        HashMap<Integer, Integer> x = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            Integer y = nums[i];
            if(x.containsKey(y) && i - x.get(y) <= k){
                return true;
            }
            x.put(y,i); // putting nums[i] in hashmap as key, and its index as value.
        }

        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsNearbyDuplicate(new int[] {1,2,3,1},3));

    }
}
