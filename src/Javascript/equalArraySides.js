console.log(findEvenIndex([20,10,-80,10,10,15,35]));

/*
https://www.codewars.com/kata/5679aa472b8f57fb8c000047

 */

function findEvenIndex(arr)
{
    for(let i = 0 ; i < arr.length; i++){
        if(arr.slice(i+1).reduce((sum, a) => sum + a, 0) === arr.slice(0,i).reduce((sum, a) => sum + a, 0)) return i;
    }
    return -1;
}