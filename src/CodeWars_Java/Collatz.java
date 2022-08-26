package CodeWars_Java;

public class Collatz {
    /*
    https://www.codewars.com/kata/5286b2e162056fd0cb000c20
    Given an integer "n" return its collatz sequence (https://en.wikipedia.org/wiki/Collatz_conjecture)
    This sequence follows the function:

    f(n)={ n/2, if n is even
          3n+1, if n is odd

     E.g.: 3 becomes: "3->10->5->16->8->4->2->1"
           15 becomes: "15->46->23->70->35->106->53->160->80->40->20->10->5->16->8->4->2->1"
     */
    public static void main(String[] args) {
        System.out.println(collatz(15));

    }
    public static String collatz(int n) {
        String x ="";

        while(n > 1){
            x += n + "->";
            if(n % 2 == 0){
                n /= 2;
            }
            else{
                n= 3*(n)+1;
            }
        }
        x += n;
        return x;
    }
}
