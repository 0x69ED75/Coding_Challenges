import java.util.stream.IntStream;
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
public class smolArray {

    public static int findSmallestInt(int[] args) {
        return IntStream.of(args)
                .min()
                .getAsInt();
    }
}
