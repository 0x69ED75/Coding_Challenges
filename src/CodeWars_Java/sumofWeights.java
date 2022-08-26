package CodeWars_Java;// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/java
/*
order a list when each value is given a weight.
The weight for each value is equivalent to the CodeWars_Java.sum of its digits.
 */

import java.util.*;

public class sumofWeights {
    public static void main(String[] args) {
        System.out.println(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
    }
    public static String orderWeight(String strng) {
        String[] split = strng.split(" ");
        HashMap<Integer,String> compar = new HashMap<Integer,String>();
        for (int i = 0; i < split.length; i++){
            int number = 0;
            String[] indiv = split[i].split("");
            for (int j = 0; j < indiv.length; j++){
                number += Integer.parseInt(indiv[j]);
            }
            compar.put(number,split[i]);
        }
        List sortedKeys=new ArrayList(compar.keySet());
        Collections.sort(sortedKeys);
        for (int i : compar.keySet()) {
            System.out.println("key: " + i + " value: " + compar.get(i));
        }
        System.out.println(Arrays.toString(split));
        List sorted = new ArrayList(compar.keySet());
        Collections.sort(sorted);
        return sorted.toString();
    }
    }
