import java.util.Arrays;
//https://www.codewars.com/kata/5270d0d18625160ada0000e4
public class greed {
    public static void main(String[] args) {
        System.out.println(greedy(new int[]{1, 2, 1, 1, 6}));

    }
    public static int greedy(int[] dice){
        System.out.println(Arrays.toString(dice));
        int score = 0;
        int one = 0;
        int two = 0;
        int three = 0;
        int four = 0;
        int five = 0;
        int six = 0;

        for (int x : dice) { // iterating through all dice.
            switch (x) { // switch case to count up occurences
                case 1:
                    one++;
                    break;
                case 2:
                    two++;
                    break;
                case 3:
                    three++;
                    break;
                case 4:
                    four++;
                    break;
                case 5:
                    five++;
                    break;
                case 6:
                    six++;
                    break;
            }
        }
        // logic checks for ruleset:
        if(one >= 3){
            if(one != 6){
                score += 1000;
                one -= 3;
            }
            else{
                score += 2000;
                one = 0;
            }
        }
         if(one != 0){
                score += 100 * one;
        }
        if(five >= 3){
            if(five != 6){
                score += 500;
                five -= 3;
            }
            else{
                score += 2000;
                five = 0;
            }
        }
        if(five != 0){
            score += 50 * five;
        }

        if(six - 3 >= 0){
            if (six - 3 >= 3){
                score+= 1200;
            }
            else{
                score+= 600;
            }
        }
        if(four - 3 >= 0){
            if (four - 3 >= 3){
                score+= 800;
            }
            else{
                score+= 400;
            }
        }
        if(three - 3 >= 0){
            if (three - 3 >= 3){
                score+= 600;
            }
            else{
                score+= 300;
            }
        }
        if(two - 3 >= 0){
            if (two - 3 >= 3){
                score+= 400;
            }
            else{
                score+= 200;
            }
        }

        return score;
    }
}
