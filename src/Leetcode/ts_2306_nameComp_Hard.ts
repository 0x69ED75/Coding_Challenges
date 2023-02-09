/*
https://leetcode.com/problems/naming-a-company/description/
You are given an array of strings ideas that represents a list of names to be used in the process of naming a company.
 The process of naming a company is as follows:

Choose 2 distinct names from ideas, call them ideaA and ideaB.
Swap the first letters of ideaA and ideaB with each other.
If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
Otherwise, it is not a valid name.
Return the number of distinct valid names for the company.
 */
function distinctNames(ideas: string[]): number {
    let map:Map<string, string[]> = new Map<string, string[]>()
    let count:number = 0;

    for(let i = 0; i < ideas.length;i++){ // splitting strings into groups by their first character
        let char:string = ideas[i].charAt(0)
        let x:string[] = map.get(char)||[]
        map.set(char,[...x,ideas[i].slice(1)])
    }
    let keys:string[] = Array.from(map.keys())
    // finding combinations between each group
    for(let i = 0 ; i < keys.length;i++){
        for(let j = i+1 ; j < keys.length;j++){
            // sets will remove any duplicate values
            let A: Set<string> = new Set(map.get(keys[i]))
            let B: Set<string> = new Set(map.get(keys[j]))
            let C: Set<string> = new Set() // intersection of sets A and B
            A.forEach(q => C.add(q))
            B.forEach(q => C.add(q))
            count += ( (A.size - C.size)  * (B.size - C.size))
        }
    }

    return count*2 // Multiply result by 2 since each combination can be swapped
}

console.log(distinctNames(["coffee","donuts","time","toffee"]))