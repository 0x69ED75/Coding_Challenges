function isValidSudoku(board: string[][]): boolean {
    return verifyRows(board) && verifyColumns(board) && verifySquares(board)
};

function verifyRows(board:string[][]):boolean{
    for(let i = 0; i < board.length;i++){
        let checked = []
        for(let j = 0; j < board[i].length;j++){
            if(board[i][j] === '.') continue
            if(checked[board[i][j]] == 1){
                return false
            }
            else{
                checked[board[i][j]] = 1
            }
        }
    }
    return true
}

function verifyColumns(board:string[][]):boolean{
    for(let i = 0; i < board.length;i++){
        let checked = []
        for(let j = 0; j < board.length ; j++){
            if(board[j][i] === '.') continue
            if(checked[board[j][i]] == 1){
                return false
            }
            else{
                checked[board[j][i]] = 1
            }
        }
    }
    return true
}

function verifySquares(board:string[][]):boolean{
    let curr = 0
    let curr2 = 0

    while(curr < 9){
        curr2 = 0
        while(curr2 < 9){
            let checked = []
            for(let i = curr; i < curr+3; i++){
                for(let j = curr2; j < curr2+3; j++){
                    if(board[i][j] === '.') continue
                    if(checked[board[i][j]] == 1){
                        return false
                    }
                    else{
                        checked[board[i][j]] = 1
                    }
                }
            }
            curr2 += 3
        }
        curr += 3
    }
    return true
}

console.log(verifySquares([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))