console.log(findEvenIndex([20,10,-80,10,10,15,35]));

/*
https://www.codewars.com/kata/5679aa472b8f57fb8c000047
Given an array of integers, find index N where the sum of the integers to the left of N is equal to that of the sum of Integers to the right of N
Return -1 if no such index is found.
 */

function findEvenIndex(arr)
{
    for(let i = 0 ; i < arr.length; i++){
        if(arr.slice(i+1).reduce((sum, a) => sum + a, 0) === arr.slice(0,i).reduce((sum, a) => sum + a, 0)) return i;
    }
    return -1;
}