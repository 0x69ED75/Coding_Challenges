/*
https://leetcode.com/problems/find-the-town-judge/
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
 */
function findJudge(n: number, trust: number[][]): number {
    let trustedBy:number[] = new Array(n).fill(0)
    let trusting:number[] = new Array(n).fill(0)

    for(let i = 0; i < trust.length;i++){
        trusting[trust[i][0]-1] = 1
        trustedBy[trust[i][1]-1] = trustedBy[trust[i][1]-1]+1
    }

    for(let j = 0; j < trusting.length;j++){
        if(trusting[j] === 0){
            if(trustedBy[j] === n-1){
                return j+1
            }
        }
    }
    return -1
};

console.log(findJudge(3,[[1,3],[2,3]]))