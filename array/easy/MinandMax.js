function main(arr){
    let min = arr[0];
    let max = arr[0];

    for(const element of arr){
        if(element < min){
            min = element;
        } 
        if(element > max){
            max = element;
        }
    }
    return [min, max];
}

console.log(main([1,5,2,4,3,6]))