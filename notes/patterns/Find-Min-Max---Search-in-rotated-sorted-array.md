# Find Min/Max - Search in rotated sorted array

Tags: binary search

### Question

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly left rotated** at an unknown index `k` (`1 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be left rotated by `3` indices and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return *the index of* `target` *if it is in* `nums`*, or* `-1` *if it is not in* `nums`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

### Implementation

```jsx
function search(nums: number[], target: number): number {
  let n = nums.length;
  let left = 0,
    right = n - 1,
    pivot = -1;

  // Find the pivot (smallest element index)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // the pivot must be on the right
    if (nums[mid] > nums[right]) {
      left = mid + 1;
      pivot = left;
    } else {
      right = mid - 1;
    }
  }

  // Binary search on the correct half
  function binarySearch(left: number, right: number): number {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  // Determine search range
  if (target >= nums[pivot] && target <= nums[n - 1]) {
    return binarySearch(pivot, n - 1);
  } else {
    return binarySearch(0, pivot - 1);
  }
}
```