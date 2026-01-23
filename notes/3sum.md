# 3Sum

Tags: array, two-pointer, sorting, medium

### Interview Frequency

High

### Question

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Ideas

Sort the array first. Then for each element `nums[i]`, use two pointers (`left` and `right`) on the remaining subarray to find pairs that sum to `-nums[i]`. This reduces the problem to a series of two-sum problems on a sorted array.

To avoid duplicates:
- Skip `nums[i]` if it equals the previous element.
- After finding a valid triplet, skip duplicate values for both `left` and `right`.

Sorting costs O(n log n), and the two-pointer scan for each element is O(n), giving O(n²) total — optimal for this problem since there can be O(n²) triplets.

### Solution

```typescript
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // Early termination: smallest value > 0 means no more triplets
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```
