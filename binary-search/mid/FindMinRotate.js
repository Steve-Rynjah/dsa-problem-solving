function main(num) {
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (num[mid] > num[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return num[left];
}

console.log(main([3, 4, 5, 6, 1, 2]));
