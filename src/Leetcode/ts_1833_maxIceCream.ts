/*
https://leetcode.com/problems/maximum-ice-cream-bars/description/
there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins.
 The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible.

Return the maximum number of ice cream bars the boy can buy with coins coins.
 */
function maxIceCream(costs: number[], coins: number): number {
    costs.sort((a,b) => a-b)
    let count:number = 0
    console.log(costs)

    for(let i = 0; i < costs.length;i++){
        if(coins < costs[i]){break}
        count++
        coins -= costs[i]
        console.log("coins "+ coins)
    }
    return count
}

console.log(maxIceCream([10,6,8,7,7,8],5))