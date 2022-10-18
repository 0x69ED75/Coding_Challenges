package Leetcode;

/*
https://leetcode.com/problems/calculate-money-in-leetcode-bank/
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before.
 On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
 */

public class Java_1716_moneyInBank {
    public static void main(String[] args) {

    }
    public int totalMoney(int n) {
        int count = 0;
        int increment = 1;
        int total = 0;
        int monday = 1;

        for(int i = 0; i < n; i++){
            count++;
            if(count == 8){
                monday++;
                increment = monday;
                count = 1;
            }
            total += increment;
            increment++;
        }
        return total;
    }
}
