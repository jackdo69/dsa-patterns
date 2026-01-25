# Tree Traversal Wiki

Topic: tree, dfs

Difficulty: Easy

Interview Frequency: High

### When to Use What?

Ask yourself: **"When do I have enough info to process this node?"**

| | Process when? | Memory trick |
|---|---|---|
| **Pre-order** | Immediately (don't need children's info) | "I'm the **boss**, I go first" |
| **In-order** | After left, before right | Only for **BST** (left < me < right = sorted) |
| **Post-order** | After both children done | "I **depend** on my children's answers" |

### Quick Rule

- Need to **pass info down** (parent → child)? → **Pre-order**
- Need to **collect info up** (children → parent)? → **Post-order**
- Need **sorted order** from BST? → **In-order**

### Examples

| Problem | Traversal | Why |
|---|---|---|
| Copy/clone a tree | Pre-order | Create parent first, then attach children |
| [Serialize a tree](notes/serialize-and-deserialize-binary-tree.md) | Pre-order | Record node before descending |
| [Validate BST](notes/dfs-in-order-traversal-validate-binary-search-tr.md) | Pre-order | Pass down valid range as you descend |
| Kth smallest in BST | In-order | Count nodes in sorted order |
| [Calculate height](notes/dfs-postorder-traversal-max-depth.md) | Post-order | Need children's heights first: `1 + max(left, right)` |
| [Diameter of tree](notes/diameter-of-binary-tree.md) | Post-order | Need depths from both subtrees |
| Delete a tree | Post-order | Delete children before parent |
| Evaluate expression tree | Post-order | Need operands before applying operator |
| [Lowest Common Ancestor](notes/lowest-common-ancestor-lca.md) | Post-order | Need to check both subtrees before deciding if current node is LCA |

### Visual Example

```
       1
      / \
     2   3
    / \
   4   5

Pre-order:  1 → 2 → 4 → 5 → 3  (root first, then left subtree, then right)
In-order:   4 → 2 → 5 → 1 → 3  (left subtree, then root, then right)
Post-order: 4 → 5 → 2 → 3 → 1  (left subtree, then right subtree, then root)
```
