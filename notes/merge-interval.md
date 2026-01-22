# Merge Interval

Tags: interval

### Question

Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

### Implementation

```jsx
function merge(intervals: number[][]): number[][] {
  /**
   * 2 steps needed
   * 1. Sort the intervals by the start point
   * 2. Implement 2 pointers
   */

  intervals = intervals.sort((a, b) => a[0] - b[0]); // ascending order

  let prev = intervals[0];
  const result = [prev];
  for (const curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
}

```