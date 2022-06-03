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
