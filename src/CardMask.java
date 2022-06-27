//https://www.codewars.com/kata/5412509bd436bd33920011bc
public class CardMask {
    public static void main(String[] args) {
        System.out.println(maskify("4556364607935616"));

    }
    public static String maskify(String str) {
        String x=  "";
       for(int i = 0 ; i < str.length(); i++){
           if(i >= str.length()-4){
               x+= str.charAt(i);
           }
           else{
               x+= "#";
           }
       }
       return x;
    }


    }
