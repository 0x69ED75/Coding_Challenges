public class camelCaseBreak {
    public static void main(String[] args) {
        System.out.println(camelCase("camelCasingTest"));

    }
    public static String camelCase(String input) {
        String x = input; // To avoid directly manipulating the input string, to not cause problems iterating.
        int offset = 0; // every time a space is added to the string, an offset is increased as the string length has increased.
        for (int i = 0; i < input.length(); i++){
            if (Character.isUpperCase(input.charAt(i))){
                System.out.println("ran");
                x = x.substring(0,i+offset) + " " + x.substring(i+offset);
                offset++;
            }
        }
        return x;
    }
}

/*
One line solution by another user utilising regex.
$1 refers to the previous capture group, in this case, [A-Z], therefore " $1" is returning the previous character but with a space appended.

  public static String camelCase(String input) {
    return input.replaceAll("([A-Z])", " $1");
  }
}
 */