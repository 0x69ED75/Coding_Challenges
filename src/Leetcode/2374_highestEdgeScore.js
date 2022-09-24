/*
https://leetcode.com/problems/node-with-highest-edge-score/
given a directed graph with n nodes labeled from 0 to n - 1, where each node has exactly one outgoing edge
The graph is represented by a given 0-indexed integer array edges of length n,where edges[i] indicates that there is a directed edge from node i to node edges[i].
Return the node with the highest edge score. If multiple nodes have the same edge score, return the node with the smallest index.
 */
var edgeScore = function(edges) {
    let weightMap = new Map()
    let max = 0
    let maxIndex = 0;

    for(let i = 0 ; i < edges.length;i++){// mapping values to map, where the key is the value at i and the value is i
        weightMap.set(edges[i],(weightMap.get(edges[i])+i)||i)
    }

    let keyArr = Array.from(weightMap.keys())

    keyArr.forEach(key =>{
        if(weightMap.get(key) > max || (weightMap.get(key) === max && key < maxIndex)){ // if value in map is more than max OR is the same as max, but the key has a lower index
            max = weightMap.get(key)
            maxIndex = key
        }
    })

    return maxIndex
};

console.log(edgeScore([2,0,0,2]))