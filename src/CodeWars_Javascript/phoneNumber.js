console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83
Given an array of 10 integers, turn it into a phone number in american format
 */
function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}