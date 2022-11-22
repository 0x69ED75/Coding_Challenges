var checkOnesSegment = function(s) {
    let flag = false;
    for(let i = 0; i < s.length;i++){
        if(flag && s[i] === '1'){
            return false
        }
        while(s[i] === '1'){
            flag = true
            i++;
        }
    }
    return true;
};

console.log(checkOnesSegment("1001"))