/*
https://leetcode.com/problems/delete-columns-to-make-sorted/
given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.
delete the columns that are not sorted lexicographically
 */
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