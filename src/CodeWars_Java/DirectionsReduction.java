package CodeWars_Java;//https://www.codewars.com/kata/550f22f4d758534c1100025a

/*
Given an array of directions, remove any directions which may be redundant.
e.g..:
     - if the direction lists to go North and then South, this can be removed as redundancy, as any directional movement was undone.

This solution is imperfect, and the time complexity can be reduced.
 */
import java.util.ArrayList;
import java.util.Arrays;

public class DirectionsReduction {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(dirReduc(new String[]{"NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"})));

    }
    public static String[] dirReduc(String[] arr) {
        ArrayList<String> x = new ArrayList<>(Arrays.asList(arr));

        for(int j = x.size(); j > 0; j--){ // We will require multiple iterations of arraylist as removing values may reveal more redundant values.
            for (int i = 0; i < x.size(); i++) {
                if (i + 1 != x.size()) {
                    if (x.get(i).equals((opposite(x.get(i + 1))))) {
                        x.remove(i);
                        x.remove(i);
                    }
                }

            }
        }

        return x.toArray(new String[0]);
    }
    public static String  opposite(String x){ // method simply returns the opposite value.
        switch(x){
            case ("NORTH"):
                return "SOUTH";
            case ("EAST"):
                return "WEST";
            case ("SOUTH"):
                return "NORTH";
            case ("WEST"):
                return "EAST";
        }
        return "";
    }


    }
