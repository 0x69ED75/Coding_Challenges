//https://www.codewars.com/kata/554ca54ffa7d91b236000023
/*
In an array, remove any value if it appears in the array more than N times.
 */
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Collectors;

public class occurenceDeleter {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(deleteNth(new int[]{  1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1}, 3)));

    }
    public static int[] deleteNth(int[] elements, int maxOccurrences) {
        ArrayList<Integer> y = (ArrayList<Integer>) Arrays.stream(elements).boxed().collect(Collectors.toList());
        if(maxOccurrences == 0){return new int[0];}
        int count = 0;
        for (int i = 0; i < y.size(); i++) {
            int checkint = y.get(i);
            for (int j= 0; j < y.size(); j++) {
                if(y.get(j) == checkint){
                    count++;
                }
            }
            while(count > maxOccurrences){
                    y.remove(y.lastIndexOf(checkint));
                    count--;
                }
            count = 0;
        }
        return y.stream().mapToInt(i -> i).toArray();
    }
}
