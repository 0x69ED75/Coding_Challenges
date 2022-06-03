import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class filter {
    public static void main(String[] args) {
        List<Object> x = Arrays.asList(1, 2, 3,"Test");
        filterList(x);
    }
    public static List<Object> filterList(final List<Object> list) {
        return list.stream().filter(q -> q instanceof Integer)
                .collect(Collectors.toList());
    }
}

