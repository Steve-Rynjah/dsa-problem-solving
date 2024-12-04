// Given a binary 2D array, where each row is sorted. Find the row with the maximum number of 1s.

function main(matrix) {
  let maxRowIndex = 0;
  let countOnes = 0;

  //Reduce process the array and retrun it into a single value
  //accumulator : hold the value
  //current : define the current value
  //0 (initialValue) : The starting value of the accumulator.

  matrix.forEach((row, index)=>{
    const count = row.reduce((acc, current)=>(
        acc + (current === 1 ? 1 : 0)
    ),0)
    if(count > countOnes){
        countOnes = count;
        maxRowIndex = index;
    }
  })

  return maxRowIndex;
}

console.log(
  main([
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
  ])
);
