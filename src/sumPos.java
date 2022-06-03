import java.util.stream.IntStream;

public class sumPos {
    public static void main(String[] args) {

    }

    public static int sum(int[] arr){
        return IntStream.of(arr)
                .filter(p -> p > 0)
                .sum();
    }
}
