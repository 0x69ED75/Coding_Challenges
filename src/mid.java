//https://www.codewars.com/kata/56747fd5cb988479af000028
public class mid {
    public static void main(String[] args) {
        System.out.println(getMiddle("Test"));

    }
    public static String getMiddle(String word) {
        return word.length() % 2 == 0 ? word.charAt((word.length() / 2)-1)  + "" +  word.charAt(word.length() / 2) :  Character.toString(word.charAt(word.length() / 2));
    }
}
