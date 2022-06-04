import javax.sound.midi.SysexMessage;
import java.util.stream.Stream;
//https://www.codewars.com/kata/52774a314c2333f0a7000688
public class Parens {

    public static void main(String[] args) {
        System.out.println(validParentheses("(())"));

    }

    public static boolean validParentheses(String parens)
    {
        int flag = 0;
        for (int i = 0; i < parens.length() ; i++){
            if (parens.charAt(i) == '('){
                flag++;
            }
            else if (parens.charAt(i) == ')' && flag == 0){
                return false;
            }
            else if (parens.charAt(i) == ')' && flag > 0){
                flag--;
            }
            }
        return flag == 0 ? true : false;
    }
}
