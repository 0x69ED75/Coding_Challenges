var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b) => b-a)
    trainers.sort((a,b) => b-a)

    let count = 0;
    let point = 0
    for(let i = 0; i < players.length; i++){
        while(players[point] > trainers[i]){
            point++
        }
        if(point > players.length-1 || trainers[i] === undefined){
            return count
        }
        count++
        point++
    }
    return count
};

console.log(matchPlayersAndTrainers([614297111,692656435,443642967,837648067,965453443,659357319,303620537,304318096,119817771,638864351]
    , [366560616,918250321,524095282]))