package CodeWars_Java;//https://www.codewars.com/kata/585d7d5adb20cf33cb000235
// In an array, all numbers are equal, apart from one, find it.
import java.util.Arrays;
public class UniqueNumber {
    public static void main(String[] args) {
        System.out.println(findUniq(new double[]{1, 1, 1, 2, 1, 1}));
    }
    public static double findUniq(double arr[]) {
        if(arr[0] != arr[arr.length-1] && arr[0] != arr[arr.length-2] ){ // if the unique value is at index 0 of arr, then, we must return the first value of the distinct array.
            return Arrays.stream(arr).distinct().toArray()[0];
        }
        return Arrays.stream(arr).distinct().toArray()[1]; // otherwise, the value will be at index 1.
    }

}
