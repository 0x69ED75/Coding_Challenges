//https://www.codewars.com/kata/56606694ec01347ce800001b
/*
given a,b and c as integers representing the sides of a shape, return true if a triangle can be built from these sides
 */
public class triangle {
    public static void main(String[] args) {
        System.out.println(isTriangle(1,2,3));

    }
    public static boolean isTriangle(int a, int b, int c){
        System.out.println(a + " " + b + " " + c);
        return (a+b) >= c && (b+c) >= a && (a+c) >= b;
    }
}
