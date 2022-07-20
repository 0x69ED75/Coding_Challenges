/*https://www.codewars.com/kata/5467e4d82edf8bbf40000155
Given an integer, sort its digits in reverse order and return this integer.
 */
function descendingOrder(n){
    return parseInt(n.toString().split("").sort().reverse().join(""));
}