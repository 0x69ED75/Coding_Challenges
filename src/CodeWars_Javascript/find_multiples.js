console.log(findMultiples(5,25));

/*
https://www.codewars.com/kata/58ca658cc0d6401f2700045f/
Print out multiples of a given integer, up to limit
 */
function findMultiples(integer, limit) {
    let y = integer;
    let x = [];

    while(integer <= limit){
        x.push(integer);
        integer += y;
    }
    return x;
}

/* One line solution would be:
  return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
 */

