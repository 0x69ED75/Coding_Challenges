function solution(str, ending){
    return str.slice(-ending.length) === ending || ending === "" // passing a negative number into slice starts the slice at the end of the string
}

console.log(solution('samurai', 'ai'))