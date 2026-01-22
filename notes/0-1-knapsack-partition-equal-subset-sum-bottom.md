# *0/1 Knapsack - Partition Equal Subset Sum - Bottom up approach

### Question

*Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise. e.g* 

```
Input: nums = [1,5,11,5]
Output: true
```

### Ideas

- Note: When we iterate the sum, we need to go backward, which to stop using a number twice, because we process larger sum first, so when we update `dp[i]`  we only look at states that haven’t used the current number

### Implementations

```jsx
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);

  // If sum is odd, we can't partition equally
  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  // dp[i] represents if we can get sum i from the array
  const dp = new Array(target + 1).fill(false);
  dp[0] = true; // Empty subset sums to 0

  for (const num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }

  return dp[target];
}
```