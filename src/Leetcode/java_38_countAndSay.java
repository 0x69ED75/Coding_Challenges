package Leetcode;

/*
https://leetcode.com/problems/count-and-say/description/
Complete a count-and-say sequence, following the format:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

public class java_38_countAndSay {
    public static String countAndSay(int n) {
        String x = "1";
        boolean flag = false;

        for(int i = 1; i < n; i++){
            char current = x.charAt(0);
            int count = 0;
            String temp = "";

            for(int j = 0; j < x.length(); j++){
                if(x.charAt(j) == current){
                    count++;
                    flag = true;
                }
                else{
                    temp += count +""+current;
                    current = x.charAt(j);
                    flag = false;
                    count =1;
                }
            }
            temp += count +""+current;
            x = temp;
        }

        return x;
    }

    public static void main(String[] args) {
        System.out.println(countAndSay(6));
    }
}
