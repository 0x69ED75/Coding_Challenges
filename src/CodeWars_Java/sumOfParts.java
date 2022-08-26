package CodeWars_Java;

import java.util.Arrays;

/*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b

For a given array, add up all the values in the array, and store this value in a new array.
then, remove the first value in the array and calculate the CodeWars_Java.sum again.
Repeat this until the entire array was traversed.

ls = [0, 1, 3, 6, 10]

would be broken down into:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

and return:
[20, 20, 19, 16, 10, 0]

However, the array will grow very large in tests. having tens of thousands of elements
Therefore, it must run efficiently.
 */

public class sumOfParts {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(sumParts(new int[] {0, 1, 3, 6, 10})));

    }
    /*
    Simply repeatedly doing the CodeWars_Java.sum of the array fails, as the array in the test cases grow very large
    Therefore, another way to calculate the array CodeWars_Java.sum was required.
    The CodeWars_Java.sum of the array was calculated.
    Then, this CodeWars_Java.sum was subtracted by each value in the array.
    This way, the algorithm only has a runtime of O(n)
     */

    public static int[] sumParts(int[] ls) {
        int[] x = new int[ls.length+1];
        int arraySum = Arrays.stream(ls).sum();
        x[0] = arraySum;

        for( int i = 0 ; i < ls.length; i++){
           x[i+1] = arraySum - ls[i];
            arraySum = arraySum - ls[i];
        }
        return x;
    }
}
