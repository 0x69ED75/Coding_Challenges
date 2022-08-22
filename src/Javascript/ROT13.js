console.log(rot13("TeST"))

/*
https://www.codewars.com/kata/530e15517bc88ac656000716
Given a string, cipher it with a ROT13 cipher
The ROT13 cipher simply moves each character forwards 13 places in the alphabet, looping back to the start when passing Z
 */

function rot13(message){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const messageArr = message.split("");
    let returnArr = [];


    for(let i = 0; i < messageArr.length; i++){
        let chosenAlphabet = []
        if(alphabet.indexOf(messageArr[i]) !== -1) {chosenAlphabet = alphabet}

        else if(alphabetUpper.indexOf(messageArr[i]) !== -1){chosenAlphabet = alphabetUpper}

        else{returnArr.push(messageArr[i]) }

        let index = chosenAlphabet.indexOf(messageArr[i])
        for(let i = 1; i < 14; i++){
            if(index === 25) index = 0;
            else{index++}
        }
        returnArr.push(chosenAlphabet[index])
    }

    return returnArr.join("")
}


/* a different, clever solution */

// function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM" // alphabet, 13 places right.
//     return message.split("").map(q => b[a.indexOf(q)]).join("") // map finds the index of each letter in the normal alphabet, then looks at the same index in the ciphered alphabet.
// }

