# Lowest Common Ancestor (LCA)

Tags: dfs, tree

### Question

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

### Implementation

```jsx
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	  if (!root || root === p || root === q) return root;
    const isLeft = lowestCommonAncestor(root.left, p, q);
    const isRight = lowestCommonAncestor(root.right, p, q);
    if (isLeft && isRight) return root;
    return isLeft || isRight;
};
```