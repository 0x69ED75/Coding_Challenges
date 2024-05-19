//https://leetcode.com/problems/baseball-game/description/
/*
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
 */
function calPoints(operations: string[]): number {
    let score = 0
    let history = []
    let index = 0

    while(operations.length >0){
        let op = operations.shift()
        let curr = 0
        switch(op){
            case '+':
                curr = parseInt(history[index-1]) + parseInt(history[index-2])
                score += curr
                history.push(curr)
                break
            case 'D':
                curr = parseInt(history[index-1]) * 2
                score += curr
                history.push(curr)
                break
            case 'C':
                score -= parseInt(history[index-1])
                history.pop()
                index-=2
                break
            default:
                curr = parseInt(op)
                score += curr
                history.push(curr)
                break
        }
        index++
    }
    return score
};
console.log(calPoints(["36","28","70","65","C","+","33","-46","84","C"]))