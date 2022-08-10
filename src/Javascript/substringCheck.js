a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2))

/*
https://www.codewars.com/kata/550554fd08b86f84fe000a58
Given two arrays, array1 and array2, return a sorted array containing the values in array1 which are substrings of strings in array2
 */


function inArray(array1,array2){
    let substrings = [];

    for(let i = 0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array2[j].indexOf(array1[i]) > -1){
                substrings.push(array1[i])
                break
            }
        }
    }
    return substrings.sort();
}