console.log(findOutlier([ 2, -6, 8, -10, -3 ]))

function findOutlier(integers){
    return integers.filter(q => Math.abs(q) % 2=== 0).length === 1 ? integers.filter(q => Math.abs(q) % 2 === 0)[0] : integers.filter(q => Math.abs(q) % 2 === 1)[0]
}