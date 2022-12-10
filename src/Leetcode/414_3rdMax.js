/*
https://leetcode.com/problems/third-maximum-number/description/
Given an integer array nums, return the third distinct maximum number in this array.
If the third maximum does not exist, return the maximum number.
 */

//O(n) solution
var thirdMax = function(nums) {
    let [max1,max2,max3] = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]
    for(const i of nums){
        console.log(`${i}  ${max1},${max2},${max3}`)
        if(i > max1){max3=max2;max2=max1; max1 = i}
        else if(i > max2 && i !== max1){max3=max2; max2 = i}
        else if(i > max3 && i !== max1 && i !== max2){max3 = i}
    }
    console.log(max3)
    return max3 !== Number.MIN_SAFE_INTEGER ? max3 : max1
};


/*
Slow solution
var thirdMax = function(nums) {
    let x = nums.filter((q,i) => nums.indexOf(q) === i).sort((a,b) => b-a)
    return x.length >= 3 ? x[2] : x[0]
};
 */

console.log(thirdMax([1,-2147483648,2]))