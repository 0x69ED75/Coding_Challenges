package Leetcode;
/*
https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/
given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.
Return the minimum number of moves required to make s valid.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".


 */
public class Java_minAddValidParens {
    public static int minAddToMakeValid(String s) {
        int count = 0;
        int open = 0;
        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '('){
               open++;
            }
            if(s.charAt(i) == ')'){
                if(open == 0){
                    count++;
                }
                else{
                    open--;
                }
            }
        }
        return count + open;
    }

    public static void main(String[] args) {
        System.out.println(minAddToMakeValid("()))(("));
    }
}
