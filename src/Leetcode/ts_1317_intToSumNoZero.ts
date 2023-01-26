/*
No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n

The test cases are generated so that there is at least one valid solution.
 If there are many valid solutions, you can return any of them.
 */
function getNoZeroIntegers(n: number): number[] {
    let res:number[] = [(n-1),1]

    while(res[0].toString().includes("0") || res[1].toString().includes("0")){
        res[0] = res[0]-1
        res[1] = res[1]+1
    }
    return res
};


console.log(getNoZeroIntegers(400065))