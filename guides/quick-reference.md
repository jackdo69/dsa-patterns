# Quick Reference Cheat Sheet

**Print this page and review before interviews!**

---

## 🎯 Pattern Recognition (Quick Triggers)

| If Problem Has... | Use Pattern | Time | Space |
|-------------------|-------------|------|-------|
| "subarray/substring", "contiguous" | **Sliding Window** | O(n) | O(1) or O(k) |
| "two sum", "complement", "frequency" | **Hash Map** | O(n) | O(n) |
| "sorted array", "two sum", "pair" | **Two Pointers** | O(n) | O(1) |
| "range sum", "subarray sum" | **Prefix Sum** | O(n) | O(n) |
| "max/min subarray sum" | **Kadane's** | O(n) | O(1) |
| "next greater/smaller" | **Monotonic Stack** | O(n) | O(n) |
| "find in sorted", "log(n)" | **Binary Search** | O(log n) | O(1) |
| "cycle in linked list" | **Floyd's (Fast/Slow)** | O(n) | O(1) |
| "reverse linked list" | **In-Place Reversal** | O(n) | O(1) |
| "level by level", "shortest path" (unweighted) | **BFS** | O(V+E) | O(V) |
| "explore all paths", "connected components" | **DFS** | O(V+E) | O(V) |
| "shortest path" (weighted, no negative) | **Dijkstra** | O(E log V) | O(V) |
| "shortest path" (with negative weights) | **Bellman Ford** | O(VE) | O(V) |
| "all pairs shortest path" | **Floyd Warshall** | O(V³) | O(V²) |
| "dependency order", "prerequisites" | **Topological Sort** | O(V+E) | O(V) |
| "dynamic connectivity" | **Union Find** | O(α(n)) | O(n) |
| "minimum spanning tree" | **Kruskal's/Prim's** | O(E log E) | O(V) |
| "all subsets", "all permutations" | **Backtracking** | O(2ⁿ) or O(n!) | O(n) |
| "kth largest/smallest" | **Heap** | O(n log k) | O(k) |
| "median in stream" | **Two Heaps** | O(log n) | O(n) |
| "merge k sorted" | **Heap** | O(n log k) | O(k) |
| "optimize", "min/max", has subproblems | **Dynamic Programming** | varies | varies |
| "intervals", "merge", "schedule" | **Greedy (Intervals)** | O(n log n) | O(1) |
| "prefix matching", "word search" | **Trie** | O(L) | O(N*L) |

---

## 📚 All 92 Patterns (Categorized)

### ARRAYS (10)
1. **Two Sum (Hash Map)** - O(n), O(n) - Complement lookup
2. **3Sum (Two Pointers)** - O(n²), O(1) - Triplet finding
3. **Trapping Rain Water** - O(n), O(1) - Two pointer bottleneck
4. **Prefix Sum** - O(n), O(n) - Range sum queries
5. **Kadane's** - O(n), O(1) - Max subarray sum
6. **Product Except Self** - O(n), O(1) - Array multiplication
7. **Two Pointers** - O(n), O(1) - Sorted array pairs
8. **Cyclic Sort** - O(n), O(1) - Find missing/duplicate in [1..n]
9. **In-place Rotation** - O(n), O(1) - Rotate array
10. **Move Zeroes** - O(n), O(1) - In-place rearrangement

### HASH MAPS (3)
11. **Group Anagrams** - O(n·k log k), O(n·k) - Sort-based grouping
12. **Top K Frequent** - O(n), O(n) - Bucket sort frequency
13. **Longest Consecutive Sequence** - O(n), O(n) - Set-based streak

### SLIDING WINDOW (3)
14. **Fixed Size** - O(n), O(k) - Window size k
15. **Variable Size** - O(n), O(k) - Longest/shortest substring
16. **Monotonic Queue/Stack** - O(n), O(k) - Sliding window max/min

### STRINGS (5)
17. **String Reversal** - O(n), O(1) - In-place reverse
18. **ATOI** - O(n), O(1) - String to integer
19. **Rabin Karp** - O(n+m), O(1) - Pattern matching
20. **Expanding from Center** - O(n²), O(1) - Palindromes
21. **Trie** - O(L), O(N*L) - Prefix tree

