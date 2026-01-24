# Monotonic Stack - Remove k digits

Topic: greedy, stack

Difficulty: Medium

Interview Frequency: Medium

### Question

*Given string num representing a non-negative integer `num`, and an integer `k`, return the smallest possible integer after removing `k` digits from `num`.*

*Example 1:*

```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

### Ideas

**Why greedy works here:** in a number like `1432219`, the leftmost digits have the most weight (1 thousand vs 1 unit). So to minimize the result, we want to make the leftmost digits as small as possible.

**When should we remove a digit?** When we see a "drop" — a digit followed by a smaller one. In `14...`, the `4` is followed by `3`. Removing `4` shifts everything left, giving `13...` which is smaller than `14...`. We always prefer to remove the earlier, larger digit because it has more positional weight.

**The algorithm:** use a stack to build the result left to right. Before pushing a new digit, check: is the top of the stack larger than the current digit? If yes, pop it (that's a removal). This ensures we always catch the first "drop" and remove the larger digit.

Step by step with `num = "1432219"`, `k = 3`:

```
digit '1': stack empty, push.              stack: [1]         k=3
digit '4': 4 > 1 → just push.             stack: [1,4]       k=3
digit '3': 3 < 4 → pop 4 (remove).        stack: [1]         k=2
           3 > 1 → stop. Push 3.          stack: [1,3]       k=2
digit '2': 2 < 3 → pop 3 (remove).        stack: [1]         k=1
           2 > 1 → stop. Push 2.          stack: [1,2]       k=1
digit '2': 2 = 2 → just push.             stack: [1,2,2]     k=1
digit '1': 1 < 2 → pop 2 (remove).        stack: [1,2]       k=0
           k=0, stop popping. Push 1.      stack: [1,2,1]     k=0
digit '9': k=0, just push.                stack: [1,2,1,9]   k=0
```

Result: `"1219"`

**Two edge cases:**
1. **k still > 0 after scanning** (e.g. `"1234"`, k=2 — digits are already non-decreasing, no "drops" found). The largest digits are at the right end, so remove from the right.
2. **Leading zeros** (e.g. `"10200"`, k=1 → remove `1` → `"0200"`). Skip pushing `0` when the stack is empty to avoid leading zeros.

### Solution

```typescript
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