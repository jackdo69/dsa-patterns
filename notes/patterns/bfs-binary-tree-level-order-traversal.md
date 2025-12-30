# BFS - Binary Tree Level Order Traversal

Tags: bfs, tree

### Question

*Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).*

### Implementation

```jsx
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const stack = [root]; // for storing child nodes
  const result = [];

  while (stack.length) {
    const n = stack.length;
    const level = [];
    for (let i = 0; i < n; i++) {
      const node = stack.shift()!;
      level.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    result.push(level);
  }

  return result;
}
```