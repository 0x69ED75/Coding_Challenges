// https://leetcode.com/problems/car-fleet/description/
/*
There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car
and speed[i] is the speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed.
 The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored
 (i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.
 */
function carFleet(target: number, position: number[], speed: number[]): number {
    let posSpeed = position.map((_,i) => [position[i],speed[i],(target - position[i])/speed[i]])
    posSpeed.sort((a,b) => a[0]-b[0])
    let fleets = posSpeed.length
    let prev = undefined

    for(let i = posSpeed.length-1; i >= 0; i--){
        console.log(posSpeed[i],prev)
        if(posSpeed[i][2] <= prev){
            fleets--
        }
        else{
            prev = posSpeed[i][2]
        }
    }
    return fleets

};

console.log(carFleet(100,[0,2,4]
    ,[4,2,1]))