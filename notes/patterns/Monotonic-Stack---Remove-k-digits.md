# Monotonic Stack - Remove k digits

Tags: greedy, stack

### Question

Given string num representing a non-negative integer `num`, and an integer `k`, return *the smallest possible integer after removing* `k` *digits from* `num`.

**Example 1:**

```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

### Ideas

- In order to get smallest number, smallest digits must be on the left
- Use the greedy approach to scan from left to right

### Implementation

```jsx
function removeKdigits(num: string, k: number): string {
  if (k >= num.length) return "0";
  const stack: string[] = [];

  // create a monotonic stack
  for (const c of num) {
    while (stack.length && stack[stack.length - 1]! > c && k > 0) {
      stack.pop();
      k--;
    }
    // leading zeros
    if (stack.length === 0 && c === "0") continue;
    stack.push(c);
  }
  // if k still greater than 0, remove from the right
  if (k > 0) {
    stack.splice(stack.length - k, k);
  }
  return stack.length === 0 ? "0" : stack.join("");
}
```