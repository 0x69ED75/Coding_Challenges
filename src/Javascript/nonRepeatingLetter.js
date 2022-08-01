console.log(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§\n'));

/*
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
Write a method which returns the first letter that isn't repeated anywhere in the given string.
stress => "t"
sTreSS => "T"
return "" for any given string with no repeating letters.
 */

function firstNonRepeatingLetter(s) {
    const arr = s.toLowerCase().split("")
    const y = arr.findIndex(q => arr.indexOf(q) === arr.lastIndexOf(q))
    return y > -1 ? s[y]  : "";
}
