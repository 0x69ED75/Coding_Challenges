package Leetcode;

public class Java_1672_richestCustomer {

    public static int maximumWealth(int[][] accounts) {
        int max = 0;
        for(int i = 0; i < accounts.length; i++){
            int sum = 0;
            for(int j = 0 ; j < accounts[i].length; j++){
                System.out.println(accounts[i][j]);
                sum += accounts[i][j];
            }
            if(sum > max){max = sum;};
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(maximumWealth(new int[][]{{1,5},{7,3},{3,5}}));
    }


}
