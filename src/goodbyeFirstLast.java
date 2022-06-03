import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class goodbyeFirstLast {

    public static void main(String[] args) {
        System.out.println(remove("Test"));
    }

    public static String remove(String str) {
        StringBuilder string = new StringBuilder(str);
        string.deleteCharAt((str.length())-1);
        string.deleteCharAt(0);
        return string.toString();
    }
}
