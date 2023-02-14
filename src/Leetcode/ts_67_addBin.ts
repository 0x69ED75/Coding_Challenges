/*
https://leetcode.com/problems/add-binary/description/
Given two binary strings a and b, return their sum as a binary string.
 */
function addBinary(a: string, b: string): string {
    return toBinary(toInteger(a) + toInteger(b))
};

function toInteger(bin:string): number{
    let curr = 1;
    let sum = 0
    for(let i = bin.length-1;i >= 0; i--){
        if(bin.charAt(i) === "1"){
            sum += curr
        }
        curr *=2
    }
    return sum
}

function toBinary(sum:number): string{
    let curr:number[] = []
    while(sum >= 1){
        curr.push((sum % 2))
        sum = Math.floor(sum /=2)
    }
    let str:string = ""
    while(curr.length > 0){
        str += curr.pop()
    }
    return str.length === 0 ? "0" : str
}

console.log(addBinary("1010"
                     ,"1011"))

