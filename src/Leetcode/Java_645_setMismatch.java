package Leetcode;
import java.util.Arrays;
public class Java_645_setMismatch {

    /*
    https://leetcode.com/problems/set-mismatch
    Given an array of nums, which is supposed to containing all numbers 1 to n.
    Find any duplicate value
    find any missing value
    Input: nums = [1,2,2,4]
    Output: [2,3]
     */
    public static int[] findErrorNums(int[] nums) {
        int[] map = new int[nums.length+1];
        // mapping each number in nums where the index is a key, representing the value, and map[i] = the frequency of the value
        for(int i = 0; i < nums.length; i++){map[nums[i]]++;}

        int x = 0; int y = 0;
        // in the map, any value which is 2, is duplicate, any value which is 0 is missing.
        for(int i = 1; i <= nums.length; i++){
            if(map[i] == 2){x = i;}
            if(map[i] == 0){y = i;}
            if(x != 0 && y != 0){return new int[]{x,y};}
        }

        return null;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(findErrorNums(new int[]{1,1})));
    }
}
