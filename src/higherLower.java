import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;


public class higherLower {
    public static void main(String[] args) {
        System.out.println(highAndLow("2 22 2"));

    }
    public static String highAndLow(String numbers) {
        List<Integer> x = Arrays.stream(numbers.split(" +")).map(Integer::parseInt).collect(Collectors.toList());
        return Collections.max(x) + " " + Collections.min(x);
    }

    }
