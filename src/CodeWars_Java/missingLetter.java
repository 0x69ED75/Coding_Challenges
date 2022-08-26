package CodeWars_Java;//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
/*
Given an array of consecutive characters, return the character that is missing:
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
The result is case-sensitive
 */
import java.util.ArrayList;
import java.util.Arrays;

public class missingLetter {
    public static void main(String[] args) {
        System.out.println(findMissingLetter((new char[] { 'm', 'o', 'p' })));
    }
    public static char findMissingLetter(char[] array) {
        ArrayList<Character> x = new ArrayList<>(Arrays.asList('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'));

        for(int i = 0; i < x.size();x.remove(i)){ // loop removes any value in alphabetical list up to the first value of the array passed by parameter.
            if(x.get(i) == Character.toLowerCase(array[0])){
                break;
            }
       }
        for(int i = 0; i < x.size(); i++){ // loop finds the first value in our new alphabet array which is not in the parameter-passed array.
            if(Character.toLowerCase(array[i]) != x.get(i)){ // turning the characters in the parameter-passed array to lowercase allows me to compare this array against only a lower-case sequence of alphabetical characters
                if(array[i] != Character.toLowerCase(array[i])){  // As a side effect of this, an extra if statement is needed to check if the value was parsed into its lowercase equivalent.
                    return Character.toUpperCase(x.get(i));
                }
                return x.get(i);
            }
        }
        return 0;
    }
}


/*
Alternative clever solution completed by another user:

This short solution iterates through the list as I do, but also creates a variable `expectableLetter`, equal to the first character in the array.
expectableLetter is incremented by one on each iteration, which increments the letter in the alphabet by 1 (i.e. a to b, b to c), this works due to the fact characters are represented by numerical equivalents.
Therefore, you can easily compare whether the values are sequential by comparing letter and expectableLetter.

  public static char findMissingLetter(char[] array){
    char expectableLetter = array[0];
    for(char letter : array){
      if(letter != expectableLetter) break;
      expectableLetter++;
    }
    return expectableLetter;
  }
}

 */