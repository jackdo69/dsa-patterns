# Find k closest elements

Topic: binary search, sliding window

Difficulty: Medium

Interview Frequency: Low

### Question

*Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.*

*An integer `a` is closer to `x` than an integer `b` if:*

- *`|a - x| < |b - x|`, or*
- *`|a - x| == |b - x|` and `a < b`*

### Ideas

This is a **sliding window** problem. The answer is always a contiguous window of size `k` in the sorted array (because the array is sorted, the k closest elements are adjacent). The **starting point** of the window can be found using **lower bound binary search**.

**"Should I slide the window right?"**

At each `mid`, the current window is `arr[mid]` to `arr[mid + k - 1]`. To decide whether to slide right, compare what you'd **lose** (left edge `arr[mid]`) vs what you'd **gain** (next element `arr[mid + k]`):

- If `arr[mid]` is farther from `x` than `arr[mid + k]` → worth sliding right (`left = mid + 1`)
- Otherwise → not worth it, keep or move left (`right = mid`)

Step by step with `arr = [1, 2, 3, 4, 5]`, `k = 3`, `x = 3`:

```
left=0, right=2

mid=1: lose arr[1]=2 (dist 1), gain arr[4]=5 (dist 2). Lose < Gain → not worth. right=1
mid=0: lose arr[0]=1 (dist 2), gain arr[3]=4 (dist 1). Lose > Gain → worth it. left=1

left === right = 1 → window is arr[1..3] = [2, 3, 4]
```

This is the lower bound pattern (8c) where the condition is: "the element we'd gain is at least as far as the one we'd lose" → stop sliding.

### Solution

```typescript
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