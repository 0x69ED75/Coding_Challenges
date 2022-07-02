//https://www.codewars.com/kata/55c04b4cc56a697bb0000048
public class Scramble {
    public static void main(String[] args) {
        System.out.println(scramble("scriptjavx " , "javascript"));

    }
    // This solution has pretty bad time complexity and took ~7s to pass all tests.
    public static boolean scramble(String str1, String str2) {
        for(int i = 0; i < str2.length(); i++){
            if(str1.indexOf(str2.charAt(i)) == -1){ // str.charAt returns -1 if the character is not in checked String.
                return false;
            }
            str1 = str1.replaceFirst(String.valueOf(str2.charAt(i))," "); // replacing char in str1 that has been checked, otherwise, it could be used again to confirm the char exists in both strings.
        }
        return true;
    }
}
