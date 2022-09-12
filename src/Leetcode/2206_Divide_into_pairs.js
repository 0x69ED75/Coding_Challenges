/*
https://leetcode.com/problems/divide-array-into-equal-pairs/
Given an integer array consisting of 2*n integers.
Divide nums into n pairs such that:
     - each element belongs to exactly one pair
     - The elements present in a pair are equal
Return true if nums can be divided into n pairs, otherwise return false.
 */

var divideArray = function(nums) { // map solution 100 ms
    let numsMap = new Map()

    // putting each value into a map.
    nums.forEach(value => numsMap.set(value,numsMap.get(value)+1||1))

    for(let key of numsMap.keys()){
        if(numsMap.get(key) % 2 !== 0){return false}
    }

    return true;
};

console.log(divideArray([3,2,3,2,2,2]))

/*
var divideArray = function(nums) { // 110ms solution reliant on Javascript array methods

    while(nums.length !== 0){
        let val = nums.shift()
        console.log(val)
        console.log(nums.indexOf(val))
        if(nums.indexOf(val) === -1){return false}
        else{nums.splice(nums.indexOf(val),1)}
    }
    return true;
};
 */