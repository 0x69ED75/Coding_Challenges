class NumMatrix {
    memo:number[][] = []

    constructor(matrix: number[][]) {
        for(let i = 0 ; i < matrix.length;i++){
            let sum = 0
            this.memo.push([])
            for(let j = 0; j < matrix[i].length; j++){
                sum += matrix[i][j]
                this.memo[i][j] = sum
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0
        for(let i = row2; i >= row1;i--){
            sum += this.memo[i][col2] - (this.memo[i][col1-1] ?? 0)
        }
        return sum
    }
}

let x = new NumMatrix([[-1]])
console.log(x.sumRegion(0,0,0,0))