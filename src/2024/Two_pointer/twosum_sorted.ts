function twoSum(numbers: number[], target: number): number[] {
    let left = 0;

    while(left < numbers.length){
        let looking = target - numbers[left]
        let right = left + 1
        while(right < numbers.length){
            if(numbers[right] === looking){
                return [left+1,right+1]
            }
            if(numbers[right] > looking){
                break
            }
            right++
        }
        left++
    }
};

function twoSum_1(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length-1

    while(true){
        let l = numbers[left]
        let r = numbers[right]
        let sum = l+r
        console.log(l,r,sum)

        if(sum > target){
            right--
        }
        else if (sum < target){
            left++
        }
        else if(sum === target){
            return [left+1,right+1]
        }
    }

};

console.log(twoSum_1([2,7,11,15]
    ,9))