package StreamExamples;
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048
/*
Detects whether a given String is a pangram.
A pangram is a sentence that contains every single letter of the alphabet at least once
Must be able to handle any number of punctuation and integers.
 */
public class detectPangram {
    public static void main(String[] args) {
        System.out.println(check("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
    }
    public static boolean check(String sentence){
        sentence = sentence.replaceAll("\\s+",""); // removing all whitespace
        sentence = sentence.replaceAll("\\d+",""); // removing all numbers
        sentence = sentence.toLowerCase();
        int x = (int)sentence.chars() // turning sentence into a stream of chars
                .mapToObj(c -> (char) c) // mapping to char equivalents
                .filter(q -> q != '.' && q != ',') // filtering out the punctuation
                .distinct() // Removing all repeat values in stream
                .count(); // counting what remains.
        return x == 26; // This value should be 26 (letters in alphabet)
    }
}
