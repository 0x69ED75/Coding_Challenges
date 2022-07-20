/*
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
given an array composing of both integers and strings, return an array with the strings filtered out.
 */

console.log(filter_list([1,2,"aasf","1","123",123]));

function filter_list(l) {
    return l.filter(q => typeof q === 'number' )
}