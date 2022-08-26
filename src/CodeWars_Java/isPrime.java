package CodeWars_Java;

/*
Returns whether a number is prime
 */
public class isPrime {

    public static void main(String[] args) {
        System.out.println(isPrime(637015997));

    }
    public static boolean isPrime(int number) {
        if(number < 2)
            return false;
        for (int i=2; i<=Math.sqrt(number); i++){
            if(number % i == 0)
                return false;
        }
        return true;
    }


}
