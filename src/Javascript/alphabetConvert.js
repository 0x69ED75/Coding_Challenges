console.log(alphabetPosition2("The sunset sets at twelve o' clock."));

/*
https://www.codewars.com/kata/546f922b54af40e1e90001da
Given a string, replace every character in the string with its position in the alphabet
i.e. a = 1, b=2
Uppercase characters should be treated the same as their lowercase equivalents.
Any character not in the alphabet should be ignored.

I have done 2 solutions, one is short but less readable, and the other is more readable but less "clever"
 */

function alphabetPosition(text) {
    const alphabet = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const textArr = text.toUpperCase().split("");
    let returnString = "";
    for(let i = 0; i < textArr.length; i++) {
        if (alphabet.indexOf(textArr[i].toUpperCase()) !== -1) {
            returnString += alphabet.indexOf(textArr[i].toUpperCase()) +" "
        }
    }
    return returnString.trim()
}

function alphabetPosition2(text) {
    let returnal = "";
    text.toUpperCase().split("").forEach(q => (q.charCodeAt(0) >= 65 && q.charCodeAt(0) <= 90) ? q = q.charCodeAt(0) -64 +" " : q=0 )
    return returnal.trim();
}