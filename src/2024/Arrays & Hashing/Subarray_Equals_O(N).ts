function subarraySum(nums: number[], k: number): number {
    let hashMap = new Map()
    hashMap.set(0,1)
    let sum = 0
    let res = 0

    for(let i = 0; i < nums.length;i++){
        sum += nums[i]
        let numOfSubArrays = hashMap.get(sum - k) ?? 0

        if(numOfSubArrays > 0){
            res += numOfSubArrays
        }

        hashMap.set(sum,(hashMap.get(sum)||0) +1)
    }
    return res
};

console.log(subarraySum([1,2,3],3))