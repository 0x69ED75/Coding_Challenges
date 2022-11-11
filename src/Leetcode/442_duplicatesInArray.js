/*
https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
Given an integer array nums of length n where all the integers of
 nums are in the range [1, n] and each integer appears once or twice,
 return an array of all the integers that appears twice.
 */
var findDuplicates = function(nums) {
    let numMap = new Map();
    let dupeArr = []
    nums.forEach(num => numMap.set(num,numMap.get(num)+1||1))
    Array.from(numMap.keys()).forEach(q => {if(numMap.get(q) > 1){dupeArr.push(q)}})
    return dupeArr
};
// O(N) solution
var findDuplicatesON = function(nums) {
    let arr = []
    let dupe = []
    nums.forEach(num =>{
        if(!arr[num]){
            arr[num] = 1
        }
        else if(arr[num] === 1){
            arr[num] = arr[num]+1
            dupe.push(num)
        }
    })
    return dupe
};


console.log(findDuplicatesON([1,1,1,1,2,2,2,2]))