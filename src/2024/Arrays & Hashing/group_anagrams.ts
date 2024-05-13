//https://leetcode.com/problems/group-anagrams/description/
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

function groupAnagrams(strs: string[]): string[][] {

    let sorted: [string, string][] = strs.map(i => [i.split("").sort().join(""),i])
    let map = new Map()

    for(let i = 0; i < sorted.length;i++){
        let curr = map.get(sorted[i][0]) || []
        map.set(sorted[i][0],[...curr,sorted[i][1]])
    }
    return Array.from(map.values())
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))