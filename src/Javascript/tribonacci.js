console.log(tribonacci([1, 1, 1],1))

/*
https://www.codewars.com/kata/556deca17c58da83c00002db
Returns the Tribonacci sequence up to the nth element, where the first 3 elements are given as a signature.

Tribonnaci([1, 1, 1],8) = [1, 1 ,1, 3, 5, 9, 17, 31]
 */

function tribonacci(signature,n){
    const arr = [];

    for(let i = 0 ; i < n; i++){
        if(i < signature.length){
            arr.push(signature[i])
        }
        else {
            arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1])
        }
    }
    return arr
}