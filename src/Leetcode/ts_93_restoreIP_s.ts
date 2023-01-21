/*
https://leetcode.com/problems/restore-ip-addresses/description/
A valid IP address consists of exactly four integers separated by single dots.
 Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

 Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s.
  You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 */
function restoreIpAddresses(s: string): string[] {
    let result:string[] = []
    if(s.length>12) return result; // cannot be >12 chars

    //O(1) space and time
    //https://leetcode.com/problems/restore-ip-addresses/solutions/30972/who-can-beat-this-code/?orderBy=most_votes
    for(let a = 1; a <= 3; a++){
        for(let b = 1; b <= 3; b++){
            for(let c = 1; c <= 3; c++){
                for(let d = 1; d <= 3; d++){
                    if(a+b+c+d===s.length){
                        let w:number = Number.parseInt((s.substring(0,a)))
                        let x:number = Number.parseInt((s.substring(a,a+b)))
                        let y:number = Number.parseInt((s.substring(a+b, a+b+c)))
                        let z:number = Number.parseInt((s.substring(a+b+c, a+b+c+d)))
                        if(w <= 255 && x<=255 && y<=255 && z <= 255){
                            let ans:string = (w.toString()+"."+x.toString()+"."+y.toString()+"."+z.toString())
                            if(ans.length === s.length+3){
                                result.push(ans)
                            }
                        }
                    }
                }
            }
        }
    }
    return result
}

console.log(restoreIpAddresses("25525511135"))