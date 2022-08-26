package CodeWars_Java;

//https://www.codewars.com/kata/56dec885c54a926dcd001095/solutions/java
/*
turn a negative number into its positive equivalent
 */
public class oppNumber {
    public static void main(String[] args) {
        System.out.println(opposite(-25));
    }

    public static int opposite(int number) {
        return -number;
    }

}