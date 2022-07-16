import java.util.ArrayList;
import java.util.List;
/*
https://www.codewars.com/kata/583203e6eb35d7980400002a
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D


 */
public class smileys {
    public static void main(String[] args) {
        List<String> a = new ArrayList<String>();
        a.add(";D)");
        System.out.println(countSmileys(a));


    }
    public static int countSmileys(List<String> arr) {
        int count = 0;
        System.out.println(arr);

        for(int i = 0; i < arr.size(); i++) {
            char[] x = arr.get(i).toCharArray();
                if (x[0] == ':' || x[0] == ';'){
                    if (x[1] == '-' || x[1] == '~'){
                        if (x[2] == 'D' | x[2] == ')' && x.length == 3){
                            System.out.println("found at index 3: " + i);
                            count++;
                        }
                    }
                    else if (x[1] == 'D' | x[1] == ')' && x.length == 2){
                        System.out.println(x.length);
                        System.out.println("found at index: " + i);
                        count++;
                    }
                    }
        }
        return count;
    }
}
