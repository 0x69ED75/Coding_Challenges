import java.util.ArrayList;
import java.util.List;

/*
https://www.codewars.com/kata/5626b561280a42ecc50000d1
Find all numbers between a and b in which the sum of each digit squared by its position in the integer is equal to the number
e.g.
-89 = 8^1 + 9^2
- 135 = 1^1 + 3^2 + 5^3
 */

class SumDigPower {

    public static void main(String[] args) {
        System.out.println(sumDigPow(2632856,2647248));
    }

    public static List<Long> sumDigPow(long a, long b) {
        List<Long> x =new ArrayList<Long>();

        long count = 0;
        for(long i = a; i < b; i++){
            char[] c = String.valueOf(i).toCharArray();
            count = 0;
            for(int j = 1 ; j < c.length+1; j++){
                count += Math.pow(Character.getNumericValue(c[j - 1]),j);
                if(count == i){
                    x.add(count);
                }

            }
        }
        return x;
    }
}