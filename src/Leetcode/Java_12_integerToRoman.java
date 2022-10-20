package Leetcode;

import java.util.ArrayList;
/*
https://leetcode.com/problems/integer-to-roman/description/
Given an integer num (1 <= num <= 3999), convert it to a roman numeral.
 */

public class Java_12_integerToRoman {
    public static void main(String[] args) {
        System.out.println(intToRoman2(1994));
    }
    // O(N) approach
    public static String intToRoman2(int num) {
        String roman = "";
        int[] intVals = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
        String[] romanNums = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

        for(int i = 0; i < intVals.length && num > 0; i++){
            while(intVals[i] < num){
                num -= intVals[i];
                roman += romanNums[i];
            }
        }
        return roman;
    }

    // Naive approach
    public static String intToRoman(int num) {
        String roman = "";
        String stringNum = String.valueOf(num);
        for(int i = 1; i <= stringNum.length(); i++){
            String x = String.valueOf(stringNum.charAt(i-1));
            for(int j = 0; j < stringNum.length()- i; j++){
                x += "0";
                }
            ArrayList<Integer> brokenDown = new ArrayList<>(breakDown(Integer.parseInt(x)));
            for(int k = 0; k < brokenDown.size(); k++){
                roman += getRoman(brokenDown.get(k));
            }
        }

     return roman;
    }
    public static String getRoman(int num){
        System.out.println(num);
        switch(num){
            case 1:
                return "I";
            case 4:
                return "IV";
            case 5:
                return "V";
            case 9:
                return "IX";
            case 10:
                return "X";
            case 40:
                return "XL";
            case 50:
                return "L";
            case 90:
                return "XC";
            case 100:
                return "C";
            case 400:
                return "CD";
            case 500:
                return "D";
            case 900:
                return "CM";
            case 1000:
                return "M";
        }
        return " ";
    }
    public static ArrayList<Integer> breakDown(int num){
        ArrayList<Integer> x = new ArrayList<>();

        while(num != 0){
            if(num >= 1000){
                x.add(1000);
                num -= 1000;
            }
            else if(num >= 500){
                if(num == 900){
                    x.add(900);
                    num -= 900;
                    continue;
                }
                x.add(500);
                num -= 500;
            }
            else if(num >= 100){
                if(num == 400){
                    x.add(400);
                    num -= 400;
                    continue;
                }
                x.add(100);
                num -= 100;
            }
            else if(num >= 50){
                if(num == 90){
                    x.add(90);
                    num -= 90;
                    continue;
                }
                x.add(50);
                num -= 50;
            }
            else if(num >= 10){
                if(num == 40){
                    x.add(40);
                    num -= 40;
                    continue;
                }
                x.add(10);
                num -= 10;
            }
            else if(num >= 5){
                if(num == 9){
                    x.add(9);
                    num -= 9;
                    continue;
                }
                x.add(5);
                num -= 5;
            }
            else if(num >= 1){
                if(num == 4){
                    x.add(4);
                    num -= 4;
                    continue;
                }
                x.add(1);
                num -= 1;
            }
        }
        return x;
    }
}
