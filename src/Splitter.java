//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
/*
Return true if the first String argument ends in the second String argument
 */
public class Splitter {
    public static void main(String[] args) {
        System.out.println(solution("abcde"));
    }
    public static String[] solution(String s) {
        String[] split = s.split("(?<=\\G.{2})");
        if(split[split.length - 1].length() == 1){
            split[split.length-1] = split[split.length-1] + "_";
        }
        return split;
    }
}
