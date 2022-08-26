console.log(generateHashtag(("a".repeat(139))))

/*
Converts a string into a tweetable Hashtag String.
It must have the following properties:
    -It must start with a hashtag.
    -All words must have their first letter capitalised.
    -If the final result is longer than 140 characters, it must return false
    - If the result is an empty string it must return false.
 */


function generateHashtag (str) {
    let hashtaggedWord = str.split(" ")
    hashtaggedWord = hashtaggedWord.map(q => q.charAt(0).toUpperCase() + q.slice(1)).join("")
    return hashtaggedWord.length === 0 || hashtaggedWord.length > 139 ? false : "#"+hashtaggedWord
}