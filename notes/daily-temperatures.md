# Daily Temperatures

Topic: array, stack, monotonic stack

Difficulty: Medium

Interview Frequency: Medium

### Question

[LeetCode 739 - Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)

*Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day with a warmer temperature, keep `answer[i] == 0`.*
### Ideas

**The brute force** is: for each day, scan forward to find the next warmer day. That's O(n²).

**The insight:** when you encounter a warmer day, it answers the question for ALL recent cooler days at once. You just need to remember which days are still "waiting" for a warmer day — a stack does exactly this.

The stack holds **indices of days still waiting for a warmer temperature**, in decreasing temperature order (warmest at bottom, coolest on top).

Step by step with `temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`:

```
i=0 (73): stack empty, push 0.             stack: [0(73)]
i=1 (74): 74 > 73 → pop 0, answer[0] = 1-0 = 1. Push 1.
                                            stack: [1(74)]
i=2 (75): 75 > 74 → pop 1, answer[1] = 2-1 = 1. Push 2.
                                            stack: [2(75)]
i=3 (71): 71 < 75 → just push 3.           stack: [2(75), 3(71)]
i=4 (69): 69 < 71 → just push 4.           stack: [2(75), 3(71), 4(69)]
i=5 (72): 72 > 69 → pop 4, answer[4] = 5-4 = 1.
          72 > 71 → pop 3, answer[3] = 5-3 = 2.
          72 < 75 → stop. Push 5.           stack: [2(75), 5(72)]
i=6 (76): 76 > 72 → pop 5, answer[5] = 6-5 = 1.
          76 > 75 → pop 2, answer[2] = 6-2 = 4.
          stack empty → stop. Push 6.       stack: [6(76)]
i=7 (73): 73 < 76 → just push 7.           stack: [6(76), 7(73)]
```

Days left in the stack (indices 6, 7) never found a warmer day → `answer` stays 0.

Result: `[1, 1, 4, 2, 1, 1, 0, 0]`

**Why the stack stays in decreasing order:** you only push when the current temp is cooler than the top (otherwise you pop first). So bottom-to-top is always warmest-to-coolest. When a hot day arrives, it "resolves" all the cooler days sitting on top.

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
