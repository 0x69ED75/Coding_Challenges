import java.util.stream.Stream;
//https://www.codewars.com/kata/54edbc7200b811e956000556
/*
Given an array of sheep, represented by true in a boolean array, count the number of sheep in the array.
 */
public class sheepCount {
    public static void main(String[] args) {
        Boolean[] array1 = {true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  null, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true };
        System.out.println(countSheeps(array1));
    }
    public static int countSheeps(Boolean[] arrayOfSheeps) {
        return (int) Stream.of(arrayOfSheeps)
                .filter(p -> p != null)
                .filter(p -> p)
                .count();
    }
}
