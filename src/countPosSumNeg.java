import java.util.ArrayList;
import java.util.Arrays;

//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
public class countPosSumNeg {
    public static void main(String[] args) {
        System.out.println(countPositivesSumNegatives((new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15})));

    }
    public static int[] countPositivesSumNegatives(int[] input){
        if(input == null || input.length == 0){return new int[0];}
        ArrayList<Integer> x = new ArrayList<Integer>();
        x.add((int) Arrays.stream(input).filter(p-> p > 0).count());
        x.add(Arrays.stream(input).filter(p-> p < 0).sum());
        return x.stream().mapToInt(i -> i).toArray();
    }
}



