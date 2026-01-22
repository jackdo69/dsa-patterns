# Min Heap

Tags: heap

### Ideas

- A min heap is a data structure, similar to binary tree, with each node has 2 children, but the child is always the greater than the parent.
- Min heap nodes values can be represents in an array `queue`
- A node at index `n` will have its left child at index `2 * n + 1` and right child at `2 * n + 2`
- **Note:** Only the nodes of the path from root to leaf (vertical) is sorted, not the nodes in the same level (very different from binary search tree), this also explains for the time complexity characteristic of min heap
- **Time complexity:**
    - insert/delete: O(logn) → the height of the tree is logn

### Implementations

```jsx
class _MinHeap {
  private items: number[];
  constructor() {
    this.items = [];
  }
  swap(i: number, j: number) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
  size(): number {
    return this.items.length;
  }
  push(num: number): void {
    this.items.push(num);
    this.bubbleUp();
  }
  pop(): number | null {
    const n = this.size();
    if (n === 0) return null;
    this.swap(0, n - 1);
    const num = this.items.pop()!;
    this.bubbleDown();
    return num;
  }

  peak(): number {
    return this.items[0];
  }

  private bubbleDown(): void {
    let index = 0;
    const n = this.size();
    while (index < n - 1) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < n && this.items[smallest] > this.items[left]) smallest = left;
      if (right < n && this.items[smallest] > this.items[right]) smallest = right;
      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
  private bubbleUp(): void {
    let index = this.size() - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.items[parent] <= this.items[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }
}
```