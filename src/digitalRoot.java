import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static java.util.stream.IntStream.of;

public class digitalRoot {
    public static void main(String[] args) {
        System.out.println(digital_root(456));

    }

    public static long digital_root(int n) {
        int returnal = 0;
        String[] x = String.valueOf(n).split("");
        for(String z : x){
            returnal += Integer.parseInt(z);
        }
        if(String.valueOf(returnal).length() > 1){
            return digital_root(returnal);
        }
        return returnal;
    }
}
