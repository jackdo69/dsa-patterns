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
1. [**Two Sum (Hash Map)**](/notes/two-sum.md) - O(n), O(n) - Complement lookup
2. [**3Sum (Two Pointers)**](/notes/3sum.md) - O(n²), O(1) - Triplet finding
3. [**Trapping Rain Water**](/notes/trapping-rain-water.md) - O(n), O(1) - Two pointer bottleneck
4. [**Prefix Sum**](/notes/prefix-sum.md) - O(n), O(n) - Range sum queries
5. [**Kadane's**](/notes/kadane-s-algorithm-sub-array-max-sum.md) - O(n), O(1) - Max subarray sum
6. [**Product Except Self**](/notes/product-except-self.md) - O(n), O(1) - Array multiplication
7. [**Two Pointers**](/notes/container-with-most-water.md) - O(n), O(1) - Sorted array pairs
8. [**Cyclic Sort**](/notes/cyclic-sort-find-the-duplicate-number.md) - O(n), O(1) - Find missing/duplicate in [1..n]
9. [**In-place Rotation**](/notes/in-place-rotation.md) - O(n), O(1) - Rotate array
10. [**Move Zeroes**](/notes/move-zeroes.md) - O(n), O(1) - In-place rearrangement

### HASH MAPS (3)
11. [**Group Anagrams**](/notes/group-anagrams.md) - O(n·k log k), O(n·k) - Sort-based grouping
12. [**Top K Frequent**](/notes/top-k-frequent-elements.md) - O(n), O(n) - Bucket sort frequency
13. [**Longest Consecutive Sequence**](/notes/longest-consecutive-sequence.md) - O(n), O(n) - Set-based streak

### SLIDING WINDOW (3)
14. [**Fixed Size**](/notes/fixed-size-find-all-anagrams-in-a-string.md) - O(n), O(k) - Window size k
15. [**Variable Size**](/notes/variable-size-longest-substring-without-repeatin.md) - O(n), O(k) - Longest/shortest substring
16. [**Monotonic Queue/Stack**](/notes/monotonic-queue-stack-sliding-window-maximum.md) - O(n), O(k) - Sliding window max/min

### STRINGS (5)
17. [**String Reversal**](/notes/string-reversal-reverse-string-in-place.md) - O(n), O(1) - In-place reverse
18. [**ATOI**](/notes/string-to-integer-ascii-to-integer-atoi.md) - O(n), O(1) - String to integer
19. [**Rabin Karp**](/notes/string-matching-rabin-karp.md) - O(n+m), O(1) - Pattern matching
20. [**Expanding from Center**](/notes/expanding-from-center-longest-palindrome-substri.md) - O(n²), O(1) - Palindromes
21. [**Trie**](/notes/trie-prefix-tree.md) - O(L), O(N*L) - Prefix tree

### STACK (5)
22. [**Valid Parentheses**](/notes/valid-parentheses.md) - O(n), O(n) - Matching pairs
23. [**Min Stack**](/notes/min-stack.md) - O(1) all ops, O(n) - Stack with min tracking
24. [**Daily Temperatures**](/notes/daily-temperatures.md) - O(n), O(n) - Monotonic stack application
25. [**Monotonic Stack**](/notes/monotonic-stack-remove-k-digits.md) - O(n), O(n) - Next greater/smaller
26. [**Expression Evaluation**](/notes/expression-evaluation-basic-calculator.md) - O(n), O(n) - Calculator

### LINKED LIST (6)
27. [**Fast & Slow (Floyd's)**](/notes/fast-slow-floyd-s-algorithm-cycle-detection.md) - O(n), O(1) - Cycle detection
28. [**In-Place Reversal**](/notes/in-place-reversal-reverse-linked-list-ii.md) - O(n), O(1) - Reverse list
29. [**Merge Two Sorted**](/notes/merge-two-sorted-lists.md) - O(n+m), O(1) - Merge lists
30. [**Remove Nth from End**](/notes/remove-nth-node-from-end-of-list.md) - O(n), O(1) - Remove node
31. [**Intersection Detection**](/notes/intersection-detection.md) - O(n+m), O(1) - Find intersection
32. [**Rotate List**](/notes/reordering-partitioning-rotate-list.md) - O(n), O(1) - Reorder list

### BINARY SEARCH (4)
33. [**Monotonic Functions**](/notes/binary-search-lowerbound-vs-upperbound.md) - O(log n), O(1) - Classic binary search
34. [**Rotated Sorted Array**](/notes/find-min-max-search-in-rotated-sorted-array.md) - O(log n), O(1) - Find min/max
35. [**K Closest Elements**](/notes/find-k-closest-elements.md) - O(log n + k), O(1) - Binary search + expand
36. [**Median of 2 Sorted**](/notes/median-of-2-sorted-arrays.md) - O(log(min(m,n))), O(1) - Binary search on smaller

### TREES (11)
37. [**BFS (Level Order)**](/notes/bfs-binary-tree-level-order-traversal.md) - O(n), O(n) - Level by level
38. [**Binary Tree Right Side View**](/notes/binary-tree-right-side-view.md) - O(n), O(n) - BFS last per level
39. [**DFS Preorder**](/notes/dfs-preorder-traversal-same-tree.md) - O(n), O(h) - Root first
40. [**DFS Inorder**](/notes/dfs-in-order-traversal-validate-binary-search-tr.md) - O(n), O(h) - Left-Root-Right
41. [**DFS Postorder**](/notes/dfs-postorder-traversal-max-depth.md) - O(n), O(h) - Children first
42. [**Path Sum**](/notes/path-sum.md) - O(n), O(h) - Root-to-leaf sum
43. [**Path Sum II**](/notes/path-sum-ii.md) - O(n), O(h) - All valid paths (backtracking)
44. [**Diameter of Binary Tree**](/notes/diameter-of-binary-tree.md) - O(n), O(h) - Max path through any node
45. [**Balanced Binary Tree**](/notes/balanced-binary-tree.md) - O(n), O(h) - Height-balanced check
46. [**LCA**](/notes/lowest-common-ancestor-lca.md) - O(n), O(h) - Lowest common ancestor
47. [**Serialize/Deserialize**](/notes/serialize-and-deserialize-binary-tree.md) - O(n), O(n) - Tree to string

### MATRIX (2)
48. [**Spiral Traversal**](/notes/spiral-traversal.md) - O(m*n), O(1) - Spiral order
49. [**Set Matrix Zeroes**](/notes/set-matrix-zeroes.md) - O(m*n), O(1) - In-place modification

### GRAPHS (11)
50. [**DFS**](/notes/dfs-number-of-islands.md) - O(V+E), O(V) - Explore all paths
51. [**BFS**](/notes/bfs-rotting-oranges.md) - O(V+E), O(V) - Shortest path (unweighted)
52. [**Clone Graph**](/notes/clone-graph.md) - O(V+E), O(V) - Deep copy with cycle handling
53. [**Word Ladder**](/notes/word-ladder.md) - O(n·L·26), O(n) - BFS shortest transformation
54. [**DFS Cycle Detection**](/notes/dfs-cycle-detection-course-schedule-ii.md) - O(V+E), O(V) - Detect cycles
55. [**Topological Sort (Kahn's)**](/notes/topological-sort-kahn-algorithm-course-schedul.md) - O(V+E), O(V) - Dependency order
56. [**Dijkstra's**](/notes/shortest-path-dijkstra-algorithm-network-delay.md) - O((V+E) log V), O(V) - Shortest path (weighted)
57. [**Bellman Ford**](/notes/shortest-path-bellman-ford-algorithm-cheapest.md) - O(VE), O(V) - With negative weights
58. [**Floyd Warshall**](/notes/shortest-path-floy-warshall-algorithm-minimum.md) - O(V³), O(V²) - All pairs shortest
59. [**Union Find**](/notes/union-find-disjoint-set-number-of-operations-to.md) - O(α(n)), O(n) - Dynamic connectivity
60. [**Kruskal's (MST)**](/notes/minimum-spanning-tree-kruskal-algorithm.md) - O(E log E), O(V) - Minimum spanning tree

### BACKTRACKING (4)
61. [**Subset**](/notes/subset.md) - O(2ⁿ), O(n) - Generate all subsets
62. [**Permutations**](/notes/permutations-unique.md) - O(n!), O(n) - Generate all permutations
63. [**Combination Sum**](/notes/pruning-combination-sum.md) - O(2ⁿ), O(n) - Find combinations
64. [**Palindrome Partitioning**](/notes/palindrome-partitioning.md) - O(2ⁿ), O(n) - Partition string

### DYNAMIC PROGRAMMING (11) — [Wiki](/notes/dynamic-programming-wiki.md)
65. [**1D DP (Fibonacci)**](/notes/basic-fibonacci-1d-array.md) - O(n), O(n) or O(1) - Sequence problems
66. [**Grid DP**](/notes/grid-unique-paths.md) - O(m*n), O(m*n) - Path counting
67. [**LIS (Dynamic Subproblems)**](/notes/dynamic-number-of-subproblems-longest-increasing.md) - O(n²) or O(n log n), O(n) - Longest increasing
68. [**Dual Sequence (LCS)**](/notes/dual-sequence-longest-common-subsequence-lcs.md) - O(m*n), O(m*n) - Two strings/arrays
69. [**0/1 Knapsack (Top-down)**](/notes/0-1-knapsack-target-sum-top-down-approach.md) - O(n*sum), O(n*sum) - Choose/skip
70. [**0/1 Knapsack (Bottom-up)**](/notes/0-1-knapsack-partition-equal-subset-sum-bottom.md) - O(n*sum), O(n*sum) - Tabulation
71. [**Unbounded Knapsack**](/notes/unbounded-knapsack-coin-change.md) - O(n*amount), O(amount) - Unlimited use
72. [**Interval DP**](/notes/interval-dp-busting-balloons.md) - O(n³), O(n²) - Range problems
73. [**Word Break**](/notes/word-break.md) - O(n²), O(n) - String segmentation
74. [**Stock Buy/Sell I**](/notes/best-time-to-buy-and-sell-stock.md) - O(n), O(1) - One transaction
75. [**Stock Buy/Sell II**](/notes/best-time-to-buy-and-sell-stock-ii.md) - O(n), O(1) - Multiple transactions

### GREEDY (4)
76. [**Merge Intervals**](/notes/merge-interval.md) - O(n log n), O(1) - Interval merging
77. [**Jump Game**](/notes/jump-game.md) - O(n), O(1) - Greedy choice
78. [**Task Scheduling**](/notes/task-scheduling.md) - O(n log n), O(1) - Scheduling
79. [**Candy**](/notes/candy.md) - O(n), O(n) - Distribution

### HEAP (4)
80. [**Min Heap**](/notes/min-heap.md) - O(log n) insert/delete, O(n) build - Priority queue
81. [**Find Median (Two Heaps)**](/notes/find-median-from-data-stream.md) - O(log n) insert, O(1) median - Stream median
82. [**Merge k Sorted**](/notes/merge-k-sorted-lists.md) - O(n log k), O(k) - Merge lists/arrays
83. [**Heap vs BST**](/notes/min-heap-vs-binary-search-tree.md) - Conceptual understanding

### SORTING (3)
84. [**Merge Sort**](/notes/merge-sort.md) - O(n log n), O(n) - Stable divide and conquer
85. [**Sort List**](/notes/sort-list.md) - O(n log n), O(log n) - Merge sort on linked list
86. [**Quick Sort**](/notes/quick-sort.md) - O(n log n) avg, O(n²) worst, O(log n) space - Partition sort

### OTHER TOPICS (6)
87. [**LRU Cache**](/notes/lru-cache.md) - O(1) get/put, O(capacity) space - Cache design
88. [**Fenwick Tree (BIT)**](/notes/fenwick-tree-binary-index-tree.md) - O(log n) update/query, O(n) space - Range queries
89. [**Maths (Base, Modular, Log)**](/notes/maths.md) - varies - Number theory
90. **Permutations/Subsets (Math)** - O(1) - Combinatorics
91. [**Merge Sorted Array**](/notes/merge-sorted-array.md) - O(n+m), O(1) - Two pointer merge
92. [**Time Complexity**](/notes/time-complexity.md) - Conceptual - Big O analysis

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

### 3a. Pre-order Traversal (Root → Left → Right)
```javascript
function preorder(node) {
    if (!node) return;
    process(node);        // ← root first
    preorder(node.left);
    preorder(node.right);
}
// Use when: building a copy of tree, serialization, prefix expressions
```

### 3b. In-order Traversal (Left → Root → Right)
```javascript
function inorder(node) {
    if (!node) return;
    inorder(node.left);
    process(node);        // ← root in middle
    inorder(node.right);
}
// Use when: BST gives sorted order, validate BST, kth smallest
```

### 3c. Post-order Traversal (Left → Right → Root)
```javascript
function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    process(node);        // ← root last (children processed first)
}
// Use when: delete tree, calculate height/diameter, evaluate expressions
```

### 3d. DFS (Graph)
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

### 7a. Dynamic Programming (0/1 Knapsack)
```javascript
// Each item used at most once — iterate BACKWARD
function knapsack01(nums, target) {
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = target; i >= num; i--) {  // backward!
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[target];
}
// Backward prevents reusing the same number twice
// Use when: subset sum, partition equal subset, target sum
```

### 7b. Dynamic Programming (Unbounded Knapsack)
```javascript
// Each item used unlimited times — iterate FORWARD
function knapsackUnbounded(coins, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= target; i++) {  // forward!
            dp[i] += dp[i - coin];
        }
    }
    return dp[target];
}
// Forward allows reusing the same item multiple times
// Use when: coin change, unbounded supply, combinations to reach target
```

### 7c. Dynamic Programming (LCS)
```javascript
function lcs(s1, s2) {
    const dp = Array.from({ length: s1.length + 1 }, () =>
        new Array(s2.length + 1).fill(0)
    );

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[s1.length][s2.length];
}
// Use when: longest common subsequence, edit distance, diff
```

### 7d. Dynamic Programming (LIS)
```javascript
function lis(nums) {
    const tails = []; // tails[i] = smallest tail of increasing subseq of length i+1

    for (const num of nums) {
        let lo = 0, hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < num) lo = mid + 1;
            else hi = mid;
        }
        tails[lo] = num;
    }
    return tails.length;
}
// O(n log n) using patience sorting + binary search
// Use when: longest increasing subsequence, Russian doll envelopes
```

### 7e. Dynamic Programming (Grid DP)
```javascript
function gridDP(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));
    dp[0][0] = grid[0][0];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            const top = i > 0 ? dp[i - 1][j] : Infinity;
            const left = j > 0 ? dp[i][j - 1] : Infinity;
            dp[i][j] = grid[i][j] + Math.min(top, left);
        }
    }
    return dp[m - 1][n - 1];
}
// Use when: unique paths, min path sum, grid traversal
```

### 7f. Dynamic Programming (Interval DP)
```javascript
function intervalDP(arr) {
    const n = arr.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let len = 2; len <= n; len++) {          // subproblem length
        for (let i = 0; i <= n - len; i++) {      // start index
            const j = i + len - 1;                // end index
            dp[i][j] = Infinity;
            for (let k = i; k < j; k++) {         // split point
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + cost(i, j));
            }
        }
    }
    return dp[0][n - 1];
}
// Use when: burst balloons, matrix chain multiplication, palindrome partitioning
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

See [Binary Search - Lower vs Upper Bound](/notes/binary-search-lowerbound-vs-upperbound.md) for detailed comparison and walkthroughs.

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

