/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like
 (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
     - After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
     - You may not engage in multiple transactions simultaneously
 */
var maxProfit = function(prices) {
    // we can either buy, sell, hold or wait for cooldown
    const buy = 0
    const sell = 1
    const hold = 2
    const cooldown = 3

    // memo is an array consisting of arrays of length 4, each initially null
    const dpMemo = Array(prices.length).fill(0).map(__ => Array(4).fill(null))

    function calculate(i , choice){
        if(i === prices.length){
            return 0
        }
        if(dpMemo[i][choice] !== null){return dpMemo[i][choice]}// if in memo just return it
        switch(choice){
            case buy: // if we buy, after, we must either sell or hold. Find which ever is better
                dpMemo[i][buy] = Math.max(calculate(i+1,sell), calculate(i+1,hold))-prices[i]
                return dpMemo[i][buy]
            case sell: // if we sell we must cool down next.
                dpMemo[i][sell] = calculate(i+1,cooldown) +prices[i]
                return dpMemo[i][sell]
            case hold: // if we hold we can either hold or sell next
                dpMemo[i][hold] =  Math.max(calculate(i+1,sell),calculate(i+1,hold))
                return dpMemo[i][hold]
            case cooldown: // if we cooldown we either rest or buy next
                dpMemo[i][cooldown] = Math.max(calculate(i+1,buy),calculate(i+1,cooldown))
                return dpMemo[i][cooldown]
        }
    }

    return Math.max(calculate(0,buy),calculate(0,cooldown),0)  // we can either hold or buy to start
};

console.log(maxProfit([1,2,3,0,2]))