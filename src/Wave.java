import java.util.ArrayList;
import java.util.Arrays;
//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
public class Wave {
    public static void main(String[] args) {
        wave("One Two");

    }
    public static String[] wave(String str) {
        ArrayList<String> waveArray = new ArrayList<String>();
        String splitArray[] = str.split("");
        String word = "";

        for (int k = 0; k < str.length(); k++) {
            word = "";
            if (str.charAt(k) == ' '){
                continue;
            }
            for (int i = 0; i < str.length(); i++) {
                if (i == k){
                    word += Character.toUpperCase(str.charAt(k));
                }
                else{
                    word += splitArray[i];
                }
            }
            waveArray.add(word);
        }
        System.out.println(waveArray);
        String[] array = waveArray.toArray(new String[waveArray.size()]);
        return array;
    }
}
