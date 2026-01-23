# Daily Temperatures

Topic: array, stack, monotonic stack

Difficulty: Medium

Interview Frequency: Medium

### Question

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day with a warmer temperature, keep `answer[i] == 0`.

### Ideas

This is a classic monotonic stack problem. The stack stores indices of temperatures we haven't found a warmer day for yet.

For each new temperature:
- While the stack is non-empty and the current temperature is greater than the temperature at the stack's top index → pop and record the distance.
- Push the current index onto the stack.

The stack maintains a **decreasing** temperature order (from bottom to top). When a warmer temperature arrives, it resolves all cooler pending temperatures on top of the stack.

Each index is pushed and popped at most once → O(n) time.

### Solution

```typescript
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer: number[] = new Array(n).fill(0);
  const stack: number[] = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
```
