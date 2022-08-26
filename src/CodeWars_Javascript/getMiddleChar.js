/*
https://www.codewars.com/kata/56747fd5cb988479af000028
return the middle char of a string
if the strings' length is even, return the middle 2 characters.
 */

console.log(getMiddle("test"));
function getMiddle(s) {
    return s.length % 2 === 1 ? s.charAt(s.length/2) : s.charAt(s.length/2-1) + s.charAt(s.length/2) ;
}