### STACK (5)
22. **Valid Parentheses** - O(n), O(n) - Matching pairs
23. **Min Stack** - O(1) all ops, O(n) - Stack with min tracking
24. **Daily Temperatures** - O(n), O(n) - Monotonic stack application
25. **Monotonic Stack** - O(n), O(n) - Next greater/smaller
26. **Expression Evaluation** - O(n), O(n) - Calculator

### LINKED LIST (6)
27. **Fast & Slow (Floyd's)** - O(n), O(1) - Cycle detection
28. **In-Place Reversal** - O(n), O(1) - Reverse list
29. **Merge Two Sorted** - O(n+m), O(1) - Merge lists
30. **Remove Nth from End** - O(n), O(1) - Remove node
31. **Intersection Detection** - O(n+m), O(1) - Find intersection
32. **Rotate List** - O(n), O(1) - Reorder list

### BINARY SEARCH (4)
33. **Monotonic Functions** - O(log n), O(1) - Classic binary search
34. **Rotated Sorted Array** - O(log n), O(1) - Find min/max
35. **K Closest Elements** - O(log n + k), O(1) - Binary search + expand
36. **Median of 2 Sorted** - O(log(min(m,n))), O(1) - Binary search on smaller

### TREES (11)
37. **BFS (Level Order)** - O(n), O(n) - Level by level
38. **Binary Tree Right Side View** - O(n), O(n) - BFS last per level
39. **DFS Preorder** - O(n), O(h) - Root first
40. **DFS Inorder** - O(n), O(h) - Left-Root-Right
41. **DFS Postorder** - O(n), O(h) - Children first
42. **Path Sum** - O(n), O(h) - Root-to-leaf sum
43. **Path Sum II** - O(n), O(h) - All valid paths (backtracking)
44. **Diameter of Binary Tree** - O(n), O(h) - Max path through any node
45. **Balanced Binary Tree** - O(n), O(h) - Height-balanced check
46. **LCA** - O(n), O(h) - Lowest common ancestor
47. **Serialize/Deserialize** - O(n), O(n) - Tree to string

### MATRIX (2)
48. **Spiral Traversal** - O(m*n), O(1) - Spiral order
49. **Set Matrix Zeroes** - O(m*n), O(1) - In-place modification

### GRAPHS (11)
50. **DFS** - O(V+E), O(V) - Explore all paths
51. **BFS** - O(V+E), O(V) - Shortest path (unweighted)
52. **Clone Graph** - O(V+E), O(V) - Deep copy with cycle handling
53. **Word Ladder** - O(n·L·26), O(n) - BFS shortest transformation
54. **DFS Cycle Detection** - O(V+E), O(V) - Detect cycles
55. **Topological Sort (Kahn's)** - O(V+E), O(V) - Dependency order
56. **Dijkstra's** - O((V+E) log V), O(V) - Shortest path (weighted)
57. **Bellman Ford** - O(VE), O(V) - With negative weights
58. **Floyd Warshall** - O(V³), O(V²) - All pairs shortest
59. **Union Find** - O(α(n)), O(n) - Dynamic connectivity
60. **Kruskal's (MST)** - O(E log E), O(V) - Minimum spanning tree

### BACKTRACKING (4)
61. **Subset** - O(2ⁿ), O(n) - Generate all subsets
62. **Permutations** - O(n!), O(n) - Generate all permutations
63. **Combination Sum** - O(2ⁿ), O(n) - Find combinations
64. **Palindrome Partitioning** - O(2ⁿ), O(n) - Partition string

### DYNAMIC PROGRAMMING (11)
65. **1D DP (Fibonacci)** - O(n), O(n) or O(1) - Sequence problems
66. **Grid DP** - O(m*n), O(m*n) - Path counting
67. **LIS (Dynamic Subproblems)** - O(n²) or O(n log n), O(n) - Longest increasing
68. **Dual Sequence (LCS)** - O(m*n), O(m*n) - Two strings/arrays
69. **0/1 Knapsack (Top-down)** - O(n*sum), O(n*sum) - Choose/skip
70. **0/1 Knapsack (Bottom-up)** - O(n*sum), O(n*sum) - Tabulation
71. **Unbounded Knapsack** - O(n*amount), O(amount) - Unlimited use
72. **Interval DP** - O(n³), O(n²) - Range problems
73. **Word Break** - O(n²), O(n) - String segmentation
74. **Stock Buy/Sell I** - O(n), O(1) - One transaction
75. **Stock Buy/Sell II** - O(n), O(1) - Multiple transactions

### GREEDY (4)
76. **Merge Intervals** - O(n log n), O(1) - Interval merging
77. **Jump Game** - O(n), O(1) - Greedy choice
78. **Task Scheduling** - O(n log n), O(1) - Scheduling
79. **Candy** - O(n), O(n) - Distribution

### HEAP (4)
80. **Min Heap** - O(log n) insert/delete, O(n) build - Priority queue
81. **Find Median (Two Heaps)** - O(log n) insert, O(1) median - Stream median
82. **Merge k Sorted** - O(n log k), O(k) - Merge lists/arrays
83. **Heap vs BST** - Conceptual understanding

### SORTING (3)
84. **Merge Sort** - O(n log n), O(n) - Stable divide and conquer
85. **Sort List** - O(n log n), O(log n) - Merge sort on linked list
86. **Quick Sort** - O(n log n) avg, O(n²) worst, O(log n) space - Partition sort

### DESIGN & ADVANCED (6)
87. **LRU Cache** - O(1) get/put, O(capacity) space - Cache design
88. **Fenwick Tree (BIT)** - O(log n) update/query, O(n) space - Range queries
89. **Maths (Base, Modular, Log)** - varies - Number theory
90. **Permutations/Subsets (Math)** - O(1) - Combinatorics
91. **Merge Sorted Array** - O(n+m), O(1) - Two pointer merge
92. **Time Complexity** - Conceptual - Big O analysis

---

## 🔑 Code Templates

### 1. Two Pointers (Opposite Ends)
```javascript
function twoPointers(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        // Check condition
        if (condition) {
            // Do something
            left++; right--;
        } else if (needMoveLeft) {
            left++;
        } else {
            right--;
        }
    }
}
```

### 2. Sliding Window (Variable Size)
```javascript
function slidingWindow(s) {
    let left = 0, right = 0;
    let maxLen = 0;
    let window = {};

    while (right < s.length) {
        // Expand window
        window[s[right]]++;
        right++;

        // Contract window when invalid
        while (invalid) {
            window[s[left]]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}
```

### 3. DFS (Tree/Graph)
```javascript
function dfs(node, visited = new Set()) {
    if (!node || visited.has(node)) return;

    visited.add(node);
    // Process node

    for (let neighbor of node.neighbors) {
        dfs(neighbor, visited);
    }
}
```

### 4. BFS (Level Order)
```javascript
function bfs(start) {
    let queue = [start];
    let visited = new Set([start]);

    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            // Process node

            for (let neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}
```

### 5. Backtracking
```javascript
function backtrack(path, choices, result) {
    if (isComplete(path)) {
        result.push([...path]);
        return;
    }

    for (let choice of choices) {
        // Make choice
        path.push(choice);

        // Recurse
        backtrack(path, newChoices, result);

        // Undo choice
        path.pop();
    }
}
```

### 6. Dynamic Programming (Top-down)
```javascript
function dp(n, memo = {}) {
    if (baseCase) return baseValue;
    if (memo[n]) return memo[n];

    memo[n] = // compute from subproblems
    return memo[n];
}
```

### 7. Dynamic Programming (Bottom-up)
```javascript
function dp(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = baseValue;

    for (let i = 1; i <= n; i++) {
        dp[i] = // compute from dp[i-1], dp[i-2], etc.
    }
    return dp[n];
}
```

### 8a. Binary Search (Classic - Exact Match)
```javascript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Uses left <= right, returns as soon as target is found
// Use when: searching for a specific value in sorted array
```

### 8b. Binary Search (First True - First Occurrence)
```javascript
function firstTrue(arr) {
    let left = 0, right = arr.length - 1;
    let firstTrueIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            firstTrueIndex = mid;
            right = mid - 1;     // keep searching left for earlier match
        } else {
            left = mid + 1;
        }
    }
    return firstTrueIndex;
}
// Continues searching even after finding a match
// Use when: "find first element that satisfies condition"
```

### 8c. Binary Search (Boundary - Finding Position)
```javascript
function lowerBound(arr, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left;  // left  the first index where >= target
}
// Right pointer is exclusive boundary, never subtracts 1 from mid
// Use when: finding insertion position, boundaries between regions
```

**8b and 8c are the same concept** — both find the "first index where a condition is true." The lower bound is a compact form where the answer lands at `left === right` instead of being saved explicitly.

| | First True (8b) | Lower Bound (8c) |
|---|---|---|
| Feasible? | `feasible(mid)` → save, go left | `arr[mid] >= target` → go left |
| Not feasible? | go right | `arr[mid] < target` → go right |
| Answer | `firstTrueIndex` | `left` (when `left === right`) |
| `right` init | `arr.length - 1` | `arr.length` (answer can be past end) |

### 9. Union Find
```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false;

        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        return true;
    }
}
```

### 10. Dijkstra's Algorithm
```javascript
function dijkstra(graph, start) {
    let dist = new Array(n).fill(Infinity);
    let heap = new MinHeap([[0, start]]); // [distance, node]
    dist[start] = 0;

    while (!heap.isEmpty()) {
        let [d, node] = heap.pop();
        if (d > dist[node]) continue;

        for (let [neighbor, weight] of graph[node]) {
            let newDist = dist[node] + weight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                heap.push([newDist, neighbor]);
            }
        }
    }
    return dist;
}
```

---

## ⚡ Time Complexity Hierarchy (Fast to Slow)

```
O(1) < O(log log n) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```

**Common Complexities:**
- **O(1):** Hash map lookup, array access
- **O(log n):** Binary search, balanced tree operations
- **O(n):** Linear scan, two pointers, sliding window
- **O(n log n):** Merge sort, quick sort (avg), heap operations on n elements
- **O(n²):** Nested loops, basic DP
- **O(2ⁿ):** Subsets, some backtracking
- **O(n!):** Permutations

---

## 🎯 Decision Tree (One-Minute Pattern Selection)

```
START
  ├─ Array/String?
  │  ├─ Contiguous elements? → Sliding Window
  │  ├─ Sorted + pairs? → Two Pointers
  │  ├─ Range sums? → Prefix Sum
  │  └─ Search in sorted? → Binary Search
  │
  ├─ Tree/Graph?
  │  ├─ Shortest path? → BFS (unweighted) / Dijkstra (weighted)
  │  ├─ All paths? → DFS / Backtracking
  │  ├─ Connectivity? → Union Find / DFS
  │  └─ Topological order? → Topological Sort
  │
  ├─ Need all solutions?
  │  └─ Backtracking
  │
  ├─ Optimization (min/max)?
  │  ├─ Greedy works? → Greedy
  │  └─ Overlapping subproblems? → DP
  │
  └─ Design?
     ├─ Cache? → LRU Cache
     ├─ Prefix? → Trie
     └─ Priority? → Heap
```

---

## 📊 Space vs Time Trade-offs

| Technique | Time Saved | Space Cost |
|-----------|------------|------------|
| Hash Map | O(n²) → O(n) | +O(n) |
| Memoization | O(2ⁿ) → O(n²) | +O(n) or +O(n²) |
| Prefix Sum | O(n) per query → O(1) | +O(n) |
| Heap | O(n log n) → O(n log k) | +O(k) |

---

## 🚨 Common Mistakes to Avoid

1. **Off-by-one errors:** Check `<` vs `<=`, `left + 1` vs `left`
2. **Integer overflow:** Use `Math.floor((left + right) / 2)` not `(left + right) / 2`
3. **Not handling duplicates:** Consider `[1,1,1,1]` test case
4. **Forgetting edge cases:** Empty input, single element, all same
5. **Wrong complexity analysis:** Don't forget space complexity
6. **Modifying while iterating:** Use separate result array
7. **Not considering negative numbers:** Test with [-1, -2, -3]
8. **Stack overflow with deep recursion:** Consider iterative solution
9. **Not initializing data structures:** Check for null/undefined
10. **Forgetting to mark visited in graphs:** Infinite loops!

---

## 🎓 Interview Checklist

**Before coding:**
- [ ] Understand problem (restate in your words)
- [ ] Ask clarifying questions
- [ ] Discuss examples and edge cases
- [ ] Explain approach and complexity
- [ ] Get confirmation before coding

**While coding:**
- [ ] Use descriptive variable names
- [ ] Write clean, readable code
- [ ] Think out loud
- [ ] Handle edge cases
- [ ] Test with example

**After coding:**
- [ ] Walk through code with example
- [ ] Discuss time complexity: O(?)
- [ ] Discuss space complexity: O(?)
- [ ] Mention optimizations
- [ ] Discuss trade-offs

