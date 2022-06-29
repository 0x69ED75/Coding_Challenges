//https://www.codewars.com/kata/5390bac347d09b7da40006f6
/*
capitalises the first character of each word in a string.
 */
public class capitalise {
    public static void main(String[] args) {
        System.out.println(toJadenCase("test one two three"));
    }
    public static String toJadenCase(String phrase) {
        if(phrase == null || phrase.length() == 0){ return null;}
        String returnal = "";
        String[] split = phrase.split(" ");
        for (int i= 0; i < split.length; i++){
            returnal += split[i].substring(0,1).toUpperCase() + split[i].substring(1) +" ";
        }
        return returnal.trim();
    }

    }
