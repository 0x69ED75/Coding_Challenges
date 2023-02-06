/*https://leetcode.com/problems/shuffle-the-array/description/
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].*/
function shuffle(nums: number[], n: number): number[] {
    let res:number[] = []
    for(let i = 0; i < nums.length/2;i++){res.push(nums[i]);res.push(nums[i+n])}
    return res
};

console.log(shuffle([2,5,1,3,4,7],3))