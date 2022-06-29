import java.util.Arrays;
//https://www.codewars.com/kata/52c4dd683bfd3b434c000292
/*
Given an Integer, which represents a car mileage meter:
    - Return 1 if the number is clarified as "interesting"
    - Return 2 if the number is up to 2 lower than the given integer.
The description of what clarifies a number as "interesting" is clarified in the Kata description
 */
public class mileageCatcher {
    public static void main(String[] args) {
        System.out.println(isInteresting(9999999, new int[]{1337, 256}));
    }

    public static int isInteresting(int number, int[] awesomePhrases) {
        Integer[] PhrasesInteger = Arrays.stream(awesomePhrases).boxed().toArray(Integer[]::new); // converting int array to an Integer array to make things a bit easier.
        String nums = "1234567890";
        String rnums = "9876543210";
        Boolean flag = false;

        if(String.valueOf(number+2).length() < 3){return 0;} // checking if the digits are less than 3. I check the number+2 because I must also consider if the value occurs in the next 2 miles.

        if((String.valueOf(number).matches("(.)\\1*") && (String.valueOf(number).length() > 3))){ // checks for monotonous numbers with length > 3 as this would fail a later check
            return 2;
        }

        for(int i = 0; i < 3; i++){ // A way I decided to check the values at (number-1) and (number-2) without rewriting a bunch of if statements.
            if(String.valueOf(number).matches("^[1-9][0-9]{0}[0]*$")){ // this should handle numbers ending in 0 but my regex skills need improving.
                return !flag ? 2 : 1;
            }

            else if(String.valueOf(number +1).matches("^[1-9][0-9]{0}[0]*$") || String.valueOf(number +2).matches("^[1-9][0-9]{0}[0]*$")){
                System.out.println(number);
                return 1;  // despite my best efforts I must still check manually for the upcoming values for numbers ending in zeroes, as the test data tests '98' which is a reverse sequential list, and my code returns it as such...
                // in a more important application a better solution to this would have to be found...
            }

            if(String.valueOf(number).chars().distinct().equals(String.valueOf(number).chars())){
                return !flag ? 2 : 1;
            }

            if(nums.contains(String.valueOf(number))){ // smart way to check if it is ordered sequentially, if it is, it should be a substring of values 1 through 9 (and ending in 0)
                return !flag ? 2 : 1;
            }

            if(rnums.contains(String.valueOf(number))){ // smart way to check if it is ordered in reverse, if it is, it should be a substring of values 9 through 0
                return !flag ? 2 : 1;
            }

            if(String.valueOf(number).equals(new StringBuilder(String.valueOf(number)).reverse().toString())){ // checking if the string value of number is equal to its reverse.
                return !flag ? 2 : 1;
            }

            if(Arrays.asList(PhrasesInteger).contains(number)){
                return !flag ? 2 : 1;
            }
            number ++;
            flag = true;
        }
        return 0;
    }

}
