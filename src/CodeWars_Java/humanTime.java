package CodeWars_Java;

//https://www.codewars.com/kata/52685f7382004e774f0001f7/java
/*
Convert a integer input, which is the number of seconds, into hours, minutes and seconds.
 */
public class humanTime {
    public static void main(String[] args) {
        System.out.println(makeReadable(239520));
    }
    public static String makeReadable(int seconds) {
        String time = "";
        time += String.format("%02d",  seconds / 3600) + ":";
        time += String.format("%02d", + (int)Math.floor(((seconds / 3600.0 - seconds / 3600) * 60)) ) + ":";
        time += String.format("%02d",seconds % 60);
        return time;
    }
}
