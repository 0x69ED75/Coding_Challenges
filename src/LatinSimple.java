import java.util.Arrays;
import java.util.stream.Collectors;

public class LatinSimple {
    public static void main(String[] args) {
        System.out.println(pigIt("Pig latin is cool"));

    }

    public static String pigIt(String str) {
        String returnal = "";
        String[] split = str.split(" ");
        for(String x : split){
            if (x.contains("!") ^ x.contains("?") ^ x.contains(".")){
                returnal += x;
                continue;
            };
            returnal += x.substring(1) + x.substring(0,1) + "ay" +" ";
        }
        return returnal.trim();
    }
}
