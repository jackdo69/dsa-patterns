# Best Time to Buy and Sell Stock

Tags: dynamic programming, greedy

### Question

*You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.*

*You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.*

*Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.*

### Ideas

- For any selling day, the best buying day would always be the day with minimum price before it, if we want to sell on day `i`, we want to buy on the day with `min(0:i-1)`
- So we can solve the problem in single pass
    - As we iterate through each day, we consider it as potential selling day
    - For each potential selling day, we calculate the profit using min price so far as buying price
    - Then we keep track of max profit we can achieve

### Implementation

```jsx
function maxProfit(prices: number[]): number {
    let maxProfitSoFar: number = 0;
    let minPrice: number = prices[0];
    for (const currentPrice of prices) {
        // Update maximum profit if selling at current price yields better profit
        maxProfitSoFar = Math.max(maxProfitSoFar, currentPrice - minPrice);
      
        // Update minimum price if current price is lower (better buying opportunity)
        minPrice = Math.min(minPrice, currentPrice);
    }
  
    return maxProfitSoFar;
}
```