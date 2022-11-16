/*
https://leetcode.com/problems/guess-number-higher-or-lower/description/

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
 */

// binary search approach
var guessNumber = function(n) {
    let min = 1
    let max = n;
    let bin =  Math.floor(n/2)

    while(guess(bin) !== 0){
        if(guess(bin) === -1){
            max = bin;
        }
        else if(guess(bin) === 1){
            min = bin+1;
        }
        bin = Math.floor((min + max)/2)
    }
    return bin
};

var guess = function(n){
    let x = 1

    if(n > x){
        return -1
    }
    if(n < x){
        return 1
    }

    return 0
}

console.log(guessNumber(1))