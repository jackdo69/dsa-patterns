# Cyclic Sort - Find the Duplicate Number

Tags: array, cyclic sort, two pointer

### Question

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and using only constant extra space.

### Implementation

```jsx
  function findDuplicate(nums: number[]): number {
    // Floyd's algorithm
    // Part 1: place 2 pointers 1 slow, 1 fast and we find the meeting point
    let fast = nums[0];
    let slow = nums[0];
    // find their meeting point
    while (true) {
      slow = nums[slow]; // slow pointer move 1 step at a time
      fast = nums[nums[fast]]; // fast pointer move 2 steps at a time
      if (slow === fast) break;
    }

    // part 2: Place a new pointer at the start, move the same speed with the slow pointer at last meeting point
    let ptr1 = nums[0];
    let ptr2 = slow; // or fast as they both same pos
    while (ptr1 !== ptr2) {
      ptr1 = nums[ptr1];
      ptr2 = nums[ptr2];
    }
    // where this 2 pointers meet is the beginning of the cycle
    return ptr1;
  }
```