//https://www.codewars.com/kata/52fba66badcd10859f00097e
public class XO {
    public static void main(String[] args) {
        System.out.println(getXO("ooxXm"));

    }

    public static boolean getXO (String str) {
        return str.toLowerCase().chars().filter(q -> q == 'x').count() == str.toLowerCase().chars().filter(q -> q == 'o').count();
    }
}
