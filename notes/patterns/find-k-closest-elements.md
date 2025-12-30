# Find k closest elements

Tags: binary search, sliding window

### Question

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and `a < b`

### Implementation

```jsx
function findClosestElements(arr: number[], k: number, x: number): number[] {
  // If array length equals k, return the whole array
  if (arr.length === k) return arr;

  // Find the insertion point using binary search
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);

    // Compare the distance between x and arr[mid] with x and arr[mid + k]
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1; // Move window right when left element is farther
    } else {
      right = mid; // Move window left or keep position when right element is farther
    }
  }

  // Return the subarray of k elements starting from left
  return arr.slice(left, left + k);
}
```