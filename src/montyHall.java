//https://www.codewars.com/kata/54f9cba3c417224c63000872/java
/*
Return the win percentage of all participants if they decide to change their given door, according to the Monty Hall Problem
https://en.wikipedia.org/wiki/Monty_Hall_problem
 */
import java.util.Arrays;

public class montyHall {
    public static void main(String[] args) {
        System.out.println(montyHallCase(2, new int[]{2, 1, 2, 1, 2, 3, 1, 1, 2, 2, 3}));

    }
    public static double montyHallCase(int correctDoorNumber, int[] participantGuesses) {
        return (int)Math.round((Arrays.stream(participantGuesses).filter(q -> q != correctDoorNumber).count() * 100.0 / Arrays.stream(participantGuesses).count()));
    }
}
