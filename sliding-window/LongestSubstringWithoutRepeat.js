function main(str){
    const charSet = new Set()
    let left = 0;
    let result = 0;

    for(let right = 0; right < str.length; right++){
        console.log("Before :", charSet)
        while(charSet.has(str[right])){
            charSet.delete(str[left])
            left++
        }
        charSet.add(str[right])
        result = Math.max(result, right - left + 1)
    }
    console.log(charSet)
    return result;
}

console.log(main("abcabcd"))