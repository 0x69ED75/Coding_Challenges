console.log(friend(["Ryan", "Kieran", "Mark"]))

/*
https://www.codewars.com/kata/55b42574ff091733d900002f
Given an array of strings, return the same array with any strings with length not equal to 4 removed.
 */

function friend(friends){
    return friends.filter(friend =>  friend.length === 4)
}