/*
https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.
 */
function checkZeroOnes(s: string): boolean {
    let zeroMax:number = 0
    let oneMax:number = 0

    let ones:number = 0
    let zeroes:number = 0
    let flag:boolean = false
    for(let i = 0; i < s.length;i++){
        let curr = s.charAt(i)
        if(curr === "0"){
            if(!flag){
                if(ones > oneMax){oneMax = ones}
                ones = 0
                zeroes++
                flag = true
            }
            else{
                zeroes++
            }
        }
        else if(curr === "1"){
            if(flag){
                if(zeroes > zeroMax){zeroMax = zeroes}
                zeroes = 0
                ones++
                flag = false
            }
            else{
                ones++
            }
        }
    }

    if(flag){if(zeroes > zeroMax){zeroMax = zeroes}}
    else{if(ones > oneMax){oneMax = ones}}

    console.log(oneMax)
    console.log(zeroMax)
    return oneMax > zeroMax
};

console.log(checkZeroOnes("1101"))