import java.util.stream.Collectors;
import java.util.stream.Stream;

public class square {
    public static void main(String[] args) {
        System.out.println(squareDigits(9119));
    }
    public static int squareDigits(int n) {
        String y = "";
        String[]arr = Integer.toString(n).split("");
        for (String x: arr){
            y += Integer.parseInt(x) * Integer.parseInt(x);
        }
        return Integer.parseInt(y);
    }
}
