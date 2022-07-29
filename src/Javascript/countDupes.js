console.log(duplicateCount("Indivisibility"));

/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
Given a string, count how many letters appear more than once
 */

function duplicateCount(text){
    let arr = text.toLowerCase().split("");
    let count = 0
    arr.forEach(q =>{
        if(countInstancesOf(arr,q) >1) {
            count++;
            arr = arr.filter(element => !q.includes(element));
        }
    })
    return count;
}

function countInstancesOf(arr,x){
    let count = 0;
    arr.forEach(q => {
        if (q === x) count++
    })
    return count;
}