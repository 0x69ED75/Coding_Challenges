/*
https://leetcode.com/problems/can-place-flowers/description/
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count:number = 0
    let flag:boolean = false;
    for(let i = 0; i < flowerbed.length;i++){
        if(count === n){break}
        if(flowerbed[i] === 1 && !flag){flag=true}
        else if(flowerbed[i] === 0 && flag){flag = false}
        else if(flowerbed[i] === 0 && !flag) {
            if (flowerbed[i + 1] !== 1) {
                flag = true;
                count++
            }
        }
    }
    return count === n
}

console.log(canPlaceFlowers([1,0,0,0,0,1],2))