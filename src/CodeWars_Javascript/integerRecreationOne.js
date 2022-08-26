console.log(listSquared(250, 500))

/*
https://www.codewars.com/kata/55aa075506463dac6600010d
Find all numbers between integer parameters M and N where the divisors of M when squared and summed, is itself a square.
Return these numbers in a 2d array where each individual array consists of M and its divisors squared then summed.

Example:
246
divisors: 1, 246, 2, 123, 3, 82, 6, 41
squared divisors: 1, 60516, 4, 15129, 9, 6724, 36, 1681
Summed squared divisors: 84100
84100 is 290 * 290, a perfect square
[246,84100] is added to the array.
*/



function listSquared(m, n) {

    let sumEqualsSquare = []

    for(let value = m; value < n; value++) {
        let divisors = [value] // a number is always a divisor of itself. initialise array with value.
        for (let i = Math.floor((value / 2)); i > 0; i--) { // Finding all divisors but only start iterating at value / 2 to save time, the biggest divisor will be value / 2
            if ((value / i) % 1 === 0) { // if value divided by i has no remainder, its a divisor.
                divisors.push(i)
            }
        }


        let squaredDivisors = (divisors.map(divisor => Math.pow(divisor, 2)))
        let summedSquaredDivisors = squaredDivisors.reduce((partialSum, a) => partialSum + a, 0);


        if (Math.sqrt(summedSquaredDivisors) % 1 === 0) { // if the sqrt of squared divisors is itself a square
            sumEqualsSquare.push([value,summedSquaredDivisors])
        }
    }
    return sumEqualsSquare
}


