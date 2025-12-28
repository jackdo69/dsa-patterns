# DFS In-order Traversal - Validate Binary Search Tree

Tags: dfs, tree

### Question

*Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).*

*A **valid BST** is defined as follows:*

- *The left  of a node contains only nodes with keys **strictly less than** the node's key.*
    
    *subtree*
    
- *The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.*
- *Both the left and right subtrees must also be binary search trees.*

### Implementation

```jsx
function isValidBST(root: TreeNode | null): boolean {
    function helper(node: TreeNode | null, min: number | null, max: number | null): boolean {
      if (!node) return true;
      if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
      return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, null, null);
  }
```