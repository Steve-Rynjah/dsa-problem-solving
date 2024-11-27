function main(a, b){
    if(a.length !== b.length) return false;

    let hash = {}
    for(const element of a){
        hash[element] = (hash[element] || 0) + 1;
    }

    for(const element of b){
        if(!hash[element]){
            return false;
        }
        hash[element]--;
    }

    return true;
}

console.log(main("apple", "apple"))