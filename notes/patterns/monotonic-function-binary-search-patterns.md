# Monotonic function- Binary Search Patterns

Tags: binary search, monotonic

### Ideas

A monotonic function is a function that is either **non-decreasing** or **non-increasing**. Given `x1` and `x2` where `x1 > x2`, we should have `f(x1) >= f(x2)`.

A sorted array is monotonic because the value increases or stays the same as the index increases.

Using the template below to solve questions like “*Find the first …. in a sorted …”*

### Patterns

**Classic Binary Search**

```jsx
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2); 
        if (arr[mid] === target) return mid; 
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

- *Uses left <= right because we're looking for an exact match*
- *Returns as soon as we find the target*
- *Returns -1 if not found*
- *Used when searching for a specific value in sorted array*

**First True Binary Search (First Occurrence)**

```jsx
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    let first_true_index = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            first_true_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return first_true_index;
}
```

- *Keeps track of the first occurrence*
- *Continues searching even after finding a match*
- *Used for finding first element that satisfies a condition*
- *Common in problems like "find first element greater than x"*

**Boundary Binary Search (Finding Position)**

```jsx
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length;  // Note: not arr.length - 1

    while (left < right) {   // Note: < instead of <=
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;     // Note: not mid - 1
        }
    }
    return left;  // left == right at this point
}
```

- *Uses `while (left < right)`*
- *Right pointer is exclusive boundary*
- *Never subtracts 1 from mid*
- *Used when:*
    - *Finding insertion position*
    - *Finding boundaries between regions*
    - *Finding optimal positions (like in your closest elements problem)*