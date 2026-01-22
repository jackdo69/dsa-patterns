# Prefix sum

Tags: array, prefix sum

### Ideas

if exist a sub array from position `i` to `j` that has a `sum` of `k` then

```jsx
prefixSum(j) - prefixSum(i-1) = k
```

### Implementation

```jsx
function prefixSum(arr: number[]): number[] {
  const prefixSums: number[] = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    prefixSums.push(currentSum);
  }

  return prefixSums;
}
```