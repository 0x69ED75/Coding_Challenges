console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))

/*
https://www.codewars.com/kata/525c65e51bf619685c000059
Given parameters recipe and available, which are both objects containing the ingredients to bake a cake:
    - return how many cakes can be baked with the available ingredients, given the recipe.
 */

function cakes(recipe, available) {

    let keyArr = Object.keys(recipe) // creating an array of the recipes keys.
    let currentMin = Number.MAX_VALUE;

    for(const ingredient in keyArr){
        if(available[keyArr[ingredient]] === undefined){return 0} // if the current ingredient is not found in the "available" object, return 0.
        let x = (Math.floor(available[keyArr[ingredient]] / recipe[keyArr[ingredient]])) // getting the rounded down value of each available ingredient amount divided by the recipe amount.
        if(currentMin > x){currentMin = x} // setting this to currentMin if it is lower than the currentMin
    }

    return currentMin;
}