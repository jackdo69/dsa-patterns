# Best Time to Buy and Sell Stock II

Tags: dynamic programming, greedy

### Question

*You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.*

*On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can sell and buy the stock multiple times on the **same day**, ensuring you never hold more than one share of the stock.*

*Find and return the **maximum** profit you can achieve.*

### Ideas

- If you can see the future stock price, you want to buy right before the price increase and sell right before the price decrease
- In other words, we want to capture all the upward movement of the price
- We only care about positive differences between consecutive days.

### Implementation

```jsx
function maxProfit(prices: number[]): number {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) res += prices[i] - prices[i - 1];
  }
  return res;
}
```