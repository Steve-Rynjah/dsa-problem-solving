// Longest Consecutive Sequence

function main(arr){
   const numSet = new Set(arr);
   let longest = 0;

   for(const num of numSet){
    if(!numSet.has(num - 1)){
        let length = 0;
        while(numSet.has(num + length)){
            length++;
        }
        longest = Math.max(longest, length)
    }
   }
   return longest;
}


console.log(main([2,20,4,10,3,4,5]))