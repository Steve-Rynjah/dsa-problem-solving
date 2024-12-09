function main(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor((arr.length)/2)
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  

    const leftSorted = main(left)
    const rightSorted = main(right)

    return merge(leftSorted,rightSorted)
}

function merge(left, right){
    let i = 0, j = 0;
    const result = [];

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }

    while(i < left.length){
        result.push(left[i])
        i++
    }

    while(j < right.length){
        result.push(right[j])
        j++
    }

    return result;
}

console.log(main([1,3,2,5,4]))

