# Pattern Guide

How patterns relate, when to use (and not use) them, and how they combine for harder problems.

---

## Pattern Families

### Pointer Techniques
```
Single Pointer (iteration)
├── Two Pointers (opposite ends) → Container With Most Water, 3Sum
├── Two Pointers (same direction) → Move Zeroes
├── Fast & Slow Pointers → Cycle Detection
└── Sliding Window → Longest Substring Without Repeating
```
[Container With Most Water](../notes/container-with-most-water.md) | [3Sum](../notes/3sum.md) | [Move Zeroes](../notes/move-zeroes.md) | [Cycle Detection](../notes/fast-slow-floyd-s-algorithm-cycle-detection.md) | [Longest Substring Without Repeating](../notes/variable-size-longest-substring-without-repeatin.md)

### Recursion Family
```
Simple Recursion
├── Divide & Conquer → Merge Sort, Quick Sort
├── DFS (tree/graph) → Path Sum, Number of Islands
├── Backtracking (DFS + undo) → Subsets, Permutations
└── Memoization → Top-down DP
```
[Merge Sort](../notes/merge-sort.md) | [Quick Sort](../notes/quick-sort.md) | [Path Sum](../notes/path-sum.md) | [Number of Islands](../notes/dfs-number-of-islands.md) | [Subsets](../notes/subset.md) | [Permutations](../notes/permutations-unique.md)

### Graph Traversal
```
Graph Problems
├── Connectivity → DFS, BFS, Union Find
├── Shortest Path
│   ├── Unweighted → BFS
│   ├── Weighted (no negative) → Dijkstra
│   ├── Weighted (with negative) → Bellman Ford
│   └── All pairs → Floyd Warshall
├── Ordering → Topological Sort
└── Minimum Spanning Tree → Kruskal's
```
[Dijkstra](../notes/shortest-path-dijkstra-algorithm-network-delay.md) | [Bellman Ford](../notes/shortest-path-bellman-ford-algorithm-cheapest.md) | [Floyd Warshall](../notes/shortest-path-floy-warshall-algorithm-minimum.md) | [Topological Sort](../notes/topological-sort-kahn-algorithm-course-schedul.md) | [Kruskal's](../notes/minimum-spanning-tree-kruskal-algorithm.md) | [Union Find](../notes/union-find-disjoint-set-number-of-operations-to.md)

### Optimization
```
Optimization Problems
├── Need ALL solutions → Backtracking
├── Need ONE optimal
│   ├── Local optimal = global optimal → Greedy
│   └── Overlapping subproblems → DP
│       ├── 1D (sequence) → Fibonacci
│       ├── 2D (grid / two sequences) → Unique Paths, LCS
│       ├── Knapsack (choose/skip) → Target Sum, Coin Change
│       └── Interval (range [i,j]) → Burst Balloons
└── Monotonic answer space → Binary Search on Answer
```
[Fibonacci](../notes/basic-fibonacci-1d-array.md) | [Unique Paths](../notes/grid-unique-paths.md) | [LCS](../notes/dual-sequence-longest-common-subsequence-lcs.md) | [Target Sum](../notes/0-1-knapsack-target-sum-top-down-approach.md) | [Coin Change](../notes/unbounded-knapsack-coin-change.md) | [Burst Balloons](../notes/interval-dp-busting-balloons.md) | [DP Wiki](../notes/dynamic-programming-wiki.md)

---

## Key Relationships

| From | To | Insight |
|------|-----|---------|
| Two Pointers | Sliding Window | Window is specialized two-pointer with grow/shrink |
| DFS | Backtracking | Backtracking = DFS + make choice + undo choice |
| Recursion | Memoization → DP | Cache overlapping subproblems, then flip to bottom-up |
| Greedy | DP | Greedy works when local optimal = global optimal; DP when it doesn't |
| Stack | Monotonic Stack | Maintain ordering invariant for next greater/smaller |
| BFS | Dijkstra | Dijkstra = BFS with priority queue for weighted graphs |
| DFS/BFS | Union Find | Union Find is better for dynamic/repeated connectivity queries |

---

## When NOT to Use a Pattern

| Pattern | Don't use when... |
|---------|-------------------|
| Two Pointers | Array is unsorted and order matters |
| Sliding Window | Elements are not contiguous, or no clear expand/contract rule |
| Binary Search | Search space is not monotonic |
| DFS | Need shortest path (use BFS) |
| BFS | Need all paths or memory is limited on wide graphs |
| Backtracking | Don't need all solutions (DP/Greedy is faster) |
| DP | No overlapping subproblems, or greedy works |
| Greedy | Local optimal doesn't guarantee global optimal |
| Heap | Only tracking one min/max (use a variable) |

---

