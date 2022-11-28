var findWinners = function(matches) {
    let losses = new Map
    for(let i = 0; i < matches.length; i++){
        losses.set(matches[i][0],losses.get(matches[i][0])||0)
        losses.set(matches[i][1],losses.get(matches[i][1])+1||1)
    }
    let answer = [[],[]]
    let keyArr = Array.from(losses.keys())
    for(let i = 0; i < keyArr.length;i++){
        let playerLosses = losses.get(keyArr[i])
        if(playerLosses === 0){answer[0].push(keyArr[i])}
        if(playerLosses === 1){answer[1].push(keyArr[i])}
    }
    answer.forEach(arr => arr.sort((a,b) => a-b))
    return answer
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))