function main(str){
    let convertToLowerCase = str.toLowerCase();
    let left = 0;
    let right = convertToLowerCase.length - 1;

    while(left < right){
        while(left < right && !isAlphaNumeric(convertToLowerCase[left])) left++
        while(left < right && !isAlphaNumeric(convertToLowerCase[right])) right--

        if(convertToLowerCase[left] !== convertToLowerCase[right]) return false;

        left++;
        right--;
    }

    return true;

    function isAlphaNumeric(char){
        return /[a-z0-9]/.test(char)
    }

}

console.log(main("1213"))
