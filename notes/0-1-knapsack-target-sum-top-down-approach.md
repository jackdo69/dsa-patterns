# 0/1 Knapsack - Target Sum - Top down approach

Tags: dynamic programming

### Question

- *You are given an integer array `nums` and an integer `target`. You want to build an **expression** out of nums by adding one of the symbols `'+'` and `'-'` before each integer in nums and then concatenate all the integers.*
- *For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a `'-'` before `1` and concatenate them to build the expression `"+2-1"`. Return the number of different **expressions** that you can build, which evaluates to `target`.*

### Implementations

- The solution here is a top down using memoization which is very intuitive
- Time complexity O(total*n)

### Implementation

```jsx
// top down approach
function findTargetSumWays(nums: number[], target: number): number {
  // Map to store previously computed results
  // Key: `${index},${currentSum}`, Value: number of ways
  const memo = new Map<string, number>();

  function dfs(i: number, currSum: number): number {
    // Base case: reached end of array
    if (i === nums.length) {
      return currSum === target ? 1 : 0;
    }

    // Create key for current state
    const key = `${i},${currSum}`;

    // Check if we have already computed this state
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    // Calculate number of ways by adding and subtracting current number
    const ways = dfs(i + 1, currSum + nums[i]) + dfs(i + 1, currSum - nums[i]);

    // Store result in memo before returning
    memo.set(key, ways);
    return ways;
  }

  return dfs(0, 0);
}
```