function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers); // Output: Sorted array: [1, 2, 5, 5, 6, 9]