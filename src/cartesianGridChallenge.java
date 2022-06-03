import java.util.Arrays;

// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/java
public class cartesianGridChallenge {
    public static void main(String[] args) {
        System.out.println(isValid((new char[]{'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w'})));
    }

    public static boolean isValid(char[] walk) {
        int countN = 0;
        int countE = 0;
        int countS = 0;
        int countW = 0;
        if (walk.length != 10) {
            return false;
        }
        for (char c : walk) {
            switch (c) {
                case 'n':
                    countN++;
                    break;
                case 'e':
                    countE++;
                    break;
                case 's':
                    countS++;
                    break;
                case 'w':
                    countW++;
                    break;
            }
        }
        System.out.println(Arrays.toString(walk));
        return countN - countS == 0 && countE - countW == 0;
    }
}




