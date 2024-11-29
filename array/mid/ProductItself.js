// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i]
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

function main(arr){
    let output = Array(arr.length).fill(1);

    let prefix = 1;
    for(let i = 0; i<arr.length; i++){
        output[i] = prefix;
        prefix *= arr[i];
    }

    let suffix = 1;
    for(let i = arr.length-1; i>=0; i--){
        output[i] *= suffix;
        suffix *= arr[i];
    }

    //return output;
    return output.map(val => (val === 0 ? 0 : val));
}

console.log(main([1,2,3]))


