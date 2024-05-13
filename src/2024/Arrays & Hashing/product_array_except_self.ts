//https://leetcode.com/problems/product-of-array-except-self/description/
//Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// adapted neetcode logic
function productExceptSelf(nums: number[]): number[] {
    let pre = []
    let post = []
    let res = []

    for(let i = 0;  i < nums.length;i++){
        pre[i] = (pre[i-1] ?? 1) * nums[i]
    }

    for(let i = nums.length-1; i >= 0; i--){
        post[i] = (post[i+1] ?? 1) * nums[i]
    }

    console.log(pre,post)

    for(let i = 0; i < nums.length;i++){
        res[i] = (pre[i-1] ?? 1) * (post[i+1] ?? 1)
    }

    return res
};

console.log(productExceptSelf([-1,1,0,-3,3]))