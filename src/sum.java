//https://www.codewars.com/kata/55f2b110f61eb01779000053
import java.util.stream.IntStream;
public class sum {

    public static void main(String[] args) {
        System.out.println(GetSum(9,11));
    }

    public static int GetSum(int a, int b)
    {
        if (a>b){
            return(IntStream.rangeClosed(b, a).sum());
        }
        return(IntStream.rangeClosed(a, b).sum());
    }
}
