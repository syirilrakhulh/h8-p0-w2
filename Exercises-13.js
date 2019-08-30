function xo(str) {

    var count1 = 0;
    var count2 = 0;

    for (i = 0; i < str.length; i++) {

        if (str[i] == 'x') {
            count1++;
        }

        if (str[i] == 'o'){
            count2++
        }

    }

    if(count1 == count2){
        return true
    }

    else {
        return false
    }
    
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));