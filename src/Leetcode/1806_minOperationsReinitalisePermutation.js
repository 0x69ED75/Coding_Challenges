/* Medium
https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
Given an integer n:
      - create a permutation of size n where perm[i] === i (0-indexed)
      -In one operation, create a new array "arr" where for each i in arr
           -  if (i% 2 == 0) then arr[i] = perm[i/2]
           -  if( (i%2 == 1) then arr[i] === perm[n/2 + (i-1) / 2]
      - Then assign arr to perm until arr === the original permutation

 */
var reinitializePermutation = function(n) {
    let count = 0;
    let perm = []

    for(let i = 0; i < n; i++){
        perm.push(i)
    }

    let orig = perm.toString()
    let arr = []

    while(true){
        arr = []
        for(let i = 0; i < n; i++){
            if(i%2 === 0){
                arr[i] = perm[i/2]
            }
            else{
                arr[i] = perm[n/2+(i-1)/2]
            }
        }
        count++;
        if(orig === arr.toString()){return count}
        perm = arr
    }
};

console.log(reinitializePermutation(4))