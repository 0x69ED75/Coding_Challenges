console.log(incrementString("foobar99"))

/*
https://www.codewars.com/kata/54a91a4883a7de5d7800009c
Given a string which ends in a number, increment this number by 1.
Keep any prefixed zeroes.
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
 */

function incrementString (message) {
    if(message.match(/\d/g) === null) {return message + 1} // if message doesn't have a number, just return the string with 1 appended

    let num = message.match(/\d/g).map(number => Number.parseInt(number)) // seperating number from string, putting it into an array of ints.

    let zeroes = 0;
    for(let i = 0; i < num.length; i++){ // counting number of zeroes appended to the number.
        if(num[i] === 0){zeroes++}
        else{break;}
    }

    let reducedNum = Number.parseInt(num.join("")) // joining array of nums into a single number, this removes prefixed zeroes.
    let incrementedNum = reducedNum + 1;
    if(`${incrementedNum}`.length !== `${reducedNum}`.length || reducedNum === 0) {zeroes -=1} // if number has incremented such that the number has increased in size, remove one zero ( 9 -> 10, 99 -> 100)

    while (zeroes > 0){ // adding back the zeroes removed previous
        incrementedNum = `0${incrementedNum}`
        zeroes -=1;
    }

    return message.slice(0,message.search(/[0-9]/)) + incrementedNum;
}

