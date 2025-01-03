function main(str, k){
    const charSet = new Map();
    let left = 0;
    let maxFrequent = 0;
    let result = 0;

    for(let right = 0; right<str.length; right++){
        charSet.set(str[right], (charSet.get(str[right]) || 0) + 1)
        maxFrequent = Math.max(maxFrequent, charSet.get(str[right]))

        //window size -> right - left + 1
        while((right - left + 1) - maxFrequent > k){
            charSet.set(str[left], (charSet.get(str[left] || 0) - 1))
            left++
        }
        result = Math.max(result, right - left + 1)
    }
    return result;
}

console.log(main("AAABABB", k = 1))