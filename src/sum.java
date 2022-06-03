import java.util.stream.IntStream;

public class sum {

    public static void main(String[] args) {
        System.out.println(GetSum(0,-1));
    }

    public static int GetSum(int a, int b)
    {
        if (a>b){
            return(IntStream.rangeClosed(b, a).sum());
        }
        return(IntStream.rangeClosed(a, b).sum());
    }
}
