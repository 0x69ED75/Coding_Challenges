/*
https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/
Given an array of N characters "colors" and an array neededTime where neededTime[i] is the required time to remove character colors[i]
Return the minimum amount of time it can take to get an array of characters such that there are no sequences of repeating characters.

colors = "abaac", neededTime = [1,2,3,4,5]
Output: 3
 */
package Leetcode;

public class Java_1578_MinTimetoMakeColorful {

    public static int minCost(String colors, int[] neededTime) { // o(N) solution with a single pointer.
        int count = 0;
        int currentMax = 0;
        char currentCol = ' ';

        for(int i = 0; i < colors.length();i++){
            if (colors.charAt(i) == currentCol) {
                if(neededTime[i] > currentMax){ // tracking the biggest number along a sequence of the same colour.
                    count += currentMax; // we pop any balloon which is not the biggest in the sequence of the same colour.
                    currentMax = neededTime[i];
                }
                else{
                    count += neededTime[i];
                }
            }
            else{
                currentCol = colors.charAt(i);
                currentMax = neededTime[i];
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(minCost("aaabbbabbbb", new int[]{3,5,10,7,5,3,5,5,4,8,1}));
    }
}


/* Slower, two pointer solution.
    public static int minCost(String colors, int[] neededTime) {
        String[] colorsArr = colors.split("");
        int count = 0;
        int slowPointer = 0;
        int fastPointer = 1;
        while(fastPointer != colorsArr.length){
            if(Objects.equals(colorsArr[slowPointer], colorsArr[fastPointer])){
                if(neededTime[slowPointer] < neededTime[fastPointer]){
                    count+= neededTime[slowPointer];
                    slowPointer = fastPointer;
                    fastPointer++;
                }
                else{
                    count += neededTime[fastPointer];
                    fastPointer++;
                }
            }
            else{
                slowPointer = fastPointer;
                fastPointer++;
            }
        }
        return count;
    }
 */