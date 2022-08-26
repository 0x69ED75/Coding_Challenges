console.log(rgb(248,248,15));

/*
https://www.codewars.com/kata/513e08acc600c94f01000001
given an RGB value, return its equivalence in hexadecimal.
For any values below 0 or above 255 count it as 0 or 255 respectively.
 */

function rgb(r, g, b){
    return (vals(r).toString(16).padStart(2,'0') + vals(g).toString(16).padStart(2,'0') + vals(b).toString(16).padStart(2,'0')).toUpperCase();
}

function vals(x){
    if(x <= 0){
        return  "00";
    }
    else if(x > 255){
        return 255;
    }
    return x;
}