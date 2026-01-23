# Longest Consecutive Sequence

Topic: array, hash map

Difficulty: Medium

Interview Frequency: Medium

### Question

*Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.*

*You must write an algorithm that runs in O(n) time.*
### Ideas

Put all numbers in a Set for O(1) lookup. For each number, only start counting a sequence if `num - 1` is NOT in the set (meaning this number is the start of a sequence). Then count upward (`num + 1`, `num + 2`, ...) while the set contains the next number.

The key insight is the "start of sequence" check: without it, you'd redundantly count from every element. With it, each element is visited at most twice (once in the outer loop, once in an inner expansion), giving O(n) total.

### Solution

```typescript
function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of numSet) {
    // Only start counting from the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longest = Math.max(longest, currentStreak);
    }
  }

  return longest;
}
```
