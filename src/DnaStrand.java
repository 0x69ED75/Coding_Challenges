

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