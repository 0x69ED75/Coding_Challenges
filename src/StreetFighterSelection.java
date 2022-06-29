// https://www.codewars.com/kata/5853213063adbd1b9b0000be
import java.util.ArrayList;
import java.util.Arrays;
/*
Given a two-dimensional array of characters from Street Fighter, and an array of directions
Return the character that would be selected when these directions are input.
 */


public class StreetFighterSelection {
    public static void main(String[] args) {
        String[][] fighters = new String[][]{
                new String[] { "Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega" },
                new String[] { "Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison" },
        };
        String[] moves = new String[] {"down", "down", "right", "left", "up", "down", "right", "left", "left", "down", "up", "left", "right", "up", "left", "down", "up", "right", "left", "down", "up"};

        System.out.println(Arrays.toString(streetFighterSelection(fighters, new int[]{0, 0}, moves)));

    }
    public static String[] streetFighterSelection(String[][] fighters, int[] position, String[] moves){
        ArrayList<String> selectedFighters = new ArrayList<String>();
        System.out.println(Arrays.toString(moves));

        int cursor = position[0]; // This represents the current position of the user's cursor as an integer where any value 0 through 5 is the first row, 6 to 11 being the second row.

        for(int i = 0; i < moves.length; i++){
            switch(moves[i]){
                case "right":
                    if(cursor == fighters[0].length-1){
                        cursor = 0;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                        break;
                    }
                    cursor++;
                    selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    break;

                case "left":
                    if(cursor == 6){
                        cursor = 11;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    else if(cursor > 0){
                        cursor--;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    else{
                        cursor = 5;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    break;

                case "up":
                    if(cursor >= fighters[0].length){
                        cursor = cursor % 6;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                        break;
                    }
                    else{
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    break;

                case "down":
                    if(cursor < 6) {
                        cursor += fighters[0].length;
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    else{
                        selectedFighters.add(fighters[cursortoCharacter(cursor)[0]][cursortoCharacter(cursor)[1]]);
                    }
                    break;
            }
        }
        System.out.println(Arrays.toString(selectedFighters.toArray(new String[0])));
        return selectedFighters.toArray(new String[0]);
    }
    public static int[] cursortoCharacter(int cursor){ // This method converts the user's cursor value back into a position on the character selection board.
        ArrayList<Integer> ColumnRow = new ArrayList<Integer>();

        if (cursor >= 12){
            ColumnRow.add(1);
            ColumnRow.add(cursor % 6);
        }

        else if(cursor >= 6){
            ColumnRow.add(1);
            ColumnRow.add(cursor-6);
        }
        else{
            ColumnRow.add(0);
            ColumnRow.add(cursor);
        }

        return ColumnRow.stream().mapToInt(i -> i).toArray();
    }
}
