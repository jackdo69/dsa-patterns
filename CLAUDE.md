# DSA Patterns Codebase

A pattern-based Data Structures & Algorithms study system for technical interviews. Contains **75 algorithm patterns** across 13 categories, all implemented in **TypeScript**.

## Structure

```
/
├── guides/                       # Study guides (start here)
│   ├── pattern-recognition-guide.md  # Decision tree for choosing patterns
│   ├── concept-relationships.md      # How patterns interconnect
│   ├── quick-reference.md            # One-page cheat sheet with complexities
│   └── pattern-combinations.md       # Complex problem strategies
├── notes/                        # 75 pattern markdown files (main content)
├── docsify/                      # Docsify configuration files
│   ├── docsify-config.js             # Site config with tag colors
│   ├── custom.css                    # Custom styling
│   └── favicon.svg                   # Site favicon
├── _sidebar.md                   # Navigation hierarchy
└── index.html                    # Docsify entry point
```

## Pattern Categories

1. Arrays & Strings (two pointer, sliding window, prefix sum, Kadane's)
2. Arrays Advanced (matrix operations, cyclic sort)
3. Linked Lists (fast/slow, reversal, merge)
4. Stacks & Queues (monotonic stack/queue, expression evaluation)
5. Binary Search (rotated array, k closest)
6. Trees - DFS (preorder, inorder, postorder, LCA, serialize)
7. Trees & Graphs - BFS (level order, islands, cycle detection)
8. Graph Algorithms (topological sort, union find, Dijkstra, Bellman-Ford, Floyd-Warshall, MST)
9. Heaps (merge k lists, median stream, scheduling)
10. Backtracking (subsets, permutations, combinations)
11. Greedy (intervals, stock problems)
12. Dynamic Programming (knapsack variants, LCS, LIS, grid DP, interval DP)
13. Advanced Data Structures (Trie, LRU Cache, Fenwick Tree)

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

- `guides/quick-reference.md` - All 75 patterns with time/space complexity
- `guides/pattern-recognition-guide.md` - Decision tree: "What pattern should I use?"
- `_sidebar.md` - Full navigation structure
- `docsify/docsify-config.js` - Tag color definitions (25 tags)

## When Adding New Patterns

1. Create markdown file in `notes/` following naming convention
2. Use the standard template (Question → Ideas → Implementation)
3. Add entry to `_sidebar.md` under appropriate category
4. Include Tags line with relevant keywords
5. Add time/space complexity in the solution
