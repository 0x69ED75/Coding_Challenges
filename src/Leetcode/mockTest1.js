
/*
You are playing the following Nim Game with your friend:

Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

 My code is based on the fact that who picks first stone on a stack with multiple 4 will lose no matter what.

 */
var canWinNim = function(n) {
    return n%4!==0
};


/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

A better solution would of been to use XOR.
 */
var hammingDistance = function(x, y) {
    let bin1 = x.toString(2).padStart(4,"0")
    let bin2 = y.toString(2).padStart(4,"0")
    let count = 0;
    let longest = bin1.length > bin2.length;

    if(longest){
        while(bin2.length !== bin1.length){
            bin2 = "0"+bin2;
        }
    }
    else{
        while(bin1.length !== bin2.length){
            bin1 = "0"+bin1;
        }
    }

    for(let i = 0; i < bin1.length; i++){
        if(bin1.charAt(i) !== bin2.charAt(i)){
            count++;
        }
    }

    return count;
};


console.log(hammingDistance(680142203,1111953568))