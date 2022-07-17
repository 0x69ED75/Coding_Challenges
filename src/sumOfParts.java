import java.util.Arrays;

public class sumOfParts {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(sumParts(new int[] {0, 1, 3, 6, 10})));

    }
    /*
    Simply repeatedly doing the sum of the array fails, as the array in the test cases grow very large
    Therefore, another way to calculate the array sum was required.
    The sum of the array was calculated.
    Then, this sum was subtracted by each value in the array.
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
