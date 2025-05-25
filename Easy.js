function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) { // Compare adjacent elements
        // Swap elements if they are in the wrong order
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped); // Repeat until no swaps are made
  return arr;
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers); // Output: Sorted array: [1, 2, 5, 5, 6, 9]