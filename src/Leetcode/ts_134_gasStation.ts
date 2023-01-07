/*
https://leetcode.com/problems/gas-station/description/
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
 If there exists a solution, it is guaranteed to be unique
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let index:number = 0
    let fuel:number = 0
    if(cost.reduce((a,b) => a+b) > gas.reduce((a,b) => a+b)){return -1} // if total cost is more than the total amount of gas, it is not possible.

    for(let i = 0; i < gas.length;i++){
        fuel += gas[i] - cost[i] // calculate how much fuel we can add at current station. If we receive less gas than it cost to get here, this is a negative number and reduces total fuel.
        // if fuel drops below 0, we know we can't go any further from starting at station "index" or any of the stations from index to i
        // However, we do know we can reach from index to i, so as long as we can reach the end from "index", we can go all the way around
        if(fuel < 0){
            index = i+1
            fuel = 0
        }
    }
    return index
}

console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]))