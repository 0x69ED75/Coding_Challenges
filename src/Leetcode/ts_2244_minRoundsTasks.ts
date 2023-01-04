/*
https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/
given a 0-indexed integer array tasks, where tasks[i]represents the difficulty level of a task.
In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.
 */
function minimumRounds(tasks: number[]): number {
    if(tasks.length <= 1){return -1}
    let map = new Map<number,number>()
    tasks.forEach(value => map.set(value,map.get(value)+1||1))

    let count:number = 0
    let keys:number[] = Array.from(map.keys())

    for(let i = 0; i < keys.length;i++){
        let x:number = map.get(keys[i])
        if(x === 1){return -1}
        count += Math.ceil(x / 3)
    }
    return count
}


console.log(minimumRounds([7,7,7,7,7,7]))
