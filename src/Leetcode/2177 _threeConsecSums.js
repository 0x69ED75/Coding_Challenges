var sumOfThree = function(num) {
    return (num % 3 === 0) && (num/3) + ((num/3)+1) + ((num/3)-1) === num ? [((num/3)-1),(num/3),((num/3)+1)] : []
};

console.log(sumOfThree(25))