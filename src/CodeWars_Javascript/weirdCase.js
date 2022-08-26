console.log(toWeirdCase('This is a test'))

/*
https://www.codewars.com/kata/52b757663a95b11b3d00062d/
Write a function which returns the given string in the following format:
   - all even indexed characters are uppercase
   - all odd indexed characters are lowercase
 */

function toWeirdCase(string){
    let split = string.split(" ")
    let complete = [];

    for(let i = 0; i < split.length ; i++){
        let x = split[i]
        if(i>=1) complete.push(" ")
        for(let j = 0; j < split[i].length ; j++){
            if (j % 2 === 0){
                complete.push(x[j].toUpperCase())
            }
            else{
                complete.push(x[j])
            }
        }
    }
    return complete.join("")
}

