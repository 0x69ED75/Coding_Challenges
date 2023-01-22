/*
https://leetcode.com/problems/sort-an-array/description/
sort an array in O(nlog(N)) time
 */

// https://en.wikipedia.org/wiki/Pigeonhole_sort
function sortArray(nums: number[]): number[] {
    let max:number = Number.MIN_VALUE
    let min:number = Number.MAX_VALUE


    for(let i = 0; i < nums.length;i++){
        if(nums[i] > max){
            max = nums[i]
        }
        if(nums[i] < min){
            min = nums[i]
        }
    }
    let range:number = (max - min)+1
    let holes:number[] = new Array(range)
    holes.fill(0)

    for(let i = 0; i < nums.length;i++){
        holes[nums[i]-min]++
    }
    let index:number = 0

    console.log(holes)

    for(let i = 0; i < range;i++){
        while(holes[i]-- > 0){ // post decrement, greater than
            nums[index++] = i + min
        }
    }

    return nums
}

console.log(sortArray([5,5,5,5,5,1,1]))