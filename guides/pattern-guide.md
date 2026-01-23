# Pattern Guide

How patterns relate, when to use (and not use) them, and how they combine for harder problems.

---

## Pattern Families

### Pointer Techniques
```
Single Pointer (iteration)
├── Two Pointers (opposite ends) → Container With Most Water, 3Sum
├── Two Pointers (same direction) → Remove Duplicates, Move Zeroes
├── Fast & Slow Pointers → Cycle Detection, Find Middle
└── Sliding Window → Substring/Subarray problems
```

### Recursion Family
```
Simple Recursion
├── Divide & Conquer → Merge Sort, Quick Sort
├── DFS (tree/graph) → Path Sum, Number of Islands
├── Backtracking (DFS + undo) → Subsets, Permutations
└── Memoization → Top-down DP
```

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

### Optimization
```
Optimization Problems
├── Need ALL solutions → Backtracking
├── Need ONE optimal
│   ├── Local optimal = global optimal → Greedy
│   └── Overlapping subproblems → DP
│       ├── 1D (sequence) → Fibonacci, House Robber
│       ├── 2D (grid / two sequences) → Unique Paths, LCS
│       ├── Knapsack (choose/skip) → Target Sum, Coin Change
│       └── Interval (range [i,j]) → Burst Balloons
└── Monotonic answer space → Binary Search on Answer
```

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

## Pattern Combinations

Most hard problems combine 2-3 patterns. Recognize the combination by the keywords:

| Pattern 1 | + Pattern 2 | Recognition | Example |
|-----------|-------------|-------------|---------|
| Sliding Window | Hash Map | "substring" + "frequency/distinct" | LC #3, #76, #438 |
| DFS/BFS | Memoization | "count paths" + "overlapping states" | LC #139, #329 |
| DP | Binary Search | "DP is O(n²), optimize" | LC #300 (LIS) |
| Heap | Hash Map | "top K" + "frequency" | LC #347, #692 |
| Two Pointers | Sorting | "pairs/triplets" + "sum to target" | LC #15, #18 |
| Prefix Sum | Hash Map | "subarray sum equals K" | LC #560, #974 |
| Trie | Backtracking | "find words" + "grid" | LC #212 |
| BFS | Visited Set | "shortest transformation" | LC #127, #752 |
| Union Find | Sorting | "MST" or "merge by priority" | LC #1584 |
| Binary Search | Greedy | "minimize maximum" or "maximize minimum" | LC #410, #1011 |

---

## Top 20 Multi-Pattern Problems

1. LC #3 - Longest Substring Without Repeating (Sliding Window + Hash Map)
2. LC #15 - 3Sum (Sorting + Two Pointers)
3. LC #42 - Trapping Rain Water (Two Pointers or Monotonic Stack)
4. LC #76 - Minimum Window Substring (Sliding Window + Hash Map)
5. LC #84 - Largest Rectangle in Histogram (Monotonic Stack)
6. LC #127 - Word Ladder (BFS + Visited Set)
7. LC #139 - Word Break (DFS + DP)
8. LC #212 - Word Search II (Trie + Backtracking)
9. LC #239 - Sliding Window Maximum (Sliding Window + Monotonic Queue)
10. LC #295 - Find Median from Data Stream (Two Heaps)
11. LC #300 - Longest Increasing Subsequence (DP + Binary Search)
12. LC #312 - Burst Balloons (Interval DP)
13. LC #329 - Longest Increasing Path in Matrix (DFS + Memoization)
14. LC #347 - Top K Frequent Elements (Hash Map + Bucket Sort)
15. LC #410 - Split Array Largest Sum (Binary Search + Greedy)
16. LC #560 - Subarray Sum Equals K (Prefix Sum + Hash Map)
17. LC #787 - Cheapest Flights Within K Stops (Bellman Ford or Dijkstra + DP)
18. LC #1011 - Capacity to Ship Packages (Binary Search + Greedy)
19. LC #1143 - Longest Common Subsequence (Dual Sequence DP)
20. LC #1584 - Min Cost to Connect Points (Union Find + Sorting)
