import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ArrayDiff {
    public static void main(String[] args) {
        System.out.println(arrayDiff(new int [] {1,2}, new int[] {1}));
    }
    private static int[] arrayDiff(int[] a, int[] b) {
        List<Integer> arr1 = Arrays.stream(a).boxed().collect(Collectors.toList());
        List<Integer> arr2 = Arrays.stream(b).boxed().collect(Collectors.toList());
        arr1.removeAll(arr2);
        int[] numArray = arr1.stream().mapToInt(i->i).toArray();
        return numArray;
    }
}
