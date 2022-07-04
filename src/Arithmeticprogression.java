//https://www.codewars.com/kata/52de553ebb55d1fca3000371
/*
Given an array in order, following arithmetic progression, find the missing value.
{ 1, 2, 4} -> 3
 */
public class Arithmeticprogression {
    public static void main(String[] args) {

        System.out.println(findMissing(new int[]{ 1, 2, 4}));
    }
    public static int findMissing(int[] numbers) {
        int x = (numbers[numbers.length-1]-numbers[0]) / numbers.length;
        for(int i = 0; i < numbers.length-1; i++){
            if(numbers[i+1] != numbers[i] + x){
                return numbers[i] + x;
            }
        }
        return numbers[0];
    }
}
