console.log(longest("aretheyhere", "yestheyarehere"))


/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
Given two strings, return a new sorted string, with the longest length possible using characters only found in the 2 strings given by parameter
 */

function longest(s1, s2) {
    let combinedarr = (s1+s2).split("").filter((v, i, a) => a.indexOf(v) === i);
    return combinedarr.sort().join("")
}