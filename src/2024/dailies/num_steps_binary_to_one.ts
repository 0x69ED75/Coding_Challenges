//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/?envType=daily-question&envId=2024-05-29
/*
Given the binary representation of an integer as a string s, return the number of steps to reduce it to
 1 under the following rules:

If the current number is even, you have to divide it by 2.

If the current number is odd, you have to add 1 to it.

It is guaranteed that you can always reach one for all test cases.
 */

function numSteps(s: string): number {
    let count = 0
    let split = s.split("")
    while(split.length && split.join("") !== "1"){
        count++
        if(split[split.length-1] === "0"){
            split = split.slice(0,split.length-1)
        }
        else{
            let flag = false
            for(let i = split.length-1; i >= 0 ;i--){
                if(split[i] === '0'){
                    split[i] = "1"
                    flag = true
                    break
                }
                if(split[i] === '1'){
                    split[i] = "0"
                }
            }
            if(!flag){
                split.unshift("1")
            }
        }
        console.log(split.join(""),split)
    }
    return count
};

console.log(numSteps("11000"))