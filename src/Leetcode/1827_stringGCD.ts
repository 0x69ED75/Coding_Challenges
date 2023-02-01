/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2
 */
function gcdOfStrings(str1: string, str2: string): string {
    if((str1+str2) !== (str2+str1)){return ""}
    if(str1===str2){return str2}
    if(str1.length > str2.length){return gcdOfStrings(str1.slice(str2.length),str2)}
    else{return gcdOfStrings(str2.slice(str1.length),str1)}
}

console.log(gcdOfStrings("ABCABC","ABC"))

