/*
https://leetcode.com/problems/sqrtx
Using no in-built exponent functions, find the square root of a number
Return only the integer part of the number, truncate any decimal digits.
 */

/*
To find the square root of a number x, this algorithm starts by storing x in a variable Current
Then multiplies current by itself and storing this in variable y.

Then while y is more than x, we can reduce our search for the square root by halving the search size each time:
   store the value of current in the variable prev
   Let current = (current / 2) (rounded down)
   Let y = current * current

Once y is no longer more than or equal to x, we know that the square root of x is somewhere between the values of prev and current
Therefore, the algorithm multiplies prev by itself, if the result is more than x, we can reduce prev by 1.
Once the result of (prev*prev) is less than or equal to x, this must be the truncated square root.*/

var mySqrt = function(x) {
    if(x === 0){return x}

    let current = x
    let y = current * current;
    let prev = Infinity

    while(y >= x){
        prev = current;
        current = Math.floor(current / 2)
        y = current * current
    }


    for(let i = prev; i >= current; i--){
        if(i*i <= x){return i}
    }

};


console.log(mySqrt(1))