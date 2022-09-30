package Leetcode;

import java.math.BigInteger;
import java.util.stream.IntStream;

public class Java_2270_numWaysToSplitArray {
    public static int waysToSplitArray(int[] nums) {

        int count = 0;
        long sumAfterI = 0;
        long sumTrailing = 0;

        for(int i = 0; i < nums.length; i++){
            sumAfterI += nums[i];
        }

        for(int i = 0; i < nums.length-1; i++){
            sumAfterI -= nums[i];
            sumTrailing += nums[i];
            if(sumTrailing >= sumAfterI){count++;}
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(waysToSplitArray(new int[]{10, 4, -8, 7}));
    }

}
