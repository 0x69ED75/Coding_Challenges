package CodeWars_Java;

import java.util.ArrayList;
import java.util.Arrays;
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/
/*
Given an array, return the SnailSort of this array.
// Snail Sort: https://medium.com/@spencerwhitehead7/snail-sort-the-gimmick-sort-goat-310510814eab
 */
public class snailSort {
    public static void main(String[] args) {
        // test cases

        int[][] arr
                = {{1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}};
        int[][] arr2 =
                {{1, 2, 3, 9},
                {4, 5, 6, 4},
                {7, 8, 9, 1},
                {1, 2, 3, 4},
        };
        int[][] arr3 =
                         {{1, 2, 3, 4, 5 ,6},
                        {7, 8, 9, 10, 11 ,12},
                        {13, 14, 15, 16, 17, 18},
                        {19, 20, 21, 22, 23 ,24},
                                 {25, 26, 27, 28, 29 ,30},
                                 {31, 32, 33, 34, 35 ,36},

                };

        int[][] arr4 = {
                {1, 2, 3, 4, 5, 6},
                {7, 8, 9, 10, 11, 12},
                {13, 14, 15, 16, 17, 18},
                {19, 20, 21, 22, 23, 24},
                {25, 26, 27, 28, 29, 30},
                {31, 32, 33, 34, 35, 36},
                {51, 52, 53, 54, 55, 56},

        };

        int[][] arr5 = {
                {491, 787, 679, 422, 451, 746, 617, 398, 158},
                {408, 74, 815, 209, 521, 999, 186, 229, 771},
                {502, 802, 942, 647, 390, 306, 299, 965, 897},
                {958, 781, 690, 585, 101, 668, 368, 381, 362},
                {798, 719, 764, 773, 60, 920, 625, 643, 324},
                {31, 294, 910, 277, 653, 18, 220, 537, 509},
                {823, 54, 49, 319, 136, 215, 864, 933, 588},
                {532, 499, 130, 188, 942, 510, 607, 641, 917},
                {153, 732, 770, 86, 647, 211, 52, 217, 580},
        };
        snail(arr5);

    }

    // my solution is far from perfect, and I underestimated the challenge, so it took me far longer than anticipated.
    public static int[] snail(int[][] board) {
        ArrayList<Integer> returnal = new ArrayList<>();
        int column = 0;
        int row = 0;
        boolean flag = false;

        if (board.length == 1) { // handling arrays of size 1, this should just return the first value in the array.
            return board[0];
        }

        for (int i = 0; i < board.length - 1; i++) {

            while (board[row][column] != 0 ) { // This while loop iterates the board to the right, as long as the value to the right != 0 and isn't the final value in that row.
                returnal.add(board[row][column]);
                printArray(board);
                board[row][column] = 0; // I set any visited numbers to 0, to mark them as "visited" and later iterations know to not sort this value.
                if (column != board[row].length - 1) { // iterating the column once to the right, unless we are at the last value in this row.
                    column++;
                }
            }
            row++; // after iterating the first row, the row is incremented as the current row and column is set to 0.

            if (flag){ // The flag indicates that the current iteration is not the first iteration.
                column --; // an extra operation must be carried out if we are not on the first iteration as the while loop goes one value too far on any iteration > 1
            }

            while (board[row][column] != 0) { // Iterates down the board until the edge is reached, or, an already sorted value is found
                returnal.add(board[row][column]);
                printArray(board);
                board[row][column] = 0;
                if (row != board.length - 1) {
                    row++;
                }
            }

            if (flag){
                row--;
            }
            column--;

            while (board[row][column] != 0) { // Iterates left up until an already sorted value is found
                returnal.add(board[row][column]);
                printArray(board);
                board[row][column] = 0;
                if (column != 0) {
                    column--;
                }
            }
            if (flag){
                column++;
            }
            row--;

            while (board[row][column] != 0)  { // Iterates back up until an already sorted value is found, or, the value is the edge of the board
                returnal.add(board[row][column]);
                printArray(board);
                board[row][column] = 0;
                if (row != 1) {
                    row--;
                }
            }

            column++;
            if (flag){
                row++;
            }
            flag = true;
        }

        System.out.println(Arrays.toString(returnal.stream().mapToInt(i -> i).toArray()));
        return returnal.stream().mapToInt(i -> i).toArray();
    }
    public static void printArray(int[][] board) { // just prints board for debug, not used in final
        System.out.println("-------------------------------------------------------");
        for (int[] x : board) {
            for (int y : x) {
                System.out.print("[" +y + "] ");
            }
            System.out.println();
        }
        System.out.println(" ");
    }
}
