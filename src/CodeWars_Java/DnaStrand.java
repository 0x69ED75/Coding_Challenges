package CodeWars_Java;

//https://www.codewars.com/kata/554e4a2f232cdd87d9000038
/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G"
When given a String, "dna", turn it into its DNA complement
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
 */
public class DnaStrand {

    public static void main(String[] args) {
        System.out.println(makeComplement("TAACG"));
    }

    public static String makeComplement(String dna) {
       char[] x = dna.toCharArray();
       for (int i = 0; i < x.length; i++){
           switch(x[i]) {
               case 'A':
                   x[i] = 'T';
                   break;
               case 'T':
                   x[i] = 'A';
                   break;
               case 'G':
                   x[i] = 'C';
                   break;
               case 'C':
                   x[i] = 'G';
                   break;
           }
       }
       return String.valueOf(x);
    }
}