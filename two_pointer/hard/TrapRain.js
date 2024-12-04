function main(arr){
    let left = 0;
    let right = arr.length - 1;
    let leftMax = arr[left];
    let rightMax = arr[right];
    let res = 0

    while(left < right){
        if(leftMax < rightMax){
            left++
            leftMax = Math.max(leftMax, arr[left])
            res += leftMax - arr[left]
        } else {
            right--
            rightMax = Math.max(rightMax, arr[right])
            res += rightMax - arr[right]
        }
    }

    return res;
}

console.log(main([0,2,0,3,1,0,1,3,2,1]))