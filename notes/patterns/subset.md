# Subset

Tags: backtracking

### Question

- Given an integer array `nums` of **unique** elements, return *all possible* *subsets* *(the power set)*. The solution set **must not** contain duplicate subsets. Return the solution in **any order**.
- Example:
- Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

### Implementations

```jsx
  function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function buildSubsets(size: number, pos: number, path: number[]) {
      if (size === 0) {
        result.push([...path]);
        return;
      }
      for (let i = pos; i < nums.length; i++) {
        path.push(nums[i]);
        buildSubsets(size - 1, i + 1, path);
        path.pop();
      }
    }
    for (let i = 0; i <= nums.length; i++) {
      buildSubsets(i, 0, []);
    }

    return result;
  }
```