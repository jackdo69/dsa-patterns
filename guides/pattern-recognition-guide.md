# Pattern Recognition Guide

Use this guide to quickly identify which algorithmic pattern(s) to apply to a new problem.

## How to Use This Guide

1. Read the problem statement carefully
2. Follow the decision tree below
3. Check the "Pattern Triggers" section for keyword hints
4. Verify with the "When NOT to use" section

---

## 🎯 Quick Decision Tree

### START: What type of input are you given?

```
INPUT TYPE
├─ Array/String
│  ├─ Need to find subarray/substring?
│  │  ├─ With specific length? → FIXED SLIDING WINDOW
│  │  ├─ Meeting some condition? → VARIABLE SLIDING WINDOW
│  │  └─ Maximum/minimum sum? → KADANE'S ALGORITHM or SLIDING WINDOW
│  │
│  ├─ Need two pointers from different positions?
│  │  ├─ From both ends? → TWO POINTERS (opposite ends)
│  │  ├─ Fast & slow? → FLOYD'S CYCLE DETECTION
│  │  └─ Start and end of window? → SLIDING WINDOW
│  │
│  ├─ Need range sums quickly? → PREFIX SUM
│  │
│  ├─ Array is sorted/rotated sorted?
│  │  ├─ Find target/min/max? → BINARY SEARCH
│  │  └─ Two sum on sorted? → TWO POINTERS
│  │
│  ├─ Need to find missing/duplicate in [1..n]? → CYCLIC SORT
│  │
│  └─ Need next greater/smaller element? → MONOTONIC STACK
│
├─ Linked List
│  ├─ Detect cycle? → FLOYD'S CYCLE DETECTION
│  ├─ Find middle/kth from end? → FAST & SLOW POINTERS
│  ├─ Reverse part/all? → IN-PLACE REVERSAL
│  └─ Merge multiple lists? → HEAP (Merge k) or RECURSION (Merge 2)
│
├─ Tree/Binary Tree
│  ├─ Need level-by-level? → BFS (Level Order)
│  ├─ Need to go deep first?
│  │  ├─ Process root first? → DFS PREORDER
│  │  ├─ Process in sorted order (BST)? → DFS INORDER
│  │  └─ Process children before root? → DFS POSTORDER
│  ├─ Find LCA? → LCA ALGORITHM
│  └─ Serialize/deserialize? → PREORDER + QUEUE/STACK
│
├─ Graph/Matrix
│  ├─ Count islands/connected components? → DFS or BFS or UNION FIND
│  ├─ Shortest path (unweighted)? → BFS
│  ├─ Shortest path (weighted)?
│  │  ├─ Single source, no negative? → DIJKSTRA
│  │  ├─ Single source, with negative? → BELLMAN FORD
│  │  └─ All pairs? → FLOYD WARSHALL
│  ├─ Has cycle?
│  │  ├─ Directed graph? → DFS + RECURSION STACK
│  │  └─ Undirected graph? → DFS + PARENT TRACKING or UNION FIND
│  ├─ Topological order? → TOPOLOGICAL SORT (Kahn's or DFS)
│  ├─ Minimum spanning tree? → KRUSKAL'S or PRIM'S
│  └─ Dynamic connectivity? → UNION FIND
│
├─ Need to maintain min/max dynamically?
│  ├─ Find kth largest/smallest? → MIN/MAX HEAP
│  ├─ Find median in stream? → TWO HEAPS
│  └─ Always need top k? → HEAP
│
├─ Need to generate/find all possibilities?
│  ├─ All subsets? → BACKTRACKING (Subset pattern)
│  ├─ All permutations? → BACKTRACKING (Permutation pattern)
│  ├─ All combinations summing to target? → BACKTRACKING (Combination Sum)
│  └─ All valid partitions? → BACKTRACKING (Partition pattern)
│
├─ Optimization problem (min/max)?
│  ├─ Has optimal substructure + overlapping subproblems? → DYNAMIC PROGRAMMING
│  │  ├─ Optimal for each step independently? → GREEDY (try first)
│  │  ├─ Depends on previous step? → 1D DP
│  │  ├─ Depends on two sequences? → 2D DP (Grid/Dual Sequence)
│  │  ├─ Choose or skip items? → KNAPSACK DP
│  │  └─ Substring/subarray problems? → DP + Sliding Window
│  │
│  └─ Local optimal leads to global? → GREEDY
│     ├─ Intervals? → MERGE INTERVALS
│     ├─ Scheduling? → GREEDY SCHEDULING
│     └─ Array rearrangement? → GREEDY + SORTING
│
└─ String specific
   ├─ Pattern matching? → RABIN KARP (or KMP)
   ├─ Palindrome?
   │  ├─ Longest palindrome substring? → EXPAND FROM CENTER
   │  └─ All palindrome partitions? → BACKTRACKING
   ├─ Valid expression? → STACK
   ├─ Word lookups/prefix matching? → TRIE
   └─ Parse/convert string? → STACK or ATOI pattern
```

