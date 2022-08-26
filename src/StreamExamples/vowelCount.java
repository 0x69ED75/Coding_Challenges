package StreamExamples;
//https://www.codewars.com/kata/54ff3102c1bad923760001f3

/*
Given a string, count the vowels.
 */
public class vowelCount {
    public static void main(String[] args) {
        System.out.println(getCount("abracadabra"));
    }
    public static long getCount(String str) {
        return  str.chars()
                .mapToObj(c -> (char) c)
                .filter(y -> y == 'a' || y == 'i' || y == 'e' || y == 'o' || y == 'u')
                .count();
    }

}
