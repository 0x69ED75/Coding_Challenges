//https://www.codewars.com/kata/529bf0e9bdf7657179000008

/*
Sudoku solution validator
This application verifies a given Sudoku board, represented as a 9x9 2D array, to ensure that each:
    - column contains the numbers 1-9
    - row contains the numbers 1-9
    - 3x3 square contains the numbers 1-9
Furthermore, I have written another method `printArray` which prints the Sudoku, this was used to debug the application, and was not submitted in the solution.

My solution is not perfect, as it makes use of 3 separate for-loops which could potentially be condensed, furthermore, the 3x3 square check is not as readable as I had hoped to make it.
 */


import java.util.ArrayList;
import java.util.Arrays;

public class Sodoku {
    public static void main(String[] args) {
        int[][] test1 = {
                {1, 2, 3, 4, 5, 6, 7, 8, 9},
                {2, 3, 4, 5, 6, 7, 8, 9, 1},
                {3, 4, 5, 6, 7, 8, 9, 1, 2},
                {4, 5, 6, 7, 8, 9, 1, 2, 3},
                {5, 6, 7, 8, 9, 1, 2, 3, 4},
                {6, 7, 8, 9, 1, 2, 3, 4, 5},
                {7, 8, 9, 1, 2, 3, 4, 5, 6},
                {8, 9, 1, 2, 3, 4, 5, 6, 7},
                {9, 1, 2, 3, 4, 5, 6, 7, 8}
        };
        int[][] test2 = {
                {5, 3, 4, 6, 7, 8, 9, 1, 2},
                {6, 7, 2, 1, 9, 5, 3, 4, 8},
                {1, 9, 8, 3, 4, 2, 5, 6, 7},
                {8, 5, 9, 7, 6, 1, 4, 2, 3},
                {4, 2, 6, 8, 5, 3, 7, 9, 1},
                {7, 1, 3, 9, 2, 4, 8, 5, 6},
                {9, 6, 1, 5, 3, 7, 2, 8, 4},
                {2, 8, 7, 4, 1, 9, 6, 3, 5},
                {3, 4, 5, 2, 8, 6, 1, 7, 9}
        };
        System.out.println(check(test1));

    }
    public static boolean check(int[][] board) {

        for (int columns = 0; columns < board.length; columns++){ // iterates row by row ; left to right before moving to the next row.
            ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8 ,9)); // I store the numbers 1 through 9 in an arraylist, to compare the values to.
            for (int rows = 0; rows < board.length; rows++){
                if(numbers.contains(board[columns][rows])){
                    numbers.set(numbers.indexOf(board[columns][rows]),0); // Setting the number found in the arraylist to 0, so that it can't be found twice in the same search.
                }
                else{
                    return false;
                }
            }
        }

        for (int rows = 0; rows < board.length; rows++){ // iterates columns vertically, top to bottom before moving on to the next column
            ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8 ,9));
            for (int columns = 0; columns < board.length; columns++){
                if(numbers.contains(board[rows][columns])){
                    numbers.set(numbers.indexOf(board[rows][columns]),0);
                }
                else{
                    return false;
                }

            }
        }

        // next, I must iterate the board in 3x3 squares.
        ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8 ,9));
        int count =0; // this is the index of the first column to check on each loop, at first this is 0, but will then be 3, then 6 to ensure that I am only checking 3x3 squares.
        int countit=0; // A counter stores the number of checks has been carried out. This is so that every 9 checks, the Arraylist can be reset, as a 3x3 square would have been successfully iterated.
        for(int i = 0; i < 3; i++) {
            for (int rows = 0; rows < board.length; rows++) {
                for (int columns = count; columns < count +3; columns++) {
                    if(countit == 9){
                        numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
                        countit = 0;
                    }
                    if(numbers.contains(board[rows][columns])){
                        numbers.set(numbers.indexOf(board[rows][columns]),0);
                    }
                    else{
                        return false;
                    }
                    board[rows][columns] = 0;
                    countit++;
                }
            }
            count+=3;
        }
        return true;
    }
    public static void printArray(int[][] board) { // just prints board for debug, not used in final
        for (int[] x : board) {
            for (int y : x) {
                System.out.print("" +y + ", ");
            }
            System.out.println();
        }
        System.out.println(" ");
    }
}
