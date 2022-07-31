console.log(high("what time are we climbing up the volcano"));

/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
Given a string, return the word with the biggest alphabetical score where a = 1, b = 2, c =3
 */

function high(x){
    let biggestWord = "";
    let currentHighestScore = 0;
    let arr = x.split(" ");

    for(let i = 0; i < arr.length; i++){ // iterating each word in the array
        let split = arr[i].split("") // splitting each word into its characters
        let count = 0;
        for(let j = 0; j < split.length; j++){ // iterating each character in the current word
            count += split[j].toUpperCase().charCodeAt(0)-64; // incrementing count by the words UTF-16 code, -64 to get the words alphabet position
        }
        if(count > currentHighestScore){
            currentHighestScore = count;
            biggestWord = arr[i]
        }
    }
    return biggestWord;

}


