/*
https://leetcode.com/problems/maximum-number-of-balloons/description/
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.
 */

var maxNumberOfBalloons = function(text) {
    let map = new Map

    let letters = ["b","a","l","o","n"]
    for(let i = 0; i < text.length; i++){
        if(letters.includes(text.charAt(i))){
            map.set(text.charAt(i),map.get(text.charAt(i))+1||1)
        }
    }

    let x = Array.from(map.keys())
    if(x.length !== 5){return 0}

    let min = Number.MAX_SAFE_INTEGER
    for(let j = 0; j < x.length; j++){
        let letter = x[j]
        let count =  map.get(letter)
        if(letter === 'o' || letter === 'l'){
            if(count === 1){
                return 0
            }
            count /=2
        }
        if(count < min){
            min = count
        }
    }
    return Math.floor(min)
};

console.log(maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"))