---

## 🔍 Pattern Triggers (Keywords to Watch For)

### Array/String Patterns

**TWO POINTERS**
- Keywords: "sorted array", "pair", "triplet", "remove duplicates", "in-place"
- Examples: Two Sum II, Container With Most Water, Remove Duplicates

**SLIDING WINDOW**
- Keywords: "substring", "subarray", "consecutive", "contiguous", "window size k"
- Fixed: "size k", "exactly k"
- Variable: "at most", "at least", "longest", "shortest"
- Examples: Max Sum Subarray of Size K, Longest Substring Without Repeating

**PREFIX SUM**
- Keywords: "range sum", "subarray sum equals k", "sum in range [i, j]"
- Examples: Range Sum Query, Subarray Sum Equals K

**KADANE'S ALGORITHM**
- Keywords: "maximum subarray sum", "largest sum contiguous subarray"
- Examples: Maximum Subarray

**MONOTONIC STACK**
- Keywords: "next greater", "next smaller", "largest rectangle", "trapping"
- Examples: Next Greater Element, Largest Rectangle in Histogram

**CYCLIC SORT**
- Keywords: "array of size n", "range [1, n]", "find missing", "find duplicate"
- Examples: Find Missing Number, Find Duplicate Number

**BINARY SEARCH**
- Keywords: "sorted array", "rotated sorted", "find in log(n)", "find min/max"
- Examples: Search in Rotated Sorted Array, Find Peak Element

### Linked List Patterns

