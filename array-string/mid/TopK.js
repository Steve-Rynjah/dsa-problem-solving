function main(arr, k) {
  if (arr.length <= 1) return arr;

  let hash = {};
  for (const element of arr) {
    hash[element] = (hash[element] || 0) + 1;
  }

  const sort = Object.entries(hash).sort((a, b) => b[1] - a[1])
  const result = sort.slice(0,k).map(([key])=> Number(key))

  return result
}

console.log(main([2, 2, 3, 3, 3, 3, 1,2,2,2], (k = 2)));
