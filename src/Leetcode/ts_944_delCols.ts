function minDeletionSize(strs: string[]): number {
    let count:number = 0

    for(let i = 0; i < strs[0].length;i++){
        let chars:string[] = []
        for(let j = 0; j < strs.length;j++){
            chars.push(strs[j][i])
        }
        for(let k = 0; k < chars.length-1; k++){
            if(chars[k] > chars[k+1]){
                count++
                break
            }
        }
    }
    return count
};

console.log(minDeletionSize(["rrjk","furt","guzm"]))