//https://www.codewars.com/kata/5544c7a5cb454edb3c000047
public class Ball {
    public static void main(String[] args) {
        System.out.println(bouncingBall(30, 0.66, 1.5));
    }
    public static int bouncingBall(double h, double bounce, double window) {
        if(h <= 0 || bounce <=0 || bounce >=1 || window >= h){return -1;}
        int returnal = 0 ;
        while(h > window){
            System.out.println(h);
            h *= bounce;
            returnal++;
        }
        return returnal *2 -1; // must double it, since you see the ball twice on each bounce, furthermore, must subtract one since you only see it once on the last bounce
    }
}
