function sortedArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? oddNumbers.shift() : num));
}

console.log(sortedArray([9, 4, 7, 1, 5, 11, 2, 111, +0]));
