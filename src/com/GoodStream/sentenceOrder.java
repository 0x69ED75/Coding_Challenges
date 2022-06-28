package com.GoodStream;
//https://www.codewars.com/kata/55c45be3b2079eccff00010f
import java.util.ArrayList;
import java.util.Collections;

public class sentenceOrder {
    public static void main(String[] args) {
        System.out.println(order("4of Fo1r pe6ople g3ood th5e the2"));

    }
    public static String order(String words) {
        if(words.length() == 0){return "";}

        String[] arr = words.split(" "); // splitting the sentence into an array of words.
        Character[] nums = words.chars().filter(Character::isDigit).mapToObj(q->(char)q).toArray(Character[]::new); // getting all the numbers in the words into a single array.
        ArrayList<String> str = new ArrayList (Collections.nCopies (arr.length, null)); // creating an empty arraylist which is the same size as 'arr', temporarily occupied by nulls.

        for(int i = 0 ; i < arr.length ; i++){
            str.remove(Integer.parseInt(nums[i].toString())-1); // removing the null currently occupying this position in the arraylist.
            str.add(Integer.parseInt(nums[i].toString())-1,arr[i]); // filling the new empty slot in the arraylist with the correct position, using the arraylist add which allows adding by index.
        }
        return String.join(" ", str);
    }
}

/*
alternative clever solution posted by Codewars user:

  public static String order(String words) {
    return Arrays.stream(words.split(" "))
      .sorted(Comparator.comparing(s -> Integer.valueOf(s.replaceAll("\\D", ""))))
      .reduce((a, b) -> a + " " + b).get();
  }

 */
