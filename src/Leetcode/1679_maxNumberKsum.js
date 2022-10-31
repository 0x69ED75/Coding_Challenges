/*
https://leetcode.com/problems/max-number-of-k-sum-pairs/description/
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
 */

/*a trivial solution would be for each i in nums:
assign y = k - nums[i]
find y in the rest of nums

However, although this works,  this solution would have a very high time complexity
 */
/*
Therefore, my first approach sets all numbers in the array in a map in format key:value where:
  - the key is nums[i]
  - the value is the number of times nums[i] appears in the list.

After this map is set, we can again iterate over i elements, setting var y to be k - nums[i]
if y and nums[i] exist in the map, we can remove both y and nums[i] from the map and increment count.
An extra check is required if y = nums[i], as if this is the case the value at map.get(y) must be >= 2
 */

var maxOperations_twoPass = function(nums, k) {
    let count = 0;
    let occMap = new Map

    for(let i = 0; i < nums.length;i++){
        if(nums[i] < k){
            occMap.set(nums[i],occMap.get(nums[i])+1||1)
        }
    }


    for(let i = 0; i < nums.length; i++){
        let y = k - nums[i]
        if(occMap.get(y) >= 1 && occMap.get(nums[i]) >=1){
            if(y === nums[i]){
                let x = occMap.get(y)
                if(x-2 < 0){continue}
            }
            occMap.set(y,occMap.get(y)-1)
            occMap.set(nums[i],occMap.get(nums[i])-1)
            count++;
        }
    }

    return count
};

// fastest solution I could think of: Speed: beats 96%, Memory: beats 98% and does so in one-pass of the array.
/*
For each element in list:
- Create var y which is equal to k-nums[i]
- if map contains nums[i], increment count and reduce its presence in list by 1.
- if map doesn't contain nums[i], add y to map. We are now looking for y.

This means that for each number in nums, if it is the other part to a sum we're looking for, increment count,
otherwise, add it as a part of a sum we're looking for.

example: [1,2,3,4] k = 5.

- nums[i] = 1, y = 4. Map does not contain 1, add 4 to map. map = {4:1}
- nums[i] = 2, y = 3. Map does not contain 2, add 3 to map. map = {4:1,3:1}
- nums[i] = 3, y = 2. Map does contain 3, we have found a pair (3,2) remove 3 from map. map = {4:1} count = 1
- nums[i] = 4, y = 1. Map does contain 4, we have found a pair (4,1) remove 1 from map. map = {} count = 2

 */


var maxOperations = function(nums,k){
    let map = new Map
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= k){continue}
        let y = k - nums[i]

        if(map.get(nums[i]) >= 1){
            map.set(nums[i],map.get(nums[i])-1)
            count++
        }
        else{
            map.set(y,map.get(y)+1||1)
        }
        console.log(map)

    }
    return count;
}


console.log(maxOperations([1,2,3,4]
    ,5))