package CodeWars_Java;

import java.util.Arrays;
// https://www.codewars.com/kata/54da539698b8a2ad76000228/
/*
Given a cartesian grid with four directions "North, South, West, East" and an array with directions, where each direction takes 10 minutes to traverse:
    - Return true if the directions lead you at the CodeWars_Java.same place where you started. AND:
    - Return true if the directions are exactly 10 minutes in length.
 */
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




