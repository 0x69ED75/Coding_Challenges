package StreamExamples;
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
/*
take any non-negative integer as an argument and return it with its digits in descending order
 */
import java.util.Comparator;
import java.util.stream.Collectors;

public class OrderNum {
    public static void main(String[] args) {
        System.out.println(sortDesc(293));
    }

    public static int sortDesc(final int num) {
        return Integer.parseInt(String.valueOf(num)
                .chars()
                .map(i -> Integer.parseInt(String.valueOf((char) i)))
                .mapToObj(String::valueOf)
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.joining("")));
    }
}
