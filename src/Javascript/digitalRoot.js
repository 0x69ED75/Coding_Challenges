console.log(digital_root(456))

/*
https://www.codewars.com/kata/541c8630095125aba6000c00/
given a number, return its digital root.
Digital root is the recursive sum of all the digits in a number.
 */
function digital_root(n) {
    const sum = n.toString().split("").reduce((a,b)=>Number.parseInt(a)+Number.parseInt(b)); // splits number into digits, adds digits.
    return sum.length === 1 ? Number.parseInt(sum) : digital_root(sum); // uses recursion to call the function again if length != 1, otherwise sum is returned.
}