// https://leetcode.com/problems/top-k-frequent-elements/
// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map()

    for(let i = 0; i < nums.length;i++){
        let curr = map.get(nums[i]) || 0
        map.set(nums[i], curr+1)
    }
    let ordered = Array.from(map.keys()).sort((a,b) => map.get(a) - map.get(b))
    let len = ordered.length
    return ordered.slice(len-k,len)
}

// Bucket Sort Approach
function topKFrequent_2(nums: number[], k: number): number[] {
    let map = new Map()

    for(let i = 0; i < nums.length;i++){
        let curr = map.get(nums[i]) || 0
        map.set(nums[i], curr+1)
    }

    let buckets = []
    let keys = Array.from(map.keys())

    for(let i = 0 ; i < keys.length; i++){
        let curr = buckets[map.get(keys[i])] || []
        buckets[map.get(keys[i])] = [...curr,keys[i]]
    }

    let res = []
    for(let i = buckets.length-1; i > 0; i--){
        if(!buckets[i]) continue
        for(let j = 0; j < buckets[i].length;j++){
            if(k > 0){
                res.push(buckets[i][j])
                k--
            }
            else{
                return res
            }
        }
    }
    return res
}
console.log(topKFrequent_2([-1,-1],1))