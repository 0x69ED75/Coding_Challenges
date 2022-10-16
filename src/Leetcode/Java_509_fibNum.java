package Leetcode;
/*
https://leetcode.com/problems/fibonacci-number/description/
Return the nth item in the fibonacci sequence.
 */

public class Java_509_fibNum {
    public static int fib(int n) {
        //return DP_fibFinder(n,new Integer[n+1]);
        return bottomUp_fib(n);
    }
    // Solution uses Dynamic Programming to memoize previously seen results of the fibonacci sequence, to avoid unnecessary recalculation
    public static int DP_fibFinder(int n, Integer[]memo){
        int result = 0;
        if(memo[n] != null){
            return memo[n];
        }
        if(n == 1 || n == 2){
            result = 1;
        }
        else{
            result = DP_fibFinder(n-1,memo) + DP_fibFinder(n-2,memo);
        }
        memo[n] = result;
        return result;
    }

    // Alternative "Bottom-up" DP approach O(N):
    // creates a new array of size n+1
    // each value in the array is the sum of the previous 2 values in the array
    public static int bottomUp_fib(int n){
        if(n == 1 || n == 2){
            return 1;
        }
        int[] bottomUp = new int[n+1];
        bottomUp[1] = 1;
        bottomUp[2] = 1;
        for(int i = 3; i <= n; i++){
            bottomUp[i] = bottomUp[i-1] + bottomUp[i-2];
        }
        return bottomUp[n];
    }



    public static void main(String[] args) {
        System.out.println(fib(10));
    }



}
