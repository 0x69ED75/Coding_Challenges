//https://www.codewars.com/kata/541c8630095125aba6000c00
/*
return the digital root of an integer.
Digital root is the recursive sum of all the digits in a number.
E.g: 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 */
public class digitalRoot {
    public static void main(String[] args) {
        System.out.println(digital_root(456));

    }

    public static long digital_root(int n) {
        int returnal = 0;
        String[] x = String.valueOf(n).split("");
        for(String z : x){
            returnal += Integer.parseInt(z);
        }
        if(String.valueOf(returnal).length() > 1){
            return digital_root(returnal);
        }
        return returnal;
    }
}
