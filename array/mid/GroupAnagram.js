function main(str) {
  if (str.length <= 1) return str;

  let map = new Map();

  for (const element of str) {
    const sortElement = element.split("").sort().join();
    if (!map.has(sortElement)) {
      map.set(sortElement, []);
    }
    map.get(sortElement).push(element);
  }

  return [...map.values()]
}

console.log(main(["act","pots","tops","cat","stop","hat"]));
console.log(main(["x"]))
