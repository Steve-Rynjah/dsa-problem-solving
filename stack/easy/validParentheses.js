function main(str){
    const stack = []
    const keys = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }

    for(const element of str){
        if(keys[element]){
            if(stack.length > 0 && stack[stack.length -1] === keys[element]){
                stack.pop()
            } else {
                return false;
            }
        } else {
            stack.push(element)
        }
    }

    return stack.length === 0;
}

console.log(main("[]"))