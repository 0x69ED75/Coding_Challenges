package CodeWars_Java;

import java.util.ArrayList;

//www.codewars.com/kata/52bb6539a4cf1b12d90005b7
/*
This kata requires validating a game of battleship which follows the Russian rule set of the board game
The ships are represented by the Integer 1 in a multi-dimensional array otherwise filled with 0.
The code is responsible for ensuring that there is the right amount of each ship on the board, which is:
    - 4 submarines (a ship of size 1)
    - 3 destroyers (a ship of size 2)
    - 2 cruisers ( a ship of size 3)
    - 1 battleship ( a ship of size 4)

The code is also responsible for ensuring that no two ships are touching either by edge or by corner.

Furthermore, the code prints said board, however, this is excluded from submission as is not necessary to solve the problem, and was mostly used for debugging.
 */
public class BattleshipValidator {
    public static void main(String[] args) {
        int[][] battleField =
                {{0, 0, 0, 1, 0, 1, 0, 0, 0, 0},
                        {0, 0, 0, 1, 0, 1, 0, 0, 0, 0},
                        {0, 0, 0, 1, 0, 1, 0, 1, 0, 1},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 1},
                        {0, 1, 0, 1, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 1, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 1, 1},
                        {0, 0, 0, 0, 0, 1, 0, 0, 0, 0},
                        {0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 1, 1, 1, 1, 0}};
        int[][] testCase2 =
                {{0, 0, 0, 0, 0, 1, 0, 0, 0, 0,},
                        {0, 0, 0, 0, 0, 1, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
                        {0, 0, 0, 1, 0, 1, 1, 1, 0, 0},
                        {0, 0, 0, 1, 0, 0, 0, 0, 1, 0},
                        {0, 0, 1, 1, 1, 1, 0, 0, 0, 0},
                        {0, 1, 1, 0, 0, 1, 0, 0, 0, 0},
                        {0, 1, 0, 0, 1, 1, 1, 0, 0, 0}};

        int[][] overlapTest =
                {{1, 0, 0, 0, 0, 1, 1, 0, 0, 0,},
                        {1, 0, 1, 0, 0, 0, 0, 0, 1, 0},
                        {1, 0, 1, 0, 1, 1, 1, 0, 1, 0},
                        {1, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 1, 0},
                        {0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
                        {0, 0, 0, 1, 0, 0, 0, 0, 1, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0}};

        int[][] outOfBoundsTest =
                {{0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 1, 0, 0, 0, 0, 0, 1, 1, 0},
                        {0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 1, 1, 1, 0, 1, 0, 0},
                        {1, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 1, 0, 0, 1, 1},
                        {1, 1, 1, 1, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 1, 0},
                        {0, 0, 0, 0, 1, 1, 0, 0, 0, 0}};

        int[][] expectedFalseTest =
                {{0, 0, 0, 0, 0, 1, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 0, 0, 0, 0, 1, 1, 0, 0},
                        {1, 0, 0, 0, 0, 0, 0, 0, 0, 1},
                        {0, 0, 1, 1, 1, 0, 0, 0, 0, 0},
                        {1, 0, 0, 0, 0, 1, 1, 1, 1, 0},
                        {1, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {1, 0, 0, 0, 0, 0, 0, 0, 0, 0},
                        {0, 0, 1, 0, 0, 1, 0, 0, 1, 1},
                        {0, 0, 0, 0, 0, 1, 0, 0, 0, 0}};



                System.out.println(fieldValidator(battleField));
    }

    public static boolean fieldValidator(int[][] board) {

        int battleship = 0;
        int cruisers = 0;
        int destroyers = 0;
        int submarines = 0;
        int count = 0;
        printArray(board);

        // checking if two ships are touching by iterating through the board until a 1 is found and checking its neighbours.
        for (int row = 0; row < board.length; row++) {
            for (int column = 0; column < board.length; column++) {
                if (board[row][column] == 1) {
                    if (row + 1 < board[row].length && column + 1 < board.length) {
                        if (board[row + 1][column] == 1) {
                            if (board[row][column + 1] == 1) {
                                return false;
                            }
                        }

                    }
                    // this checks if anything is touching the corners of any ships.
                    if (row - 1 > 0 && column - 1 > 0) {
                        if (row + 1 < board[row].length && column + 1 < board.length) {
                            if (board[row + 1][column - 1] == 1 ||board[row + 1][column + 1] == 1 ) {
                                return false;
                            }
                        }
                    }
                }
            }
        }


        //Checking for correct number of ships horizontally.
        // In this check, submarines will not be counted, this will be handled in the vertical check.
        for (int row = 0; row < board.length; row++) {
            for (int column = 0; column < board.length; column++) {
                if (board[row][column] == 1) {
                    count++;
                }
                if (count > 1) { // here, i replace any of the found ships (which are not submarines) and replacing them with 0, so the vertical check can operate properly later.
                    for (int i = count; i >= 0; i--) {
                        if (column - i >= 0) {
                            board[row][column - i] = 0;
                        }
                    }
                }
                if(column == 9 || board[row][column+1] == 0 ) { // Once a 0 is found following a 1, I count up how many ones there were.
                    //This Can't just be an else statement, otherwise the values at [9,x] will never be read.
                    if(count == 2){
                        destroyers++;
                    }
                    if(count == 3){
                        cruisers++;
                    }
                    if(count == 4){
                        battleship++;
                    }
                    count = 0;

                }
            }
        }
        // Now i repeat the CodeWars_Java.same, but check the board vertically, I could reduce the running time of this application by putting them both under the CodeWars_Java.same for loop, but would be more trouble than its worth.
        count = 0;
        for (int column = 0; column < board.length; column++) {
            for (int row = 0; row < board.length; row++) {
                if (board[row][column] == 1) {
                    count++;
                }
                 if(board[row][column] == 0 || row == 9) { // Can't just be an else statement, otherwise the values at [x,9] will never be read.
                    if(count == 1){ // this time, submarines are counted too.
                        submarines++;
                    }
                    if(count == 2){
                        destroyers++;
                    }
                    if(count == 3){
                        cruisers++;
                    }
                    if(count == 4){
                        battleship++;
                    }
                    count = 0;
                }
            }
        }
        return battleship == 1 && cruisers == 2 && destroyers == 3 && submarines == 4;
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
