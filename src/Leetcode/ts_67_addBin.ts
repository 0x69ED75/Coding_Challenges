/*
https://leetcode.com/problems/add-binary/description/
Given two binary strings a and b, return their sum as a binary string.
 */
function addBinary(a: string, b: string): string {
    return toBinary((BigInt(`0b${a}`)+BigInt(`0b${b}`)))
    }

function toBinary(sum:bigint): string{
    let curr:bigint[] = []
    while(sum >= 1){
        curr.push((sum % BigInt(2)))
        sum = sum /= BigInt(2)
    }
    let str:string = ""
    while(curr.length > 0){
        str += curr.pop()
    }
    return str.length === 0 ? "0" : str
}



console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
                     ,"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"))

/*
Solution fails because test gives numbers of a massive size which not even bigint supports, but would work otherwise

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
 */