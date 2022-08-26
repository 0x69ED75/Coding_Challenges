console.log(solution(50))

/*
https://www.codewars.com/kata/514b92a657cdc65150000006
Return the sum of all multiples of 3 or 5 up to "number"
 */

function solution(number){
    let sum = 0;
    for(let i = 0 ; i < number; i++){
        if(i % 3 === 0 || i% 5 === 0){
            sum += i;
        }
    }
    return sum;
}