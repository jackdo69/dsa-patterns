# Unbounded Knapsack - Coin Change

Tags: dynamic programming

### Question

*You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin.*

### Ideas

The solution using bottom up approach with time complexity is O(n*c)

### Implementations

```jsx
function coinChange(coins: number[], amount: number): number {
  const n = coins.length;
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

```