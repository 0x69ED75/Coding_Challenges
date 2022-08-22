console.log(barista([4,3,2]))

/*
https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e

Given an array of queue times, return the total sum of time everyone has to wait, in the most efficient way possible.
Note there is a 2 minute added time between each entry in the array.

coffees = [3,2,5,10,9]  ->  85
coffees = [20,5]        ->  32
coffees = [4,3,2]       ->  22 (2 + 2+2+3 + 7+2+4)
 */

function barista(coffees){
    if(coffees.length=== 0) return 0
    if (coffees.length === 1) return coffees[0]

    coffees.sort((a,b) => a-b);
    let current = coffees[0];
    let sum = coffees[0] + " + "
    coffees.shift()

    coffees.forEach(coffee => {
        current = coffee + 2 + current
        sum += " + " + current
    })

    return eval(sum)
}

