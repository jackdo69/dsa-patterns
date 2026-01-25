# Binary Search - Lower Bound vs Upper Bound

Topic: binary search

Difficulty: Medium

Interview Frequency: Medium

### Ideas

Both use the same template — only the **condition** changes:

```
left = 0, right = length
while (left < right):
    if condition(mid): right = mid
    else: left = mid + 1
return left
```

- **Lower bound**: find the first index where `arr[mid] >= target`
- **Upper bound**: find the first index where `arr[mid] > target`

**Example: `arr = [1, 3, 3, 3, 5, 7]`, target = 3**

Lower bound → index 1 (first element >= 3)
Upper bound → index 4 (first element > 3)

```
arr:    [1,  3,  3,  3,  5,  7]
index:   0   1   2   3   4   5
              ^           ^
         lowerBound=1   upperBound=4
```

This means: all 3s are in range `[1, 4)` → 3 elements (`upperBound - lowerBound = 3`).

---

### Lower Bound Walkthrough

**"Find the first position where `arr[mid] >= target`"**

Condition: `arr[mid] >= target` → `right = mid` (might be the answer)

```typescript
arr = [1, 3, 3, 3, 5, 7], target = 3

left=0, right=6
  mid=3: arr[3]=3, 3 >= 3? Yes → right=3       [search left half]
left=0, right=3
  mid=1: arr[1]=3, 3 >= 3? Yes → right=1       [search left half]
left=0, right=1
  mid=0: arr[0]=1, 1 >= 3? No  → left=1        [skip, not the answer]
left=1, right=1 → stop. Answer = 1
```

### Upper Bound Walkthrough

**"Find the first position where `arr[mid] > target`"**

Condition: `arr[mid] > target` → `right = mid` (might be the answer)

```typescript
arr = [1, 3, 3, 3, 5, 7], target = 3

left=0, right=6
  mid=3: arr[3]=3, 3 > 3? No  → left=4        [skip, not the answer]
left=4, right=6
  mid=5: arr[5]=7, 7 > 3? Yes → right=5       [search left half]
left=4, right=5
  mid=4: arr[4]=5, 5 > 3? Yes → right=4       [search left half]
left=4, right=4 → stop. Answer = 4
```

---

### The Only Difference

| | Lower Bound | Upper Bound |
|---|---|---|
| Condition | `arr[mid] >= target` | `arr[mid] > target` |
| Finds | First element **>=** target | First element **>** target |
| On duplicates | Lands on the **first** copy | Lands **after** the last copy |

The `=` sign in the condition is the only difference. It decides whether equal values are "the answer" (go left to find earlier ones) or "not the answer yet" (go right to skip past them).

---

### Same Question, Both Approaches

**Question: "Find the range [first, last] of target 3 in a sorted array"**

```typescript
function searchRange(arr: number[], target: number): [number, number] {
  const first = lowerBound(arr, target);    // first index >= target
  const last = upperBound(arr, target) - 1; // first index > target, minus 1

  // Check if target actually exists
  if (first >= arr.length || arr[first] !== target) return [-1, -1];
  return [first, last];
}
```

```typescript
// arr = [1, 3, 3, 3, 5, 7], target = 3
// lowerBound → 1 (first 3)
// upperBound → 4 (first element after all 3s)
// range = [1, 4-1] = [1, 3] ✓
```

### Solution

```typescript
function lowerBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function upperBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
```
