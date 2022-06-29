import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
//https://www.codewars.com/kata/554b4ac871d6813a03000035
/*
Given a string of numbers seperated by commas, return the highest and lowest number.
 */
public class higherLower {
    public static void main(String[] args) {
        System.out.println(highAndLow("2 22 2"));

    }
    public static String highAndLow(String numbers) {
        List<Integer> x = Arrays.stream(numbers.split(" +")).map(Integer::parseInt).collect(Collectors.toList());
        return Collections.max(x) + " " + Collections.min(x);
    }

    }
