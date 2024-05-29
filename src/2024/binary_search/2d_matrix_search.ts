function searchMatrix(matrix: number[][], target: number): boolean {
    let min = 0
    let max = matrix.length
    let innerMin = 0
    let innerMax = matrix[0].length

    while(min <= max && min < matrix.length){
        let mid = Math.floor(((max+min) / 2))

        if(matrix[mid][0] > target){
            max = mid-1
        }
        else if(matrix[mid][matrix[mid].length-1] < target){
            min = mid+1
        }
        else{
            while(innerMin <= innerMax){
                let innerMid = Math.floor(((innerMax+innerMin) / 2))
                if(matrix[mid][innerMid] > target){
                    innerMax = innerMid-1
                }
                else if(matrix[mid][innerMid] < target){
                    innerMin = innerMid+1
                }
                else{
                    return true
                }
            }
            return false
        }
    }
    return false
};
console.log(searchMatrix([[1]]
    ,13))