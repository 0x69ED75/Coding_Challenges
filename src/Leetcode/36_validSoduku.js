/*
https://leetcode.com/problems/valid-sudoku/description/

Given a 9x9 Sudoku board, check if is valid.

For a board to be valid:
    - Each row must only contain numbers 0-9 or '.' if it's blank There must be no duplicate numbers.
    - Each column must only contain numbers 0-9 or '.' if its blank. There must be no duplicate numbers.
    - Each 3x3 square must only contain numbers 0-9 or '.' if its blank. There must be no duplicate numbers.
 */

var isValidSudoku = function(board) {
    for(let i= 0; i < board.length;i++){
        let vert = ['X',0,0,0,0,0,0,0,0]
        let horiz = ['X',0,0,0,0,0,0,0,0]
        for(let j = 0; j < board.length;j++){
            if(board[j][i] !== '.'){
                if(vert[board[j][i]] === 1){return false}
                vert[board[j][i]] = 1
            }
            if(board[i][j] !== '.'){
                if(horiz[board[i][j]] === 1){return false}
                horiz[board[i][j]] = 1
            }
        }
    }

    for(let k = 0; k < board.length;k+=3){
        let trip = ['X',0,0,0,0,0,0,0,0]
        for(let i = 0; i < board.length; i++){
            for(let j = k; j < k+3; j++){
                if(board[i][j] !== '.'){
                    if(trip[board[i][j]] === 1){return false}
                    trip[board[i][j]] = 1
                }
            }
            if((i+1) % 3 === 0){
                trip = ['X',0,0,0,0,0,0,0,0]
            }
        }
    }

    return true
};


console.log(isValidSudoku([["7",".",".",".","4",".",".",".","."],[".",".",".","8","6","5",".",".","."],[".","1",".","2",".",".",".",".","."],[".",".",".",".",".","9",".",".","."],[".",".",".",".","5",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".","2",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]))