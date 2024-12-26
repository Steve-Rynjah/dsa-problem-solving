function main(arr, k){
    let ROWS = arr.length;
    let COLS = arr[0].length;
    let left = 0;
    let right = ROWS * COLS - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left)/2)
        let row = Math.floor((mid / COLS))
        let col = mid % COLS

        if(k < arr[row][col]){
            right = mid - 1
        } else if(k > arr[row][col]){
            left = mid + 1
        } else {
            return true
        }
    }
    return false

}

console.log(main([[1],[3]], k = 2))