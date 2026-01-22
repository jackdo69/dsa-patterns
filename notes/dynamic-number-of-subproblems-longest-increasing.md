# Dynamic Number of Subproblems - Longest Increasing Subsequences (LIS)

Tags: dynamic programming

### Question

*Given an integer array `nums`, return the length of the longest **strictly increasing subsequence**.*

### Ideas

- We use bottom up approach, if at each position, we start a new subsequence, then the `dp[i]`  will be 1. From `i` we loop back, if there is any number `nums[j]` less than `nums[i]`  then we can extend the subsequence
- Time complexity: O(n^2)

### Implementations

```jsx
function lengthOfLIS(nums: number[]): number {
    const dp: number[] = Array(nums.length).fill(1); // start from this position

    for (let i = 1; i < nums.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (nums[i] > nums[j]) { // we can extends the subsequence
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    return Math.max(...dp)
};
```