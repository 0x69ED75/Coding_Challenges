var sortArrayByParityII = function(nums) { // 150 ms solution
    let arr = []
    // initialising pointers, pointing to the position of the first index of the even and odd values in new array respectively
    let oddPoint = 1
    let evenPoint = 0

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) { // if number is even, set the number at the current even pointer to this number.
            arr[evenPoint] = nums[i]
            evenPoint += 2 // increment even pointer
        } else {
            arr[oddPoint] = nums[i] // if number is odd, set the number at the current even pointer to this number.
            oddPoint += 2
        }
    }
    return arr
}

console.log(sortArrayByParityII([4,7,2,5]))

/* 225 ms solution
var sortArrayByParityII = function(nums) {
    let arr = nums.filter(q => q % 2 === 0)

    let odd = nums.filter(q => q % 2 === 1)
    let count = 1
    for(let i = 0; i < odd.length; i++){
        arr.splice(count,0,odd[i])
        count += 2;
    }
    return arr
};
 */

// var sortArrayByParityII = function(nums) { // 90 ms solution
//     let even = nums.filter(q => q % 2 === 0) // creating an array of the odd numbers
//     let odd = nums.filter(q => q % 2 === 1) // creating an array of the even numbers
//     let result = []
//
//     for(let i = 0; i < (nums.length / 2) ; i++){
//         result.push(even.pop(),odd.pop()) // pushing the even numbers then odd numbers in sequence.
//     }
//     return result
// };