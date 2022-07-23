console.log(rgb(248,248,15));

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