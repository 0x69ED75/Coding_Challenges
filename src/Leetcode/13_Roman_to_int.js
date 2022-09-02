/*
https://leetcode.com/problems/roman-to-integer/submissions/
Given a string of Roman Numerals, convert it to an integer
 */


var romanToInt = function(s) {
    let arr = s.split("")
    let count = 0;

    for(let i = 0; i< arr.length; i++){
        switch (arr[i]){
            case "I":
                if(arr[i+1] === 'V'){
                    count += 4
                    i++;
                }
                else if(arr[i+1] === 'X'){
                    count += 9
                    i++
                }
                else{
                    count+=1
                }
                break;
            case "V":
                count += 5;
                break;
            case "X":
                if(arr[i+1] === 'L'){
                    count += 40
                    i++
                }
                else if(arr[i+1] === 'C'){
                    count += 90
                    i++
                }
                else{
                    count += 10;
                }
                break;
            case "L":
                count += 50;
                break;
            case "C":
                if(arr[i+1] === 'D'){
                    count += 400
                    i++
                }
                else if(arr[i+1] === 'M'){
                    count += 900
                    i++
                }
                else{
                    count += 100;
                }
                break;
            case "D":
                count += 500;
                break;
            case "M":
                count += 1000;
                break;
        }
    }
    return count
};

console.log(romanToInt("III"))
console.log("----------------------------")
console.log(romanToInt("MCMXCIV"))
console.log("----------------------------")
console.log(romanToInt("LVIII"))
console.log("----------------------------")
