function main(arr){
    let result = new Array(arr.length).fill(0)
    const stack = []

    for(let i = 0; i<arr.length; i++){
        while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
            const prevIndex = stack.pop()
            result[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }

    return result;
}

console.log(main([22,21,20]))