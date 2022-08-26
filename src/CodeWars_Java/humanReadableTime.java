package CodeWars_Java;

import java.text.DecimalFormat;
/* This solution isn't great but it works, and I learnt a lot from it.
   Given an integer, which is a number of seconds, format this in the format:
   - Years, days, hours, minutes, seconds.
   Do not include any values which are 0 in the output.
         - 3662 = "1 hour, 1 minute and 2 seconds
 */
//https://www.codewars.com/kata/52742f58faf5485cae000b9a
public class humanReadableTime {

    public static void main(String[] args) {
        System.out.println(formatDuration(7545637));
    }

    public static String formatDuration(int seconds) {
        DecimalFormat df = new DecimalFormat("##.##");
        String time = "";

        // calculating initial value.
        int years = ((seconds / 3600) / 24 ) / 365;
        int days = ((seconds / 3600) / 24);
        int hours =  seconds / 3600;
        // faced various issues with getting the minute value precise, the value is rounded to the nearest 2dp and then the floor is found and is finally parsed as int
        int minutes = (int)Math.floor(Double.parseDouble(df.format((seconds / 3600.0 - seconds / 3600) % 60)));
        int secs = seconds % 60;

        if (seconds == 0){return "now";}

        /*must consider the effect each value will have on the initial values.
         e.g. if we have 7560 seconds:
         We don't want to display " 2.1 hours, 126 minutes" but instead want to display "2 hours, 6 minutes"
         The below calculations remove the excess number of minutes from the above problem by finding the remainder when divided appropriately e.g:
         126 minutes -> 6 minutes
         */
        if (years != 0){
            days %= 365;
        }
        if (days != 0){
            hours %= 24;
        }
        if (hours != 0){
            minutes %= 60;
        }

        // handling the various types of grammar required in the final output
        if (years != 0){
            if (years == 1){
                time += years + " year, ";
            }
            else{
                time += years + " years, ";
            }
        }
        if (days != 0){
            if(days == 1){
                time += days + " day, ";
            }
            else{
                time += days + " days, ";
            }
        }
        if (hours != 0){
            if (hours == 1){
                time += hours + " hour, ";
            }
            else{
                time += hours + " hours, ";
            }
            if (secs == 0 && minutes != 0 || secs != 0 && minutes == 0){
                time = time.substring(0,time.length()-2); // removing the comma added to the end of the sentence, so that "and" could be placed there instead
                time += " and ";
            }
            if (secs == 0 && minutes == 0){
                time = time.substring(0,time.length()-2);
            }

        }
        if (minutes != 0){
            if (minutes == 1){
                time += minutes + " minute";
            }
            else{
                time += minutes + " minutes";
            }
            if (secs != 0){
                time += " and ";
            }

        }
        if (secs != 0){
            if (secs == 1){
                time += secs + " second";
            }
            else{
                time += secs + " seconds";
            }
        }

        return time;
    }

    }
