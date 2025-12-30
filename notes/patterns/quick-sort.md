# Quick Sort

### Ideas

1. Choose the last element in the array as the pivot (`right`)
2. Create a 2 pointers from the first position called `left` and `partition`
3. Loop the `left` towards the right, whenever you find an element at left that smaller than pivot, swap the `left` with the `partition`, then increment the `partition` (partition++)
4. By the end of the operation, all the element on the left of the partition is smaller than the pivot, swap the pivot with its correct position (swap `right` and `partition`)

**Time complexity:** O(nlogn) because we have to loop through all the element once, each time, the size of the array is split by half

### Implementation

```jsx
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const arrayToSort = [10, 5, 2, 3, 99, 23];
const sortedArray = quickSort(arrayToSort);
console.log(sortedArray); // Output: [2, 3, 5, 10, 23, 99]

```