/*
https://leetcode.com/problems/slowest-key/description/
given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes,
where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed.
The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = ['',0]
    for(let i = 0; i < releaseTimes.length;i++){
        if(releaseTimes[i] - (releaseTimes[i-1]||0) > max[1] || (releaseTimes[i] - (releaseTimes[i-1]||0) === max[1] && keysPressed[i] > max[0])){
            max[0] = keysPressed.charAt(i)
            max[1] = releaseTimes[i] - (releaseTimes[i-1]||0)
        }
    }
    return max[0]
};

console.log(slowestKey([9,29,49,50],"cbcd"))