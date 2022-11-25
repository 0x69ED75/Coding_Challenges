/*
https://leetcode.com/problems/word-search/description/
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
 where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

var exist = function(board, word) {
    let wordArr = word.split("")
    for(let i = 0; i < board.length;i++){
        console.log(board[i])
        for(let j = 0; j <= board[0].length; j++){
            if(board[i][j] === wordArr[0]){
                if(checkNeighbours(board,word,i,j)){return true}
            }
        }
    }
    return false
};

var checkNeighbours = function(board,word,i,j){
    let paths = [{"i":i,"j":j,"offset":1,"expect":word.charAt(1),prev:[undefined,undefined]}]

    while(paths.length > 0){
        let current = paths.pop()
        console.log(current)
        let [i,j,offset,expect,prev] = [current.i,current.j,current.offset,current.expect,current.prev]
        if(expect === ''){return true}
        if(j+1 < board[i].length && board[i][j+1] === expect && !(exists(prev,['i',i,'j',j+1]))){
            paths.push({"i":i,"j":j+1,"offset":offset+1,"expect":word.charAt(offset+1),"prev":[...prev,['i',i,'j',j]]})
        }
        if(j-1 >= 0 && board[i][j-1] === expect && !(exists(prev,['i',i,'j',j-1]))){
            paths.push({"i":i,"j":j-1,"offset":offset+1,"expect":word.charAt(offset+1),"prev":[...prev,['i',i,'j',j]]})
        }
        if(i-1 >= 0 && board[i-1][j] === expect && !(exists(prev,['i',i-1,'j',j]))){
            paths.push({"i":i-1,"j":j,"offset":offset+1,"expect":word.charAt(offset+1),"prev":[...prev,['i',i,'j',j]]})
        }
        if(i+1 < board.length && board[i+1][j] === expect && !(exists(prev,['i',i+1,'j',j]))){
            paths.push({"i":i+1,"j":j,"offset":offset+1,"expect":word.charAt(offset+1),"prev":[...prev,['i',i,'j',j]]})
        }
    }
    return false
}

function exists(arr, search) {
    outer:
    for(let i = 0; i < arr.length;i++){
        if(arr[i] !== undefined){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j] !== search[j]){
                    continue outer
                }
            }
            return true
        }
    }
    return false
}

//console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))

//console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE"))

//console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))

//console.log(exist([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]],"aaaaaaaaaaaaa"))

console.log(exist([["A","A","a","A","A","A"],["a","A","a","A","A","A"],["a","A","a","a","A","a"]],"aAaAaAAaa"))