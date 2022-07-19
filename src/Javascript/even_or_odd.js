/*
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
Returns even if given integer is even, otherwise, returns odd.
 */


console.log(even_or_odd(4));
console.log(even_or_odd(6));

function even_or_odd(number) {
   return number % 2 === 0 ? "Even" : "Odd";
}

