function main(num){
    const result = []

    function backtrack(current, open, close){
        if(current.length === 2 * num){
            result.push(current)
            return;
        }
        if(open < num){
            backtrack(current + "(", open + 1, close)
        }
        if(close < open){
            backtrack(current + ")", open, close + 1)
        }
    }

    backtrack("", 0, 0)
    return result;
}

console.log(main(3))