package Leetcode;

public class Java_334_increasingTripletSubsequence {


    public static boolean increasingTriplet(int[] nums) {
        // initializing two variables containing the highest possible int.
        int maxArrayVal = Integer.MAX_VALUE;
        int maxArrayVal2 = Integer.MAX_VALUE;

        for(int i = 0; i <nums.length; i++){
            if(maxArrayVal >= nums[i]){ // if the value in maxArrayVal is bigger than nums[i], set maxArrayVal to nums[i]
                maxArrayVal = nums[i];
            }
            else if(maxArrayVal2 >= nums[i]){
                maxArrayVal2 = nums[i];
            }
            else{
                return true;
            }
        }

        return false;
    }





    public static void main(String[] args) {
        System.out.println(increasingTriplet(new int[]{20,100,10,12,5,13})); // 10,12,13
        System.out.println(increasingTriplet(new int[]{0,4,2,1,0,-1,-3})); // false
        System.out.println(increasingTriplet(new int[]{1,2,3,4,5}));

    }
}
