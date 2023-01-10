/*
https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat.
You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)

Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
 */
function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a,b) => a-b)
    students.sort((a,b) => a-b)
    let count:number = 0
    console.log(seats)
    console.log(students)

    for(let i = 0; i < students.length;i++){
        count+= Math.abs(seats[i] - students[i])
    }

    return count
};

console.log(minMovesToSeat([3,20,17,2,12,15,17,4,15,20],[10,13,14,15,5,2,3,14,3,18]))