/*
https://leetcode.com/problems/calculate-amount-paid-in-taxes/
Given a 0-indexed 2d integer array "brackets" where brackets[i] = [upper,percent] means that the ith tax bracket
has an upper bound of upper[i]  and is taxed at a rate of percent[i]

Tax is calculated as follows:
The first upper0 dollars earned are taxed at a rate of percent0.
The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
And so on.

Given the income and the tax brackets, calculate the tax the user pays.
 */

/* Example:
Brackets: [[3,50],[7,10],[12,25]]
Income: 10

Income is not over 12, iterate to next bracket.

Income is over 7 (10>7), therefore, the amount taxable is (income - brackets[i][0]) = 10-7 = 3.
The tax paid is calculated with the percentage in the bracket at i+1, since we are over the tax upper bound at [i] (25%) = 25% of 3 = 0.75
subtract income by amount taxable

Income is now 7, we are currently iterated at bracket [3,50]. income > 3 therefore we look at bracket at i+1:
amount taxable = income - brackets [i][0] = 4  (7-3 = 4).
taxpaid = amount taxable * (brackets[i+1][1] / 100) = 4*0.10 = 0.40
Subtract income by amount taxable (7-4 = 3)

Income is now 3, and we exit the for loop since we have iterated each bracket.
Each person at least meets the lowest tax bracket, so this is outside the loop, so now, we must calculate tax paid in the first bracket.
Remaining income = 3
Tax paid = Multiply income by the percentage in the lowest bracket = (3 * 50%) = 1.50

Finally, the sum of all the calculated tax paid is returned (1.50 + 0.40 + 0.75) = 2.65
 */

var calculateTax = function(brackets, income) { // 65 ms runtime
    let taxpaid = 0;

    for(let i = brackets.length-1; i >= 0; i--){ // Iterating the brackets array backwards
            if(income > brackets[i][0]){ // if the remaining income is more than the current upper bracket, the user must be taxed on the bracket at i+1.
                let amountTaxable = income - brackets[i][0] // calculate the amount taxable in the bracket at i+1 by calculating how much the user is over the bracket by.
                taxpaid += amountTaxable * (brackets[i+1][1] / 100) // Calculating the amount paid by multiplying the amount taxable by the amount in the next bracket as a percentage.
                income -= amountTaxable // decrementing income by amount taxable as we no longer need this amount.
            }
        }
        taxpaid += income * (brackets[0][1]/100) // need to calculate the final amount taxable, as the above loop doesn't cover the lowest bracket. Everyone qualifies for the lowest bracket.
        return taxpaid

};

console.log(calculateTax([[3,50],[7,10],[12,25]],10))

