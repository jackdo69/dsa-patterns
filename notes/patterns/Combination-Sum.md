# Combination Sum

Tags: backtracking

### Question

*Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.*

*The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.*

*The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.*

### Ideas

We need depth first search to solve this problems, we start with 1 element of the candidate
From that element, we start choose the next element as the combination.
There will be 2 options at this point: 

include the current element
not include the current element
with recursion, we pass in the sum down, until it equal the target
if we out of loop or sum > target, we breaks

### Implementation

```jsx
function combinationSum(candidates: number[], target: number): number[][] {
      const results: number[][] = [];

  /**
   * We need depth first search to solve this problems, we start with 1 element of the candidate
   * From that element, we start choose the next element as the combination.
   * There will be 2 options at this point,
   * - include the current element
   * - not include the current element
   * with recursion, we pass in the sum down, until it equal the target
   * if we out of loop or sum > target, we breaks
   */

  function dfs(i: number, combination: number[], sum: number) {
    if (sum === target) {
      results.push([...combination]);
      return;
    }
    if (i == candidates.length || sum > target) return;

    // select the current element of the pointer
    combination.push(candidates[i]);
    dfs(i, combination, sum + candidates[i]);
    // remove the current element so we don't repeat
    combination.pop();
    dfs(i + 1, combination, sum);
  }

  dfs(0, [], 0);
  return results;
};
```