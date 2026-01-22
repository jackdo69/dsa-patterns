# In-place Rotation

Tags: array

### Question

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

### Implementation

```jsx
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    const reverse = (start: number, end: number) => {
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    };
    //reverse the whole array
    reverse(0, n - 1);
    //reverse the first half
    reverse(0, k - 1);
    //revert the second half
    reverse(k, n - 1);

};
```