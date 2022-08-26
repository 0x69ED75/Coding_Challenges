console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

/*
https://www.codewars.com/kata/52597aa56021e91c93000cb0
Given an array of integers, remove all zeroes from the array and move them to the end of the array
 */

function moveZeros(arr) {
    let count = 0;
    let x =  arr.forEach(q => {
        if(q === 0){
            count++;
        }
    })
    arr = arr.filter(w => w !== 0);
    for(let i = 0; i < count; i++){
        arr.push(0);
    }
    return arr;
}
