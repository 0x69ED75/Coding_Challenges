function reverseVowels(s: string): string {
    let vowels: string[] = ["a","e","i","o","u","A","E","I","O","U"]
    let vowelsInString: string[] = []
    let sArr: string[] = s.split("")

    for(let i = 0; i < sArr.length;i++){
        if(vowels.includes(sArr[i])){
            vowelsInString.push(sArr[i])
        }
    }

    for(let i = 0; i < sArr.length;i++){
        if(vowels.includes(sArr[i])){
            sArr[i] = vowelsInString.pop()
        }
    }

    return sArr.join("")
}

console.log(reverseVowels("aA"))