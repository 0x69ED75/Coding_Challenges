import java.util.Objects;
// https://www.codewars.com/kata/56b1f01c247c01db92000076
public class charDouble {
    public static void main(String[] args) {
        System.out.println(doubleChar("Two"));
    }
    public static String doubleChar(String s){
        char[] x = s.toCharArray();
        String returnal ="";
       for(int i = 0; i < x.length; i++){
           returnal += x[i];
           returnal += x[i];
       }
       return returnal;
    }
}

/*
a one line solution to this problem would just be to do
"return s.replaceAll(".", "$0$0");"
- '.' matches any char
- '$0' is the entire match, twice.
- Therefore you could do the above to just replace every char with two of itself.
 */
