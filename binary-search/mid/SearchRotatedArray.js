function main(num, target) {
  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (num[mid] === target) return mid;

    if (num[left] <= num[mid]) {
      if (target >= num[left] && target < num[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target <= num[right] && target > num[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

console.log(main([3, 4, 5, 6, 1, 2], (target = 1)));
