console.log(sortArray([   -19, -18, -11, -50, -28,
    -5,  49,  29,  -3,   7,
    22, -37, -40,  22]))


/*
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
given an array of values, sort the odd values in ascending order, leaving the even numbers at their original positions.

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
    let sortedOdd = array.filter(q => Math.abs(q)% 2 === 1).sort((a, b) => a-b)
    let evens = array.filter(q => q % 2 === 0)
    evens.forEach(q => {
        sortedOdd.splice(array.indexOf(q),0,q)
        array[array.indexOf(q)] =  Number.MAX_VALUE; // indexOf Isn't returning the desired value for values that occur more than once, so I must replace these values when done with them.
    })
    return sortedOdd;
}
