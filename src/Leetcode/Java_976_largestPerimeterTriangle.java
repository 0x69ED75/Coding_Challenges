package Leetcode;

/*
https://leetcode.com/problems/largest-perimeter-triangle/description/
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths.
If it is impossible to form any triangle of a non-zero area, return 0.
 */

import java.util.Arrays;

public class Java_976_largestPerimeterTriangle {

    public static int largestPerimeter(int[] nums) {
        Arrays.sort(nums);
        for(int i = nums.length-1; i >= 2; i--){
            if(nums[i-2] + nums[i-1] > nums[i]){
                return nums[i-2] + nums[i-1] + nums[i];
            }
        }
        return 0 ;
    }

    public static void main(String[] args) {
        System.out.println(largestPerimeter(new int[]{1,2,1}));
    }
}
