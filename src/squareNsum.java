// https://www.codewars.com/kata/515e271a311df0350d00000f/java
import java.util.Arrays;

public class squareNsum {
    public static void main(String[] args) {
        System.out.println(squareSum(new int[] {1,2,2}));
    }
    public static int squareSum(int[] n)
    {
        return Arrays.stream(n)
                .map(q -> q*q)
                .sum();
    }
}
