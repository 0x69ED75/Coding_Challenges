import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class isogram {
    public static void main(String[] args) {
        System.out.println(isIsogram("Dermatoglyphics"));
    }
    public static boolean isIsogram(String str) {
        String x = str.toLowerCase().chars()
                .mapToObj(c -> (char) c)
                .distinct()
                .map(Objects::toString)
                .collect(Collectors.joining(""));
        return x.equals(str.toLowerCase()) ? true : false;
    }
}
