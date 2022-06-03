//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
public class persistence {
    public static void main(String[] args) {
        System.out.println(999);
    }
    public static int persistence(int n) {
        int persist = 999;
        int x = 0;
            char[] digits = String.valueOf(n).toCharArray();
            for (int i = 1; i < digits.length; i++){
                x = digits[i] * digits[i-1];
            n = x;
        }
        return n;
    }
}
