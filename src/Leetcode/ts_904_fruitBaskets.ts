/*
https://leetcode.com/problems/fruit-into-baskets/description/
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.

Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.

Once you reach a tree with fruit that cannot fit in your baskets, you must stop.

Given the integer array fruits, return the maximum number of fruits you can pick.
 */

// Could probably be solved in O(n) time
function totalFruit(fruits: number[]): number {
    let max:number = 0
    let count:number = 0
    for(let i = 0; i < fruits.length;i++){
        if(fruits[i] === fruits[i-1]){continue}
        if(count > max){max = count}
        count = 1;
        let baskets:number[] = [fruits[i],-1]
        for(let j = i+1; j < fruits.length;j++){
            if(fruits[i] !== fruits[j] && baskets[1] !== fruits[j]){
                if((baskets[1] !== -1)){break}
                baskets[1] = fruits[j]
            }
            count++;
        }
    }
    if(count > max){max = count}
    return max
}

console.log(totalFruit([0,1,2,2]))