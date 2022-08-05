console.log(digPow(46288, 3))

/*
https://www.codewars.com/kata/5552101f47fc5178b1000050
Given a positive integer n and a positive integer p:
Find a positive integer k, if it exists, such that the sum of digits of N take to the successive powers of p is equal to k*n

i.e.: "Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k"

Examples:
89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */

function digPow(n, p){
    let digits = n.toString().split("")
    let sum = 0;

    for(let i = 0; i < digits.length; i++){
        sum += Math.pow(digits[i],(p+i))
    }

    return sum / n % 1 === 0 ? sum / n : -1;

}