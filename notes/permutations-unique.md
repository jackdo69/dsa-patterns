# Permutations Unique

Tags: backtracking, dfs

### Question

- Given a collection of numbers, `nums`, that might contain duplicates, return *all possible unique permutations **in any order**.*
- Example

```jsx
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

### Implementations

```jsx
  function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    // build a map to keep track of number and its frequency
    const map = new Map<number, number>();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    function dfs(k: number, path: number[]) {
      // base case
      if (k === nums.length) {
        result.push([...path]);
        return;
      }

      for (const num of map.keys()) {
        // check if we can use this number
        if (map.get(num) === 0) continue;
        map.set(num, map.get(num)! - 1);

        path.push(num);
        dfs(k + 1, path);
        // put the number back to be used later
        map.set(num, map.get(num)! + 1);
        path.pop();
      }
    }
    dfs(0, []);

    return result;
  }
```