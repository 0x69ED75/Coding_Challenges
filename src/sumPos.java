import java.util.stream.IntStream;
//https://www.codewars.com/kata/5715eaedb436cf5606000381
// from  an array of numbers, return the sum of all of the positives numbers
public class sumPos {
    public static void main(String[] args) {

    }

    public static int sum(int[] arr){
        return IntStream.of(arr)
                .filter(p -> p > 0)
                .sum();
    }
}
