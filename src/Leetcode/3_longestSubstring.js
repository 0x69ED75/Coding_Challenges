var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){return 0}
    let arr = s.split("")
    let max = 0

    for(let i = 0 ; i < s.length; i++) {
        let letters = []
        let count = 0
        for (let j = i; j < s.length; j++) {
            if (!letters.includes(arr[j])) {
                count++
                letters.push(arr[j])
            } else {
                count = 0
                break;
            }
            if (count > max) {
                max = count
            }
        }
    }
    return max === 0 ? 1 : max
};
console.log(lengthOfLongestSubstring(" "))