//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

public class duplicateEncoder {
    public static void main(String[] args) {
        System.out.println(encode("Prespecialized"));
    }
    static String encode(String word) {
        StringBuilder returnal = new StringBuilder();
        char[] arr = word.toLowerCase().toCharArray();
        for (int i = 0; i < word.length(); i++) {
            int finalI = i;
            if (word.toLowerCase().chars().mapToObj(q -> (char)q).filter(q -> q == arr[finalI]).count() > 1) { // counts the number of times the character currently at index I in the array appears.
                returnal.append(")");
            }
            else {
                returnal.append("(");
            }
        }
        return returnal.toString();
    }
}
