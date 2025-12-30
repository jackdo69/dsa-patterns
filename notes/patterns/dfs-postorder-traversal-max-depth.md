# DFS Postorder Traversal - Max depth

Tags: dfs, tree

### Question

*Given the `root` of a binary tree, return its maximum depth.*

*A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.*

### Implementation

```jsx
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    const maxLeft = maxDepth(root.left);
    const maxRight = maxDepth(root.right);
    return Math.max(maxLeft, maxRight) + 1
};
```