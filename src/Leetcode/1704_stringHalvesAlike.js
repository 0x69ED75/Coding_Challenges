/*
https://leetcode.com/problems/determine-if-string-halves-are-alike/
Given a string, see if both halves of the string contain the same number of vowels.
 */

var halvesAreAlike = function(s) { // concise solution with 90 ms runtime.

    // split string into two halves
    let half1 = s.substring(0,s.length / 2)
    let half2 = s.substring(s.length/2)

    // Using match by regex to get an array of all vowels in both strings. If these values are null, it is instead set to 0 with the || operator
    half1 = half1.match(/([aeiou])/gi) || 0
    half2 = half2.match(/([aeiou])/gi) || 0
    // the above regex uses two flags "/g" for matching every example in the string and "/i" for case insensitivity.

    return half1.length === half2.length // if both arrays are the same size, both halves of the string have the same number of vowels

};


console.log(halvesAreAlike("gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC"))


/* 110 ms solution
var halvesAreAlike = function(s) {
    let vowels = ['a','e','i','o','u']
    let half1 = s.toLowerCase().substring(0,s.length / 2).split("")
    let half2 = s.toLowerCase().substring(s.length/2).split("")
    let half1Count = 0
    let half2Count = 0

    half1.forEach(character => {
        if(vowels.includes(character)){
            half1Count++
        }})
    half2.forEach(character => {
        if(vowels.includes(character)){
            half2Count++
        }})

    return half1Count === half2Count
};
 */