**FAST & SLOW POINTERS (Floyd's)**
- Keywords: "detect cycle", "find middle", "kth from end"
- Examples: Linked List Cycle, Middle of Linked List

**IN-PLACE REVERSAL**
- Keywords: "reverse", "reverse from position m to n"
- Examples: Reverse Linked List, Reverse Linked List II

### Tree Patterns

**BFS (Level Order)**
- Keywords: "level by level", "level order", "each level", "zigzag"
- Examples: Binary Tree Level Order Traversal, Zigzag Traversal

**DFS PREORDER**
- Keywords: "root first", "copy tree", "serialize"
- Examples: Same Tree, Path Sum

**DFS INORDER**
- Keywords: "in sorted order", "BST", "validate BST"
- Examples: Validate BST, Inorder Successor

**DFS POSTORDER**
- Keywords: "bottom-up", "height", "children first"
- Examples: Maximum Depth, Diameter of Tree

**LCA (Lowest Common Ancestor)**
- Keywords: "common ancestor", "path between nodes"
- Examples: LCA of Binary Tree

### Graph Patterns

**DFS**
- Keywords: "explore all paths", "connected components", "is path", "cycle"
- Examples: Number of Islands, Course Schedule (cycle detection)

**BFS**
- Keywords: "shortest path" (unweighted), "minimum steps", "level by level"
- Examples: Rotting Oranges, Shortest Path in Binary Matrix

**UNION FIND**
- Keywords: "connected components", "dynamic connectivity", "number of islands"
- Examples: Number of Provinces, Redundant Connection

**TOPOLOGICAL SORT**
- Keywords: "course schedule", "dependency order", "directed acyclic graph"
- Examples: Course Schedule II, Alien Dictionary

**DIJKSTRA**
- Keywords: "shortest path", "weighted graph", "minimum time/cost", "no negative"
- Examples: Network Delay Time, Cheapest Flights (K stops version)

**BELLMAN FORD**
- Keywords: "shortest path", "negative weights", "detect negative cycle"
- Examples: Cheapest Flights Within K Stops

**FLOYD WARSHALL**
- Keywords: "all pairs shortest path", "transitive closure"
- Examples: Find the City With Smallest Number of Neighbors

### Dynamic Programming Patterns

**1D DP (Basic)**
- Keywords: "sequence", "at position i", "fibonacci-like"
- Examples: Climbing Stairs, House Robber

**GRID DP**
- Keywords: "grid", "matrix", "paths from top-left to bottom-right"
- Examples: Unique Paths, Minimum Path Sum

**LIS (Dynamic Subproblems)**
- Keywords: "longest increasing", "longest valid"
- Examples: Longest Increasing Subsequence

**DUAL SEQUENCE (2 strings/arrays)**
- Keywords: "two strings", "common subsequence", "edit distance"
- Examples: Longest Common Subsequence, Edit Distance

**0/1 KNAPSACK**
- Keywords: "subset sum", "partition", "target sum", "choose or skip"
- Examples: Partition Equal Subset Sum, Target Sum

**UNBOUNDED KNAPSACK**
- Keywords: "coin change", "unlimited use", "combinations"
- Examples: Coin Change, Coin Change II

**INTERVAL DP**
- Keywords: "burst", "merge", "remove", "range [i, j]"
- Examples: Burst Balloons, Minimum Cost to Merge Stones

**WORD BREAK**
- Keywords: "word break", "sentence segmentation", "dictionary"
- Examples: Word Break I, Word Break II

**STATE MACHINE DP**
- Keywords: "buy and sell stock", "with states", "with cooldown/fee"
- Examples: Best Time to Buy and Sell Stock III/IV/with Cooldown

### Backtracking Patterns

**SUBSET**
- Keywords: "all subsets", "power set", "all combinations"
- Examples: Subsets, Subsets II

**PERMUTATION**
- Keywords: "all permutations", "all arrangements"
- Examples: Permutations, Permutations II

**COMBINATION SUM**
- Keywords: "find all combinations", "sum to target", "candidates"
- Examples: Combination Sum I/II/III

**PARTITION**
- Keywords: "partition", "palindrome partitioning", "split"
- Examples: Palindrome Partitioning, Word Break II

### Greedy Patterns

**INTERVAL/MERGE**
- Keywords: "merge intervals", "meeting rooms", "non-overlapping"
- Examples: Merge Intervals, Meeting Rooms II

**JUMP**
- Keywords: "jump game", "can reach", "minimum jumps"
- Examples: Jump Game I/II

**SCHEDULING**
- Keywords: "task scheduling", "cooling time", "maximize/minimize"
- Examples: Task Scheduler, Minimum Number of Arrows

**CANDY/DISTRIBUTION**
- Keywords: "distribute", "assign", "peaks and valleys"
- Examples: Candy, Gas Station

### Heap Patterns

**K-TH ELEMENT**
- Keywords: "kth largest", "kth smallest", "top k"
- Examples: Kth Largest Element, Top K Frequent Elements

**TWO HEAPS**
- Keywords: "median", "middle element", "stream"
- Examples: Find Median from Data Stream

**MERGE K**
- Keywords: "merge k", "k sorted"
- Examples: Merge k Sorted Lists

### Design Patterns

**LRU CACHE**
- Keywords: "LRU", "cache", "least recently used"
- Examples: LRU Cache

**TRIE**
- Keywords: "prefix", "word search", "dictionary", "autocomplete"
- Examples: Implement Trie, Word Search II

---

## 🚫 Common Pitfalls: When NOT to Use a Pattern

### Don't Use Two Pointers When:
- Array is unsorted (unless you sort first)
- You need to maintain original order
- Looking for all pairs (might need hash map instead)

### Don't Use Sliding Window When:
- Elements are not contiguous
- Need to consider all subarrays (might need prefix sum + hash map)
- Window size is not fixed and no clear expansion/contraction rule

### Don't Use Binary Search When:
- Array is not sorted and can't be sorted
- Search space is not monotonic
- No clear "binary" decision at each step

### Don't Use DFS When:
- Need shortest path (use BFS)
- Graph is very deep (stack overflow risk)
- Need level-by-level information

### Don't Use BFS When:
- Need to explore all paths (use DFS)
- Memory is limited and graph is wide
- Don't need shortest path

### Don't Use Backtracking When:
- Don't need all solutions (just one valid solution might be DP/Greedy)
- Problem has optimal substructure (use DP instead)
- Can make greedy choice (use Greedy)

### Don't Use DP When:
- No overlapping subproblems (just use recursion or iteration)
- Greedy works (DP is overkill)
- Need all solutions (use backtracking)

### Don't Use Greedy When:
- Local optimal doesn't lead to global optimal
- Need to explore multiple possibilities
- Problem explicitly asks for "all" solutions

### Don't Use Heap When:
- Only need to track one min/max (use variable)
- Array can be sorted once (sorting might be simpler)
- k is very close to n (sorting might be faster)

---

## 🎓 Multi-Pattern Problems

Some problems require combining patterns:

**Sliding Window + Hash Map**
- Example: Longest Substring Without Repeating Characters
- When: Need to track elements in window + their frequency

**DP + Binary Search**
- Example: Longest Increasing Subsequence (optimized)
- When: DP is O(n²) but can optimize with binary search

**DFS/BFS + Memoization (DP)**
- Example: Word Break, Longest Increasing Path in Matrix
- When: Graph/tree problem with overlapping subproblems

**Trie + Backtracking**
- Example: Word Search II
- When: Search multiple words in grid/string

**Binary Search + Greedy**
- Example: Split Array Largest Sum, Capacity to Ship Packages
- When: Minimize/maximize some value with binary search on answer

**Heap + Hash Map**
- Example: Top K Frequent Elements
- When: Need both counting and top-k selection

**Union Find + Sorting/Greedy**
- Example: Kruskal's MST, Account Merge
- When: Need to merge groups while processing in order

---

## 📋 Problem-Solving Checklist

Use this checklist for every problem:

### 1. Understand & Identify (5 min)
- [ ] What is the input? (array, tree, graph, etc.)
- [ ] What is the output? (single value, array, boolean, etc.)
- [ ] What are constraints? (size, range, time limit)
- [ ] Edge cases? (empty, single element, duplicates, negative)
- [ ] Examples working through manually

### 2. Pattern Recognition (3 min)
- [ ] Does problem match any pattern triggers?
- [ ] Is input sorted or can be sorted?
- [ ] Is this optimization (min/max)?
- [ ] Generate all vs find one optimal?
- [ ] Are there overlapping subproblems?

### 3. Brute Force First (5 min)
- [ ] What's the naive solution?
- [ ] What's the time complexity?
- [ ] Can we do better?

### 4. Optimize (10 min)
- [ ] Which pattern(s) apply?
- [ ] Can we reduce time complexity? (nested loops → hash map, O(n²) → O(n))
- [ ] Can we use additional space for speed?
- [ ] Trade-offs between time and space?

### 5. Implement (20 min)
- [ ] Write clean code with good variable names
- [ ] Handle edge cases
- [ ] Walk through example

### 6. Test (5 min)
- [ ] Test with provided examples
- [ ] Test edge cases
- [ ] Dry run through code

### 7. Analyze (2 min)
- [ ] Time complexity
- [ ] Space complexity
- [ ] Can it be improved further?

---

## 🎯 Interview Tips

### Communicate Your Thought Process:
1. "This looks like a [pattern] problem because [trigger words]"
2. "I'll use [data structure] because [reason]"
3. "The time complexity is O(...) because [explanation]"
4. "An edge case to consider is [case]"

### When Stuck:
1. Start with brute force - always acceptable
2. Think about similar problems you've solved
3. Ask clarifying questions
4. Think about time complexity - what's realistic?
5. Consider what data structure would help

### Red Flags You're on Wrong Track:
- Solution is getting too complicated
- Time complexity is worse than brute force
- Can't explain why approach works
- Not handling edge cases naturally

### Green Flags You're on Right Track:
- Time complexity improved
- Edge cases naturally handled
- Can explain each step clearly
- Similar to known pattern

---

## 📚 Pattern Learning Order

Follow study-plan.md, but generally:

**Foundation (Week 1-2):**
Array → Two Pointers → Sliding Window → Stack → Linked List → Binary Search

**Core Data Structures (Week 3):**
Trees → Graphs → Heaps

**Decision Making (Week 4):**
Backtracking → Greedy

**Optimization (Week 5-6):**
DP patterns (easier to harder)

**Throughout:**
Design patterns, advanced structures as needed

---

## Next Steps

1. **Practice pattern recognition:** When you see a new problem, spend 2 min identifying the pattern BEFORE coding
2. **Build intuition:** After solving 3-5 problems of same pattern, you'll recognize it instantly
3. **Track your progress:** Use practice-tracker.md to note which patterns you're comfortable with
4. **Review connections:** See concept-relationships.md to understand how patterns relate

Happy problem solving! 🚀
