function main(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === target){
            return [left, right]
        } else if(sum < target){
            left++
        } else {
            right--
        } 
    }
    return `Not found!`

}

console.log(main([1,2,3,4,5], target = 2))