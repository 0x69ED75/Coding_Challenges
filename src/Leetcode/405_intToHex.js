/*
https://leetcode.com/problems/convert-a-number-to-hexadecimal
Given an integer, give its hexadecimal equivalent
Given a negative integer, return its two's complement hexadecimal equivalent.
 */
var toHex = function(num) {
    if(num === 0){return 0}
    let arr = []
    if(num < 0){num = Math.pow(2,32) + num} // doing two's complement on num if negative.
    while(num >= 1){
       arr.unshift(Math. floor(num % 16))
       Math.floor(num /= 16);
   }
   for(let i = 0; i < arr.length; i++){
       switch (arr[i]){
           case 10:
               arr[i] = 'a'
               break
           case 11:
               arr[i] = 'b'
               break
           case 12:
               arr[i] = 'c'
               break
           case 13:
               arr[i] = 'd'
               break
           case 14:
               arr[i] = 'e'
               break
           case 15:
               arr[i] = 'f'
               break
       }
   }
   return arr.join("")
};

console.log(toHex(0))