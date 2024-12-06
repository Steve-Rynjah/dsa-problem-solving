function main(arr){
    const stack = []

    for(const element of arr){
        if(element === "+"){
            stack.push(stack.pop() + stack.pop())
        } else if(element === "-"){
            const a = stack.pop()
            const b = stack.pop()
            stack.push(b - a)
        } else if(element === "*"){
            const sum = stack.pop() * stack.pop()
            stack.push(sum)
        } else if(element === "/"){
            const a = stack.pop()
            const b = stack.pop()
            stack.push(Math.trunc(b/a))
        } else {
            stack.push(parseInt(element))
        }
    }

    return stack;

}

console.log(main(["1","2","+","3","*","18","-"]))