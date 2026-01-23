# Min Stack

Topic: stack, design

Difficulty: Medium

Interview Frequency: High

### Question

Design a stack that supports push, pop, top, and retrieving the minimum element in **constant time**.

Implement the `MinStack` class:
- `push(val)` pushes the element val onto the stack.
- `pop()` removes the element on the top of the stack.
- `top()` gets the top element of the stack.
- `getMin()` retrieves the minimum element in the stack.

### Ideas

The challenge is tracking the minimum as elements are pushed and popped. A single `min` variable breaks when the minimum is popped — you'd need to know the "previous minimum."

Use a second stack that tracks the minimum at each state. Every time you push, also push the current minimum onto the min stack. Every time you pop, pop from both stacks. This way `minStack.top()` always gives the current minimum.

Optimization: only push to the min stack when the new value is `<=` the current minimum (saves space for stacks with mostly increasing values).

### Solution

```typescript
class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
```
