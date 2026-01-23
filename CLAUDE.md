# DSA Patterns Codebase

A pattern-based Data Structures & Algorithms study system for technical interviews. Contains **92 algorithm patterns** across 15 categories, all implemented in **TypeScript**.

## Structure

```
/
├── guides/                       # Study guides (start here)
│   ├── quick-reference.md            # Cheat sheet: triggers, all patterns, templates
│   └── pattern-guide.md              # Pattern families, combinations, when NOT to use
├── notes/                        # 92 pattern markdown files (main content)
├── docsify/                      # Docsify configuration files
│   ├── docsify-config.js             # Site config with tag colors
│   ├── custom.css                    # Custom styling
│   └── favicon.svg                   # Site favicon
├── _sidebar.md                   # Navigation hierarchy
└── index.html                    # Docsify entry point
```

## Pattern Categories

1. Arrays & Strings (two sum, two pointer, sliding window, prefix sum, Kadane's)
2. Hash Maps (group anagrams, top k frequent, longest consecutive)
3. Arrays Advanced (matrix operations, cyclic sort)
4. Linked Lists (fast/slow, reversal, merge)
5. Stacks & Queues (min stack, monotonic stack/queue, expression evaluation)
6. Binary Search (rotated array, k closest)
7. Trees - DFS (preorder, inorder, postorder, path sum, diameter, LCA, serialize)
8. Trees & Graphs - BFS (level order, right side view, islands, cycle detection)
9. Graph Algorithms (clone graph, word ladder, topological sort, union find, Dijkstra, Bellman-Ford, Floyd-Warshall, MST)
10. Heaps (merge k lists, median stream, scheduling)
11. Backtracking (subsets, permutations, combinations)
12. Greedy (intervals, stock problems)
13. Dynamic Programming (knapsack variants, LCS, LIS, grid DP, interval DP)
14. Sorting (merge sort, sort list, quick sort)
15. Advanced Data Structures (Trie, LRU Cache, Fenwick Tree)

## File Conventions

**Pattern files** in `notes/`:
- Naming: `technique-name-problem.md` (e.g., `dfs-number-of-islands.md`, `0-1-knapsack-target-sum.md`)
- All lowercase with hyphens

**Markdown structure**:
```markdown
# Pattern Title

Tags: array, two-pointer, medium

### Question
[Problem statement]

### Ideas
[Approach explanation]

### Implementation
```jsx
// TypeScript solution
```
```

## Running Locally

```bash
npm install
npm start  # Serves on http://localhost:3000
```

Uses Docsify for documentation site with search and tag filtering.

## Key Files for Quick Reference

- `guides/quick-reference.md` - All 92 patterns with time/space complexity, triggers, templates
- `guides/pattern-guide.md` - Pattern families, combinations, when NOT to use
- `_sidebar.md` - Full navigation structure
- `docsify/docsify-config.js` - Tag color definitions (25 tags)

## When Adding New Patterns

1. Create markdown file in `notes/` following naming convention
2. Use the standard template (Question → Ideas → Implementation)
3. Add entry to `_sidebar.md` under appropriate category
4. Include Tags line with relevant keywords
5. Add time/space complexity in the solution
