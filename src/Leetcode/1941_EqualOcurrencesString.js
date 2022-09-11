/*
https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences
Given a string, return true if every character in this string appears the same number of times.
 */

var areOccurrencesEqual = function(s) { // 90 ms solution

    let arr = s.split("")
    let countMap = new Map();

    for(let i = 0 ; i < arr.length; i++){
        countMap.set(arr[i],countMap.get(arr[i])+1||1)
    }

    let flag = true;
    let [firstValue] = countMap.values(); // object destructuring to get the first value of .values()
    countMap.forEach(value => {
        if(value !== firstValue){flag = false;}
    })

    return flag
};

console.log(areOccurrencesEqual("abacbc"))

/*
var areOccurrencesEqual = function(s) { // similar solution but converts the map back into array. Potentially slower.
    let arr = s.split("")
    let countMap = new Map();

    for(let i = 0 ; i < arr.length; i++){
        countMap.set(arr[i],countMap.get(arr[i])+1||1)
    }

    let vals = Array.from(countMap.values())

    for(let i = 0 ; i < vals.length-1; i++){
        if(vals[i] !== vals[i+1]){return false}
    }

    return true
};

 */