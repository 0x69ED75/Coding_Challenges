/*
https://leetcode.com/problems/search-suggestions-system/description/
given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products
 after each character of searchWord is typed. Suggested products should have common prefix with searchWord.
 If there are more than three products with a common prefix return the three lexicographically minimums products.
 */
var suggestedProducts = function(products, searchWord) {
    let searchSuggest = []
    let currentSubstr = ""
    products.sort()
    for(let i = 0; i < searchWord.length;i++){
        currentSubstr += searchWord[i]
        let count = 0;
        let currSearch = []
        for(let j = 0; j < products.length && count < 3; j++){
            if(products[j].substring(0,currentSubstr.length) === currentSubstr){
                currSearch.push(products[j])
                count++
            }
        }
        searchSuggest.push(currSearch)
    }
    return searchSuggest
};

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse"))
/*
Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
 */