console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

/*
https://www.codewars.com/kata/54da5a58ea159efa38000836
Given an array of integers, find the integer which appears an odd number of times.
 */

function findOdd(A) {
    A.forEach(value => {
        if((countInstancesOf(A,value) % 2) > 0){
            y = value;
        }
    });
    return y;
}

function countInstancesOf(arr,x){
    let count = 0;
    arr.forEach(q => {
        if (q === x) count++
    })
    return count;
}

/*
One line solution from results:
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
 */