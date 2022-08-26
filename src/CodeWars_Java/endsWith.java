package CodeWars_Java;

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
/*
 returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 */
public class endsWith {
    public static void main(String[] args) {
        System.out.println(solution("Samurai","ai"));
    }


    public static boolean solution(String str, String ending) {
        String x = "";
        if (ending.length() > str.length()) return false;
        for (int i = ending.length(); i > 0; i--){
            x += str.charAt(str.length()-i);
        }
       return x.equals(ending) ? true : false;
    }
}
