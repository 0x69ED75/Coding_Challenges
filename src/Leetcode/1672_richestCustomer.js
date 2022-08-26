/*
https://leetcode.com/problems/richest-customer-wealth/
Given an m x n integer grid, accounts
where accounts[i][j] is the amount the ith customer has in the jth bank
Return the Wealth the richest customer has.
 */
var maximumWealth = function(accounts) {
    let currentMax = 0;
    accounts.forEach(account =>{
        let sum = account.reduce((prev,current) => prev + current , 0)
        if(sum > currentMax) currentMax = sum
    })
    return currentMax
};