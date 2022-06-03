import java.util.stream.IntStream;

public class smolArray {

    public static int findSmallestInt(int[] args) {
        return IntStream.of(args)
                .min()
                .getAsInt();
    }
}
