package CodeWars_Java;

// Reverse any words >= length 5 in a string.
public class Spin {
    public static void main(String[] args) {
        System.out.println(spinWords("Testttt test"));
    }
    public static String spinWords(String sentence) {
        String[] x = sentence.split(" ");
        String returnal = "";
        for (int i = 0; i < x.length; i++){
            if (x[i].length() >= 5){
                returnal += new StringBuilder(x[i]).reverse().toString() + " ";
            }
            else{
                returnal += x[i] + " ";
            }
        }
        return returnal.trim();
    }

    }
