/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/
Given a String, return the number of vowels in the string
 */
console.log(getCount("Aaa"));

function getCount(str) {
    return str.split("").filter(q => q.toLowerCase() === 'a' || q === 'e' || q === 'i' || q === 'o'  || q === 'u' ).length;
}

