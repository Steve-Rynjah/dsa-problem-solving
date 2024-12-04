function main(arr){
    let left = 0;
    let right = arr.length -1;
    let maxContainer = 0;

    while(left < right){
        let width = right - left;
        let height = Math.min(arr[left], arr[right]);
        maxContainer = Math.max(maxContainer, (width * height));

        if(arr[left] < arr[right]){
            left++
        } else {
            right--
        }
    }
    return maxContainer;
}

console.log(main([2,2,2]))