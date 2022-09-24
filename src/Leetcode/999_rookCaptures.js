/*
https://leetcode.com/problems/available-captures-for-rook/
On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.
Return how many pawns this White Rook can capture
 */
var numRookCaptures = function(board) {
    let coords = []
    let count = 0

    // Finding array indexes of Rook
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === "R"){
                coords = [i,j]
            }
        }
    }

    // Iterating each cardinal direction the Rook can travel, to board edge.
    // up
    for(let i = coords[0]; i >= 0; i--){
        if(board[i][coords[1]] === 'B'){break}
        if(board[i][coords[1]] === 'p'){count++;break}
    }
    // down
    for(let i = coords[0]; i < board.length; i++){
        if(board[i][coords[1]] === 'B'){break}
        if(board[i][coords[1]] === 'p'){count++;break}
    }
    // left
    for(let i = coords[1]; i < board[0].length; i++){
        if(board[coords[0]][i] === 'B'){break}
        if(board[coords[0]][i] === 'p'){count++;break}
    }
    //right
    for(let i = coords[1]; i >= 0; i--){
        if(board[coords[0]][i] === 'B'){break}
        if(board[coords[0]][i] === 'p'){count++;break}
    }

    return count
};


console.log(numRookCaptures(
    [[".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        ["R",".",".","R",".",".",".","p"],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."]]
))