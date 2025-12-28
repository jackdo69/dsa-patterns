# DFS Preorder Traversal - Same Tree

Tags: dfs, tree

### Question

*Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.*

*Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.*

### Implementation

```jsx
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    if (p.val !== q.val) return false 
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```