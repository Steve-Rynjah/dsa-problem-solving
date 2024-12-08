function main(arr){
    const map = new Map()
    for(const element of arr){
        if(map.has(element)){
            return true
        }
        map.set(element)
    }
    return false
}

console.log(main([1,2,3,3]))