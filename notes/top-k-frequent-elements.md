# Top K Frequent Elements

Topic: array, hash map, heap

Difficulty: Medium

Interview Frequency: High

### Question

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

### Ideas

Count frequencies with a hash map, then find the top k. There are multiple approaches:

1. **Sort by frequency** — O(n log n)
2. **Min-heap of size k** — O(n log k)
3. **Bucket sort** — O(n): create an array of buckets where index = frequency. Since no element can appear more than `n` times, the array has at most `n + 1` buckets. Walk from highest bucket down and collect k elements.

Bucket sort is optimal since it avoids any comparison-based sorting.

### Solution

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Bucket sort: index = frequency, value = list of numbers with that frequency
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  const result: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}
```
