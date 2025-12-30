# Kadane’s algorithm - Sub array max sum

Tags: array

### Ideas

- **Use cases**: returns the max sum of a contiguous subarray.
- The algorithm states that the `maxSum` at position `n` of array `arr` will either be `arr[n]` OR `maxSum(n-1) + arr[n]`
- **Time Complexity:** O(n)

### Implementations

```jsx
function maxSubArray(nums: number[]): number {
    let currSum = 0;
    let maxSum = -Infinity;

    for (const num of nums) {
      // either the current number or the sum of
      // curent number and maxSum until previous number
      currSum = Math.max(num, currSum + num); 
      maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};
```