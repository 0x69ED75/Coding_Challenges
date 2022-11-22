var findMaxAverage = function(nums, k) {
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        if(i >= k){
            sum -= nums[i-k]
        }
        if((i >= k-1) && sum / k > max){max = sum/k}
    }
    return max
};

console.log(findMaxAverage([5],1))