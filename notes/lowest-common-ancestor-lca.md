# Lowest Common Ancestor (LCA)

Topic: dfs, tree

Difficulty: Medium

Interview Frequency: Medium

### Question

[LeetCode 236 - Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

*Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.*

### Ideas

This is **post-order** — we need info from both children before deciding if current node is the LCA.

**The logic:**
1. If current node is `null`, `p`, or `q` → return it (base case)
2. Recurse left and right to find `p` and `q`
3. If both sides return non-null → current node is the LCA (p and q are in different subtrees)
4. If only one side returns non-null → pass it up (both targets are in that subtree)

```
        3          Finding LCA of 5 and 1
       / \
      5   1        left returns 5, right returns 1
     / \           both non-null → 3 is the LCA
    6   2
```

```
        3          Finding LCA of 5 and 6
       / \
      5   1        left returns 5 (found 5, and 6 is below it)
     / \           right returns null
    6   2          only left non-null → pass 5 up (5 is the LCA)
```

**Why it works:** the LCA is the first node where `p` and `q` "split" into different subtrees. Below that point, they're in the same subtree. Above that point, one side would return null.

### Solution

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	  if (!root || root === p || root === q) return root;
    const isLeft = lowestCommonAncestor(root.left, p, q);
    const isRight = lowestCommonAncestor(root.right, p, q);
    if (isLeft && isRight) return root;
    return isLeft || isRight;
};
```